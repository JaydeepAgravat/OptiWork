import { TxKeyPath } from '@/i18n/translations';
import { useTheme } from '@/providers/ThemeProvider';
import textPresets from '@/theme/textPresets';
import typography from '@/theme/typography';
import { TextPresetName } from '@/types/theme.types';
import { TOptions } from 'i18next';
import React, { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, StyleSheet, TextStyle } from 'react-native';

interface AppTextProps {
  text?: string;
  tx?: TxKeyPath;
  txOptions?: TOptions;
  preset?: TextPresetName;
  textAlign?: TextStyle['textAlign'];
  numberOfLines?: number;
}

const AppText = ({
  text,
  tx,
  txOptions,
  preset = 'bodyPrimary',
  textAlign,
  numberOfLines,
}: AppTextProps) => {
  const { t } = useTranslation();
  const { activeTheme } = useTheme();
  const finalStyle = useMemo<TextStyle>(() => {
    const selectedPreset = textPresets[preset] ?? textPresets.bodyPrimary;
    const typographyStyle = typography[selectedPreset.variant];

    return {
      textAlign,
      fontFamily: typographyStyle.fontFamily,
      fontSize: typographyStyle.fontSize,
      lineHeight: typographyStyle.lineHeight,
      letterSpacing: typographyStyle.letterSpacing,
      color: activeTheme.colors[selectedPreset.color],
    };
  }, [preset, textAlign, activeTheme.colors]);

  return (
    <Text numberOfLines={numberOfLines} style={[styles.base, finalStyle]}>
      {tx ? t(tx, txOptions) : text}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    includeFontPadding: false,
  },
});

export default memo(AppText);
