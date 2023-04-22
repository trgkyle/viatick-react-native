import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AppliancesPage from '../screens/AppliancesPage/AppliancesPageScreen';
type AppliancesParamList = {
  AppliancesScreen: {name: string};
};

const AppliancesStack = () => {
  const Stack = createStackNavigator<AppliancesParamList>();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AppliancesScreen" component={AppliancesPage} />
    </Stack.Navigator>
  );
};
export default AppliancesStack;
