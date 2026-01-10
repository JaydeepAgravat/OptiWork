import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '../providers/ThemeProvider';
import AppText from '@/components/ui/AppText';
import colors from '@/theme/colors';
import { LightDarkMode } from '@/types/theme.types';

type Option = {
  label: string;
  value: 'light' | 'dark' | 'system';
};

const OPTIONS: Option[] = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
  { label: 'System', value: 'system' },
];

const ThemeSettingsScreen = () => {
  const { themePreference, activeColorScheme, setThemePreference } = useTheme();

  return (
    <View style={viewPresets.screenBackground(activeColorScheme)}>
      <AppText tx="common:hello" preset="heroTitle" />

      {OPTIONS.map(option => {
        const selected = themePreference === option.value;

        return (
          <Pressable
            key={option.value}
            onPress={() => setThemePreference(option.value)}
            style={styles.row}
          >
            <View
              style={[
                styles.radio,
                radioPresets.radioBorder(activeColorScheme, selected),
              ]}
            >
              {selected && (
                <View style={radioPresets.radioDot(activeColorScheme)} />
              )}
            </View>

            <AppText text={option.label} preset="chipText" />
          </Pressable>
        );
      })}
    </View>
  );
};

const viewPresets = {
  screenBackground: (theme: LightDarkMode) => ({
    flex: 1,
    padding: 24,
    backgroundColor: colors[theme].bgElevated,
  }),
  card: (theme: LightDarkMode) => ({
    backgroundColor: colors[theme].bgCard,
    padding: 16,
    borderRadius: 8,
  }),
};

const radioPresets = {
  radioBorder: (theme: LightDarkMode, selected: boolean) => ({
    borderColor: selected
      ? colors[theme].borderDefaultInverse
      : colors[theme].borderFocusInverse,
  }),
  radioDot: (theme: LightDarkMode) => ({
    backgroundColor: colors[theme].bgSurfaceInverse,
  }),
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  radio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});

export default ThemeSettingsScreen;
