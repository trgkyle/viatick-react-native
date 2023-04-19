/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';

import AppFollow from './src/navigation/index';
import LoginScreen from './src/screens/LoginPage/LoginPageScreen';

import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

function App(): JSX.Element {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="App" component={AppFollow} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
}

export default App;
