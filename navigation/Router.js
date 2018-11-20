import React from 'react';
import { createStackNavigator } from 'react-navigation';

// import BackDrop from '../screens/BackDrop'
import MainTabNavigator from './MainTabNavigator';
import Questions from '../screens/Questions';

export default createStackNavigator({
    // BackDrop: BackDrop,
    Main: MainTabNavigator,
    Questions: Questions,
});