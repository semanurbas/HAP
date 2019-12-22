import React,{Component} from 'react';
import {StyleSheet,View,Text,TextInput} from 'react-native';
import axios from 'axios';

class Converter extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          tl: '',
          usd: '',
          cad: '',
          jpy: '',
          eur: '',
          input: '',
          rates: []
        }
        // debugla kontrol etme    debugger: console.log('constructor')
    
        this.getRates = this.getRates.bind(this);
      }
    
      getRates() {
        axios.get('http://data.fixer.io/api/latest?access_key=09a32b0b8cfbf4dcbfe49befe39341df&sysmbols=EUR,TRY,USD,CAD,JPY')
          .then(response => {
            console.log(response);
            const rates = response.data.rates;
            this.setState({
              rates
            })
          })
      }
    
      componentDidMount() { //component yuklenince çalışır
        console.log('componentDidMount');
        this.getRates();
      }
    
      render() {
        const { converterWrapper, inputStyle, textStyle } = styles;
        const { input, tl, usd, cad, jpy, eur, rates } = this.state;
    
        return (
          <View style={converterWrapper}>
            <TextInput placeholder='TR Değeri girin'
                       placeholderTextColor='darkblue'
                       style={inputStyle}
                       keyboardType='numeric'
                       onChangeText={(text) => {
                         const i = parseFloat(text) || 0;
    
                         this.setState({
                           input: text,
                           tl: (i * rates['TRY']).toFixed(3),
                           usd: (i * rates['USD']).toFixed(3),
                           cad: (i * rates['CAD']).toFixed(3),
                           jpy: (i * rates['JPY']).toFixed(3),
                           eur: (i * rates['EUR']).toFixed(3)
                         })
                       }}
                       value={`${input}`} />
    
            <Text style={textStyle}>TRY : {tl} </Text>
            <Text style={textStyle}>USD : {usd} </Text>
            <Text style={textStyle}>CAD : {cad} </Text>
            <Text style={textStyle}>JPY : {jpy} </Text>
            <Text style={textStyle}>EUR : {eur} </Text>
    
          </View>
        )
      }
    }
    
    const styles = StyleSheet.create({
      converterWrapper: {
        paddingTop: 30,
        marginStart:40,
        justifyContent: 'center',
        alignItems: 'center'
        
    
      },
      inputStyle: {
        fontSize:22,
        width: 200,
        marginStart:15,
        height: 70,
        paddingBottom: 25,
        color:'darkblue'
        
      },
      textStyle: {
        fontSize:20,
        width: 170,
        height: 55,
        fontWeight: 'bold',
        color:'darkblue'
        
      }
    });
    
    export default Converter;
    
    
    
    