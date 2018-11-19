import React from 'react';
import { createStackNavigator } from 'react-navigation';

import BackDrop from '../screens/BackDrop'
import MainTabNavigator from './MainTabNavigator';

import HomeScreen from '../screens/HomeScreen'

export default createStackNavigator({
    BackDrop: BackDrop,
    Main: MainTabNavigator
});