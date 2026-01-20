import { StyleSheet, View, ViewStyle } from 'react-native';
import AppLg from '@/components/ui/AppLg';
import AppButton from '@/components/ui/AppButton';
import AppText from '@/components/ui/AppText';
import { ThemeColors } from '@/theme/theme.types';
import { hS, vS } from '@/theme/scale';
import { useState } from 'react';
import { TxKeyPath } from '@/i18n/translations';
import { AuthStackScreenProps } from '@/navigation/navigation.types';
import { useAppTheme } from '@/hooks/useAppTheme';
import { useAppStore } from '@/store/useAppStore';

const slides: {
  title: TxKeyPath;
  subtitle: TxKeyPath;
}[] = [
  {
    title: 'onboard:welcome_title',
    subtitle: 'onboard:welcome_subtitle',
  },
  {
    title: 'onboard:stress_title',
    subtitle: 'onboard:stress_subtitle',
  },
  {
    title: 'onboard:plan_title',
    subtitle: 'onboard:plan_subtitle',
  },
  {
    title: 'onboard:navigation_title',
    subtitle: 'onboard:navigation_subtitle',
  },
];

type Props = AuthStackScreenProps<'Onboard'>;

const OnBoardScreen = ({ navigation }: Props) => {
  const { activeTheme } = useAppTheme();
  const completeOnboarding = useAppStore(state => state.completeOnboarding);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNextPress = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const onSkipPress = () => {
    completeOnboarding();
    navigation.navigate('Signin');
  };

  const onSignInPress = () => {
    completeOnboarding();
    navigation.navigate('Signin');
  };

  const onSignUpPress = () => {
    completeOnboarding();
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.root}>
      <AppLg style={styles.lg} />

      <View style={dStyle.content(activeTheme)}>
        <View style={styles.texts}>
          <AppText tx={slides[currentIndex].title} textAlign="center" />
          <AppText tx={slides[currentIndex].subtitle} textAlign="center" />
        </View>
        <View style={styles.tabs}>
          {currentIndex !== 3 &&
            slides
              .slice(0, 3)
              .map((_, index) => (
                <View
                  key={index}
                  style={[
                    dStyle.inActiveTab(activeTheme),
                    index === currentIndex && dStyle.activeTabBG(activeTheme),
                  ]}
                />
              ))}
        </View>

        <View style={styles.buttons}>
          {currentIndex !== 3 ? (
            <>
              <AppButton
                tx="common:next"
                onPress={onNextPress}
                variant="primary"
              />
              <AppButton
                tx="common:skip"
                onPress={onSkipPress}
                variant="secondary"
              />
            </>
          ) : (
            <>
              <AppButton
                tx="common:sign_in"
                onPress={onSignInPress}
                variant="primary"
              />
              <AppButton
                tx="common:sign_up"
                onPress={onSignUpPress}
                variant="secondary"
              />
            </>
          )}
        </View>
      </View>
    </View>
  );
};

const dStyle = {
  content: (activeTheme: ThemeColors): ViewStyle => ({
    flex: 1,
    paddingHorizontal: hS(32),
    paddingVertical: vS(40),
    backgroundColor: activeTheme.bgApp,
    justifyContent: 'space-between',
  }),
  inActiveTab: (activeTheme: ThemeColors): ViewStyle => ({
    width: hS(20),
    height: vS(4),
    borderRadius: 8,
    backgroundColor: activeTheme.primaryMuted,
  }),
  activeTabBG: (activeTheme: ThemeColors): ViewStyle => ({
    backgroundColor: activeTheme.primaryActive,
  }),
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  lg: {
    flex: 1,
  },
  texts: {
    justifyContent: 'center',
    gap: vS(12),
    minHeight: vS(120),
  },
  buttons: {
    justifyContent: 'flex-end',
    gap: vS(16),
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: hS(2),
  },
});

export default OnBoardScreen;
