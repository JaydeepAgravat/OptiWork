import { toast } from 'sonner-native';

import i18n from '@/i18n';
import type { ToastTxKey, TxKeyPath } from '@/i18n/translations';

import type { TOptions } from 'i18next';

type ToastOptions = {
  description?: ToastTxKey;
  duration?: number;
  id?: string | number;
};

export function translate(key: TxKeyPath, options?: TOptions): string {
  return i18n.t(key, options);
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
