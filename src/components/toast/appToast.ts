import i18n from '@/i18n';
import { ToastTxKey, TxKeyPath } from '@/i18n/translations';
import { TOptions } from 'i18next';
import { toast } from 'sonner-native';

type ToastOptions = {
  description?: ToastTxKey;
  duration?: number;
  id?: string | number;
};

export function translate(key: TxKeyPath, options?: TOptions): string {
  console.log('inside translate i18n initialized:', i18n.isInitialized);
  if (i18n.isInitialized) {
    return i18n.t(key, options);
  }
  return key;
}

function buildToastOptions(options?: ToastOptions) {
  return {
    description: options?.description
      ? translate(options.description)
      : undefined,
    duration: options?.duration,
    id: options?.id,
  };
}

export const appToast = {
  success(key: ToastTxKey, options?: ToastOptions) {
    return toast.success(translate(key), buildToastOptions(options));
  },

  error(key: ToastTxKey, options?: ToastOptions) {
    return toast.error(translate(key), buildToastOptions(options));
  },

  info(key: ToastTxKey, options?: ToastOptions) {
    return toast.info(translate(key), buildToastOptions(options));
  },

  warning(key: ToastTxKey, options?: ToastOptions) {
    return toast.warning(translate(key), buildToastOptions(options));
  },

  loading(key: ToastTxKey, options?: ToastOptions) {
    return toast.loading(translate(key), buildToastOptions(options));
  },

  dismiss(id?: string | number) {
    toast.dismiss(id);
  },

  wiggle(id: string | number) {
    toast.wiggle(id);
  },
};
