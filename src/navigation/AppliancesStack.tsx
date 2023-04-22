import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomePageScreen from '@screens/HomePage/HomePageScreen';
type AppliancesParamList = {
  TestScreen: {name: string};
};

const AppliancesStack = () => {
  const Stack = createStackNavigator<AppliancesParamList>();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TestScreen" component={HomePageScreen} />
    </Stack.Navigator>
  );
};
export default AppliancesStack;
