import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';

// import BackDrop from '../screens/BackDrop'
import Questions from '../screens/Questions'
import MainTabNavigator from './MainTabNavigator';


export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html

  // BackDrop: BackDrop,
  Main: MainTabNavigator,
  Questions : Questions,
});

