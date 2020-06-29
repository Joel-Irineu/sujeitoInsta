import React, { useState } from 'react'
import { StatusBar, View, Text, StyleSheet, Slider } from 'react-native'

export default function App(){
  const [valor, setValor] = useState(0)

  return(
    <View style={styles.container}>
      <StatusBar/>
      <Slider 
        minimumValue={0}
        maximumValue={100}
        onValueChange={(valorSelecionado)=> setValor(valorSelecionado)}
        value={valor}
        minimumTrackTintColor='#6666ff'
        maximumTrackTintColor='red'
      />
      <Text style={styles.valor}>{valor.toFixed(0 )}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
  },
  valor:{
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  }
})