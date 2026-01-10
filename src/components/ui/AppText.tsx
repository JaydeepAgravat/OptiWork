import { TxKeyPath } from '@/i18n/translations';
import colors from '@/theme/colors';
import { TextPresetName, textPresets } from '@/theme/textPresets';
import { typography } from '@/theme/typography';
import { TOptions } from 'i18next';
import React, { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, StyleSheet, TextStyle } from 'react-native';

interface AppTextProps {
  tx: TxKeyPath;
  txOptions?: TOptions;
  preset?: TextPresetName;
  textAlign?: TextStyle['textAlign'];
  numberOfLines?: number;
}

const AppText = ({
  tx,
  txOptions,
  preset = 'bodyPrimary',
  textAlign,
  numberOfLines,
}: AppTextProps) => {
  const { t } = useTranslation();
  const finalStyle = useMemo<TextStyle>(() => {
    const selectedPreset = textPresets[preset] ?? textPresets.bodyPrimary;
    const typographyStyle = typography[selectedPreset.variant];

    return {
      textAlign,
      fontFamily: typographyStyle.fontFamily,
      fontSize: typographyStyle.fontSize,
      lineHeight: typographyStyle.lineHeight,
      letterSpacing: typographyStyle.letterSpacing,
      color: colors.light[selectedPreset.color],
    };
  }, [preset, textAlign]);

  return (
    <Text numberOfLines={numberOfLines} style={[styles.base, finalStyle]}>
      {t(tx, txOptions)}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    includeFontPadding: false,
  },
});

export default memo(AppText);
