import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomePageScreen from '@screens/HomePage/HomePageScreen';

type ChartsParamList = {
  TestScreen: {name: string};
};

const HomeStack = () => {
  const Stack = createStackNavigator<ChartsParamList>();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TestScreen" component={HomePageScreen} />
    </Stack.Navigator>
  );
};
export default HomeStack;
