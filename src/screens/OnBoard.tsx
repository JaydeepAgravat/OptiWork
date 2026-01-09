import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppText from '../components/ui/AppText';
import AppButton from '../components/ui/AppButton';
import { appToast } from '../components/toast/appToast';

import i18n from '../i18n';
import { appLoader } from '../components/loader/appLoader';
import FastImage from '@d11/react-native-fast-image';

const OnBoard = () => {
  const onNextPress = () => {
    appToast.info('toast:success_title', {
      description: 'toast:logic_success_desc',
    });
  };

  const onSkipPress = () => {
    appLoader.show();
    setTimeout(() => {
      appLoader.hide();
    }, 5000);
    // i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar');
  };
  return (
    <View
      style={{
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <FastImage
        style={{
          width: 100,
          height: 100,
        }}
        source={{
          uri: 'https://reactnative.dev/img/header_logo.svg',
          cache: FastImage.cacheControl.immutable,
          priority: FastImage.priority.low,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );

  return (
    <View style={styles.root}>
      <LinearGradient colors={['#7a5af8', '#fefeff']} style={styles.lg} />
      <View style={styles.content}>
        <View style={styles.texts}>
          <AppText tx="onboard:title" textAlign="center" />
          <AppText tx="onboard:subtitle" textAlign="center" />
        </View>
        <View style={styles.tabs}>
          <View style={styles.activeTab} />
          <View style={styles.inactiveTab} />
          <View style={styles.inactiveTab} />
        </View>

        <View style={styles.buttons}>
          <AppButton tx="common:next" onPress={onNextPress} />
          <AppButton tx="common:skip" onPress={onSkipPress} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  lg: { flex: 1 },
  content: {
    flex: 1,
    paddingHorizontal: 12,
  },
  texts: {
    flex: 1,
    justifyContent: 'flex-end',
    gap: 12,
  },
  buttons: {
    flex: 1,
    justifyContent: 'flex-end',
    gap: 16,
    paddingBottom: 40,
  },
  tabs: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
  },
  activeTab: {
    width: 20,
    height: 4,
    borderRadius: 8,
    backgroundColor: '#7A5AF8',
  },

  inactiveTab: {
    width: 20,
    height: 4,
    borderRadius: 8,
    backgroundColor: '#EBE9FE',
  },
});

export default OnBoard;
