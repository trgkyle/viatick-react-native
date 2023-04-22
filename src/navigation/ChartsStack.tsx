import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ChartPageScreen from '../screens/CharsPage/ChartsPageScreen';
type ChartsParamList = {
  TestScreen: {name: string};
};

const ChartStack = () => {
  const Stack = createStackNavigator<ChartsParamList>();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TestScreen" component={ChartPageScreen} />
    </Stack.Navigator>
  );
};
export default ChartStack;
