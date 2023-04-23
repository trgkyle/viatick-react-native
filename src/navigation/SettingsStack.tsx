import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SettingsPageScreen from '../screens/SettingsPage/SettingsPageScreen';
type SettingsParamList = {
  TestScreen: {name: string};
};

const SettingsStack = () => {
  const Stack = createStackNavigator<SettingsParamList>();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TestScreen" component={SettingsPageScreen} />
    </Stack.Navigator>
  );
};
export default SettingsStack;
