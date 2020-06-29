import React, { useState } from 'react'
import { StatusBar, View, Text, StyleSheet, Switch } from 'react-native'

export default function App(){
  const [status, setStatus] = useState(false)

  return(
    <View style={styles.container}>
      <StatusBar/>
      <Switch 
        value={status}
        onValueChange={(statusSwich)=> setStatus(statusSwich)}
        thumbColor='red'
      />
      <Text style={styles.valor}>
        {status ? 'ligado' : 'desligado' }
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  valor:{
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  }
})