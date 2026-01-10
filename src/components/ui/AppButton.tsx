import { TxKeyPath } from '@/i18n/translations';
import { StyleSheet, TouchableOpacity } from 'react-native';
import AppText from './AppText';

interface AppButtonProps {
  tx: TxKeyPath;
  onPress: () => void;
  disabled?: boolean;
}

const AppButton = ({ tx, onPress, disabled }: AppButtonProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={styles.root1}
    >
      <AppText tx={tx} preset="buttonPrimary" textAlign="center" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root1: {
    paddingVertical: 20,
    paddingHorizontal: 12,
    borderRadius: 100,
    backgroundColor: '#5925DC',
  },
});

export default AppButton;
