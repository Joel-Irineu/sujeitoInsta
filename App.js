import React, { useState } from 'react';
import { StatusBar, View, Text, StyleSheet, Picker } from 'react-native';
import { render } from 'react-dom';

export default function App(){
  const [pizza, setPizza] = useState(0)
  const pizzas = [
    {kay: 0, nome: 'Frango', valor: 35.90},
    {kay: 1, nome: 'Calabresa', valor: 20.90},
    {kay: 2, nome: 'Brigadeiro', valor: 18.00},
    {kay: 3, nome: 'Portuguesa', valor: 21.50}
  ]

  let pizzasItem = pizzas.map((item, key)=>{
    return(
      <Picker.Item key={key} value={key} label={item.nome} />
    )
  })

  return(
    <View style={styles.container}>
      <StatusBar/>
      <Text style={styles.logo}>Menu Pizzas</Text>

      <Picker
        selectedValue={pizza}
        onValueChange={(itemValue, itemIndex)=> setPizza(itemValue)}
      >
        {pizzasItem}
      </Picker>

      <Text style={styles.pizzas}>Você escolheu: {pizzas[pizza].nome}</Text>
      <Text style={styles.pizzas}>R$: {pizzas[pizza].valor.toFixed(2)}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  logo:{
    marginTop: 20,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  pizzas:{
    marginTop: 15,
    backgroundColor: '#ddd',
    fontSize: 25,
    textAlign: 'center',
  },
})