import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SettingsPageScreen from '@screens/SettingsPage/SettingsPageScreen';
import AlertSetupScreen from '@screens/NotificationPage/AlertSetup';
import FeedbackScreen from '@screens/SettingsPage/FeedbackScreen';
import ResetPasswordPageScreen from '@screens/SettingsPage/ResetLoginPassword';
type SettingsParamList = {
  SettingsScreen: {name: string};
  AlertSetupScreen: {name: string};
  FeedbackScreen: {name: string};
  ResetLoginPasswordScreen: {name: string};
};

const SettingsStack = () => {
  const Stack = createStackNavigator<SettingsParamList>();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SettingsScreen" component={SettingsPageScreen} />
      <Stack.Screen name="AlertSetupScreen" component={AlertSetupScreen} />
      <Stack.Screen name="FeedbackScreen" component={FeedbackScreen} />
      <Stack.Screen
        name="ResetLoginPasswordScreen"
        component={ResetPasswordPageScreen}
      />
    </Stack.Navigator>
  );
};
export default SettingsStack;
