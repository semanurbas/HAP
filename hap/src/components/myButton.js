
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Mybutton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.customClick}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'darkblue',
    color: '#ffffff',
    padding:50,
    marginTop:35,
    marginStart:40,
    marginEnd:40,

    justifyContent:'space-around',
    borderRadius:15
    
  },
  text: {
    color: 'yellow',
    fontSize:22
  }
});
export default Mybutton;