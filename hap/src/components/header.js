import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

class Header extends Component{

    render () {
       const {header, headerText} = styles;

       return(
        <View style={header}>
           <Text style={headerText}>{this.props.headerText}</Text>
        </View>
       )
    }
}

const styles =  StyleSheet.create({
    header: {
        height:80,
        paddingTop:30,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
        shadowOpacity:0.5
     },
     headerText:{
       color:'darkblue',
       fontSize:37,
       textAlign:'center'
     }
    });
    export default Header;
