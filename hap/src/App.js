import React, {Component} from 'react';
import { View,Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import Anasayfa from './anasayfa';
import ParaApp from './paraApp';
import HesapApp from './hesapApp';

const App = createStackNavigator({
  Anasayfa: {
    screen: Anasayfa,
    navigationOptions: {
      title: 'Hesap Makinesi ve Para Çevirici',
      headerStyle: { backgroundColor: 'darkblue' },
      headerTitleStyle:{fontSize:23},
      headerTintColor: 'yellow',
    },
  },
  HesapApp: {
    screen: HesapApp,
    navigationOptions: {
      title: 'Hesap İşlemleri',
      headerStyle: { backgroundColor: 'darkblue' },
      headerTitleStyle:{fontSize:23},
      headerTintColor: 'yellow',
    },
  },
  
  ParaApp: {
    screen: ParaApp,
    navigationOptions: {
      title: 'Döviz İşlemleri',
      headerStyle: { backgroundColor: 'darkblue' },
      headerTitleStyle:{fontSize:23},
      headerTintColor: 'yellow',
    }
  }
});

export default createAppContainer(App);