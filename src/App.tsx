/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useCallback, useEffect } from 'react';
import { Dimensions, Linking, StyleSheet } from 'react-native';

import codePush from 'react-native-code-push';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import Profile from './pages/Profile';
import WebScreen from './pages/WebScreen';
import Product from './pages/Product';
import SplashScreen from 'react-native-splash-screen';

export type RootStackParamList = {
  Home: undefined;
  Profile: { userId: number; name: string };
  WebScreen: { url: string };
  Product: { name: string; price: number };
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function App(): React.JSX.Element {
  const handlePress = useCallback(async (url: string) => {
    const isNaver = url.includes('naversearchapp');
    const supported = await Linking.canOpenURL(url);

    if (isNaver) {
      if (supported) {
        await Linking.openURL(url);
      } else {
        await Linking.openURL(
          'https://play.google.com/store/apps/details?id=com.nhn.android.search',
        );
      }
    } else {
      await Linking.openURL(url);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000); //스플래시 활성화 시간
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen
          name="WebScreen"
          component={WebScreen}
          options={{ title: 'Other Site' }}
        />
        <Stack.Screen name="Product" component={Product} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
  updateDialog: {
    title: '새로운 업데이트',
    optionalUpdateMessage: '업데이트가 존재합니다. 진행할까요?',
    optionalInstallButtonLabel: '예',
    optionalIgnoreButtonLabel: '아니요.',
  },
  installMode: codePush.InstallMode.IMMEDIATE,
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  button: {
    width: windowWidth * 0.5,
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  backgroundStyle: {
    flex: 1,
    top: 250,
  },
  webview: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
  },
});

export default codePush(codePushOptions)(App);
