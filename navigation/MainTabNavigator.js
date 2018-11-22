import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen';
import ScoreScreen from '../screens/ScoreScreen';
import SettingsScreen from '../screens/SettingsScreen';


const HomeStack = createStackNavigator({
  Home: {
    screen : HomeScreen,
    navigationOptions: {
      title: 'Home',
      headerTintColor: 'green',
      animationEnabled: true,
      headerStyle: {
        borderBottomColor: '#e6e6e6'
      }
    }
  }
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Quiz',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};



const ScoreStack = createStackNavigator({
  Score: {
    screen : ScoreScreen,
    navigationOptions: {
      title: 'Score',
      headerTintColor: 'blue',
      animationEnabled: true,
      headerStyle: {
        borderBottomColor: '#e6e6e6'
      }
    }
  }
});

ScoreStack.navigationOptions = {
  tabBarLabel: 'Score',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};


const SettingsStack = createStackNavigator({
  Settings: {
    screen : SettingsScreen,
    navigationOptions: {
      title: 'Settings',
      headerTintColor: 'hotpink',
      animationEnabled: true,
      headerStyle: {
        borderBottomColor: '#e6e6e6'
      }
    }
  }
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};


export default createBottomTabNavigator({
  HomeStack,
  ScoreStack,
  SettingsStack,
});
