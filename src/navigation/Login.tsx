import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomePageScreen from '@screens/HomePage/HomePageScreen';
const Login = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainAccount" component={HomePageScreen} />
    </Stack.Navigator>
  );
};

export default Login;
