import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

  let nome = 'Irineu'
  let img = 'https://bit.ly/2VmtlrM'

  return (
    <View>
      <Text>Olá mundo</Text>
      <Text>Meu primeiro App</Text>
      <Text style={{color: '#ff0000', fontSize: 25, margin: 10}}>Sujeito Programador</Text>

      <Image 
        source={{uri: img}}
        style={{width: 300, height: 300}}
      />

      <Text style={{fontSize: 30,}}>{nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

