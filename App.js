import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class App extends Component{
  
  constructor(props){
    super(props)
    this.state ={
      nome: 'joel'
    }
    this.entrar = this.entrar.bind(this)
  }

  entrar(nome){
    this.setState({
      nome: nome
    })
  }
  
  render(){
    return (
      <View style={{marginTop: 20}}>
        <Text style={{fontSize: 25, color: 'red', textAlign: 'center'}}>{this.state.nome}</Text>

        <Button
          title='Entrar'
          onPress={()=>this.entrar('irineu')}
        />

      </View>
    );
  }
}

export default App;
