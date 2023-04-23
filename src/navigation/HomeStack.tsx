import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomePageScreen from '@screens/HomePage/HomePageScreen';
import {HomeStackParamList} from './stack.types';

const HomeStack = () => {
  const Stack = createStackNavigator<HomeStackParamList>();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TestScreen" component={HomePageScreen} />
    </Stack.Navigator>
  );
};
export default HomeStack;
