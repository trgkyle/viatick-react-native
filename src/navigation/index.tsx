import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
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
  switch (route.name) {
    case 'Home':
      iconName = focused ? 'home' : 'home';
      break;
    case 'Account':
      iconName = focused ? 'user' : 'user';
      break;
    case 'Like':
      iconName = focused ? 'heart' : 'heart';
      break;
    default:
      iconName = 'null';
  }
  return <Icon name={iconName} size={size} color={color} />;
};

const AppFollow = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) =>
          renderTabIcon(route, focused, color, size),
      })}
      // tabBarOptions={{
      //   keyboardHidesTabBar: true,
      //   activeTintColor: '#358c63',
      //   inactiveTintColor: 'gray',
      // }}
    >
      <Tab.Screen name="AppliancesStack" component={AppliancesStack} />
      <Tab.Screen name="ChartsStack" component={ChartsStack} />
      <Tab.Screen name="HomeStack" component={HomePage} />
      <Tab.Screen name="SettingsStack" component={SettingsStack} />
    </Tab.Navigator>
  );
};
export default AppFollow;
