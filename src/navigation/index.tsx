import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '@navigation/HomeStack';
import AppliancesStack from '@navigation/AppliancesStack';
import ChartsStack from '@navigation/ChartsStack';
import SettingsStack from '@navigation/SettingsStack';
const Tab = createBottomTabNavigator();

const renderTabIcon = (
  route: any,
  focused: boolean,
  color: string,
  size: number,
) => {
  let iconName;
  console.log(route.name);
  switch (route.name) {
    case 'AppliancesStack':
      iconName = focused ? 'construct-sharp' : 'construct-outline';
      break;
    case 'ChartsStack':
      iconName = focused ? 'pie-chart' : 'pie-chart-outline';
      break;
    case 'HomeStack':
      iconName = focused ? 'home' : 'home-outline';
      break;
    case 'SettingsStack':
      iconName = focused ? 'settings' : 'settings-outline';
      break;
    default:
      iconName = 'pausecircle';
  }
  return <Icon name={iconName} size={size} color={color} />;
};

const AppFollow = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) =>
          renderTabIcon(route, focused, color, size),
        keyboardHidesTabBar: true,
        activeTintColor: '#358c63',
        inactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="AppliancesStack" component={AppliancesStack} />
      <Tab.Screen name="ChartsStack" component={ChartsStack} />
      <Tab.Screen name="HomeStack" component={HomePage} />
      <Tab.Screen name="SettingsStack" component={SettingsStack} />
    </Tab.Navigator>
  );
};
export default AppFollow;
