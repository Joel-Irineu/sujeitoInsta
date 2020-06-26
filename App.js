import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class App extends Component{
  render(){
    return (
      <View>
        <Text>Olá mundo</Text>
        <Text>Meu primeiro App</Text>
        <Text style={{color: '#ff0000', fontSize: 25, margin: 10}}>Sujeito Programador</Text>

        <Irineu alt={320} larg={200} fulano='Irineu' />
      </View>
    );
  }
}

class Irineu extends Component{
  render(){
    let nome = this.props.fulano
    let img = 'https://bit.ly/2VmtlrM'

    return(
      <View>
        <Image 
          source={{uri: img}}
          style={{width: this.props.alt, height:this.props.larg}}
        />

        <Text style={{fontSize: 30, textAlign: 'center'}}>{nome}</Text>
      </View>
    )
  }
}

export default App;
