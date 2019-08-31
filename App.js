import React, { Component } from 'react';
import {createStackNavigator,createAppContainer} from 'react-navigation';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';

const App = createStackNavigator({
    FirstPage: { screen: FirstPage }, 
    SecondPage: { screen: SecondPage }, 
  },
  {
    initialRouteName: 'FirstPage',
  }
);

export default createAppContainer(App);