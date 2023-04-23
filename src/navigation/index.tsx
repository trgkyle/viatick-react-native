import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '@navigation/HomeStack';
import AppliancesStack from '@navigation/AppliancesStack';
import ChartsStack from '@navigation/ChartsStack';
import SettingsStack from '@navigation/SettingsStack';
import {StyleSheet, View} from 'react-native';
const Tab = createBottomTabNavigator();

const renderTabIcon = (
  route: any,
  focused: boolean,
  color: string,
  size: number,
) => {
  let iconName;
  switch (route.name) {
    case 'AppliancesStack':
      iconName = focused ? 'bulb' : 'bulb-outline';
      break;
    case 'ChartsStack':
      iconName = focused ? 'bar-chart' : 'bar-chart-outline';
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
  const buttonStyle = focused
    ? styles.buttonTabBarActive
    : styles.buttonTabBarInActive;
  return (
    <View style={buttonStyle}>
      <Icon name={iconName} size={size} color={focused ? '#fff' : color} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonTabBarActive: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#000',
    borderRadius: 10,
  },
  buttonTabBarInActive: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
});
const AppFollow = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) =>
          renderTabIcon(route, focused, color, size),
        keyboardHidesTabBar: true,
        headerShown: false,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="HomeStack" component={HomePage} />
      <Tab.Screen name="AppliancesStack" component={AppliancesStack} />
      <Tab.Screen name="ChartsStack" component={ChartsStack} />
      <Tab.Screen name="SettingsStack" component={SettingsStack} />
    </Tab.Navigator>
  );
};
export default AppFollow;
