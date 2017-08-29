import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SignIn from '../screens/SignIn';
import HelpMe from '../screens/HelpMe';
import Locations from '../screens/Locations';

export default TabNavigator(
  {
    Home: {
      screen: HelpMe,
    },
    Account: {
      screen: SignIn,
    },
    Locations: {
      screen: Locations,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = Platform.OS === 'ios'
              ? `ios-home${focused ? '' : '-outline'}`
              : 'md-home';
            break;
          case 'Account':
            iconName = Platform.OS === 'ios'
              ? `ios-people${focused ? '' : '-outline'}`
              : 'md-people';
            break;
          case 'Locations':
            iconName = Platform.OS === 'ios'
              ? `ios-pin${focused ? '' : '-outline'}`
              : 'md-pin';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
