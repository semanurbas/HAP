
import React from 'react';
import { View, Text } from 'react-native';
import Mybutton from './components/myButton';

export default class Anasayfa extends React.Component {
render() {
    return (
    <View
        style={{
          flex: 1,
          backgroundColor: 'yellow',
          flexDirection: 'column',
        }}>

        <Mybutton 
          title="PARA ÇEVİRİCİ"
          customClick={() => this.props.navigation.navigate('ParaApp')}
        />
        <Mybutton 
          title="HESAP MAKİNESİ"
          customClick={() => this.props.navigation.navigate('HesapApp')}
        />
        
         <Text style={{color:'darkblue',fontSize:17, marginTop:130 , marginStart:52}}>Online Hesap Makinesi Döviz Kuru</Text>
        
      </View>
    );
}
}