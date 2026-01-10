import { TxKeyPath } from '@/i18n/translations';
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import AppText from './AppText';
import { mS, vS } from '@/theme/scale';
import { useAppTheme } from '@/hooks/useAppTheme';

type ButtonVariant = 'primary' | 'secondary';

interface AppButtonProps {
  tx: TxKeyPath;
  onPress: () => void;
  disabled?: boolean;
  variant?: ButtonVariant;
  style?: ViewStyle;
}

const AppButton = ({
  tx,
  onPress,
  disabled = false,
  variant = 'primary',
  style,
}: AppButtonProps) => {
  const { activeTheme } = useAppTheme();

  const { bg, textColor } = getButtonStyle(activeTheme, variant, disabled);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      disabled={disabled}
      onPress={onPress}
      style={[styles.root, { backgroundColor: bg }, style]}
    >
      <AppText
        tx={tx}
        preset="buttonPrimary"
        textAlign="center"
        color={textColor}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingVertical: vS(14),
    borderRadius: mS(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const getButtonStyle = (
  theme: any,
  variant: ButtonVariant,
  disabled?: boolean,
) => {
  if (disabled) {
    return {
      bg: theme.buttonDisabledBg,
      textColor: theme.buttonDisabledText,
    };
  }

  switch (variant) {
    case 'secondary':
      return {
        bg: theme.buttonSecondaryBg,
        textColor: theme.buttonSecondaryText,
      };

    case 'primary':
    default:
      return {
        bg: theme.buttonPrimaryBg,
        textColor: theme.buttonPrimaryText,
      };
  }
};

export default AppButton;
