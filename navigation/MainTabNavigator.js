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
      headerTintColor: '#00b0ff',
      animationEnabled: true,
      headerStyle: {
        borderBottomColor: '#00b0ff'
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
      headerTintColor: '#00b0ff',
      animationEnabled: true,
      headerStyle: {
        borderBottomColor: '#00b0ff'
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
      headerTintColor: '#00b0ff',
      animationEnabled: true,
      headerStyle: {
        borderBottomColor: '#00b0ff'
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
