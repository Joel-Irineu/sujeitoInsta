import React, { Component } from 'react';
import { Text, View, Button, StyleSheet} from 'react-native';

class App extends Component{

  
  render(){
    return (
      <View style={styles.container}>
        <Text style={[styles.primaryText, styles.centerAlign]}>Eu sou o texto 1</Text>
        <Text style={styles.centerAlign}>Eu sou o texto 2</Text>
        <Text>Eu sou o texto 3</Text>
        <Text style={styles.primaryText}>Eu sou o texto 4</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    marginTop: 40
  },
  primaryText:{
    fontSize: 25,
    color: '#ff0000'
  },
  centerAlign:{
    textAlign: 'center'
  }
})

export default App;
