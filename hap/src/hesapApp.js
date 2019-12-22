
import React, {Component} from 'react';
import { StyleSheet, View, Text, TextInput,Button } from 'react-native';
import Header from './components/header';

class HesapApp extends Component{
    constructor(props){
       super(props);

       this.state={
            input1: '',
            input2:'',
            result:''
        }
        this.sum = this.sum.bind(this);
        this.deduct = this.deduct.bind(this);
        this.div = this.div.bind(this);
        this.mult = this.mult.bind(this);
    }
  sum (){
    const number1= parseFloat(this.state.input1);
    const number2= parseFloat(this.state.input2);

    const result=number1 + number2;
    this.setState({
        result:result
    })
  }
  deduct (){
    const number1= parseFloat(this.state.input1);
    const number2= parseFloat(this.state.input2);

    const result=number1 - number2;
    this.setState({
        result:result
    })
  }
  div (){
    const number1= parseFloat(this.state.input1);
    const number2= parseFloat(this.state.input2);

    const result=number1 / number2;

    this.setState({
        result:result
    })
  }
  mult (){
    const number1= parseFloat(this.state.input1);
    const number2= parseFloat(this.state.input2);

    const result=number1 * number2;
    this.setState({
        result:result
    })
  }
    render() {
      return(
        <View style={styles.container}>

         <Header headerText='Hesap Makinesi'/>
         <View style={styles.buttonWrapper}>
            <Button onPress={this.sum}
                    color='darkblue'
                    title='+' 
            />
             <Button onPress={this.mult}
                    color='darkblue'
                    title='*'
            />
             <Button onPress={this.div}
                    color='darkblue'
                    title='/'
            
            />
             <Button onPress={this.deduct}
                    color='darkblue'
                    title='-'
            
            />

          </View>

          <View style={styles.contentWrapper}>
          <TextInput style={styles.input}
                       placeholder='Birinci Sayı'
                       placeholderTextColor='darkblue'
                       onChangeText={(text) => {
                         this.setState({
                           input1:text
                         })
                       }}
                       value={this.state.input1}
            />
        
          <TextInput style={styles.input}
                       placeholder='İkinci Sayı'
                       placeholderTextColor='darkblue'
                       onChangeText={(text) => {
                         this.setState({
                           input2:text
                         })
                       }}
                       value={this.state.input2}
          />
            
           <Text style={styles.simpleText}> Sonuç :
             {this.state.result}</Text>
        
          </View>
          <Text style={{color:'darkblue',fontSize:17, marginTop:130 , marginStart:52}}>Online Hesap Makinesi Döviz Kuru</Text>
        
        </View>
      );
    }
  }

   const styles = StyleSheet.create({
     container:{
       flex:1,
       flexDirection:'column',
       backgroundColor:'yellow'
       
     },
     buttonWrapper:{
      flexDirection: 'row',
      alignItems:'center',
      borderRadius:40,
      marginTop:23,
      justifyContent: 'space-evenly',
      

     },

     contentWrapper:{
       padding:70,
       height:200,
       flexDirection:'column',
       justifyContent:'center'

     },
     input:{
       marginStart:45,
        height:50,
        fontSize:25,
        color:'darkblue'
     },
     simpleText:{
       margin:5,
        fontSize:30,
        color:'darkblue'
     }
   });
   
export default HesapApp;