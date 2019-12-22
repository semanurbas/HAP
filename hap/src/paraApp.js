import React, {Component} from 'react';
import { View,Text} from 'react-native';

import Header from './components/header';
import Converter from './components/converter';

class ParaApp extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: 'yellow',
        flexDirection: 'column',
      }}>
        <Header headerText='Para Çevirici' />
        <Converter />
        <Text style={{color:'darkblue',fontSize:17, marginTop:20 , marginStart:52}}>Online Hesap Makinesi Döviz Kuru</Text>
      </View>
    );
  }
}
export default ParaApp;