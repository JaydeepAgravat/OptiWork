import { useEffect, useRef, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { toast } from 'sonner-native';

export const useNetworkStatus = () => {
  const [isOffline, setIsOffline] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      const connected =
        state.isConnected && state.isInternetReachable !== false;

      // ✅ First app open
      if (isFirstLoad.current) {
        isFirstLoad.current = false;
        if (!connected) {
          setIsOffline(true);
        }
        return;
      }

      // 🔴 Internet lost
      if (!connected) {
        toast.error('No internet connection');

        timeoutRef.current = setTimeout(() => {
          setIsOffline(true);
        }, 5000);
      }

      // 🟢 Internet back
      if (connected) {
        toast.success('Back online');

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }

        setIsOffline(false);
      }
    });

    return () => {
      unsubscribe();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return { isOffline };
};
