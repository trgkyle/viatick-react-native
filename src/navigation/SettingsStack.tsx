import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomePageScreen from '@screens/HomePage/HomePageScreen';
type SettingsParamList = {
  TestScreen: {name: string};
};

const SettingsStack = () => {
  const Stack = createStackNavigator<SettingsParamList>();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TestScreen" component={HomePageScreen} />
    </Stack.Navigator>
  );
};
export default SettingsStack;
