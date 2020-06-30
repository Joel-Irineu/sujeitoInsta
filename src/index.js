import React, { useState } from 'react'
import { StatusBar, View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import FeedItens from './Components/Feed'

import logo from './assets/logo.png'
import send from './assets/send.png'

import feed from './services/feed'

export default function Main(){
    const [data, setData] = useState(feed)


  return(
    <View style={styles.container}>
        <StatusBar/>
        <View style={styles.header}>
            <TouchableOpacity>
                <Image 
                    source={logo}
                    style={styles.logo}
                />
            </TouchableOpacity>
           
           <TouchableOpacity>
                <Image 
                    source={send}
                    style={styles.send}
                />
           </TouchableOpacity>
        </View>

        <FlatList 
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({item}) => ( <FeedItens data={item} />)}
        />
      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    header:{
        height: 55,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,

        borderBottomWidth: .3,
        shadowColor: '#000',
        elevation: 1,
    },
    logo:{

    },
    send:{
        width: 25,
        height: 25,
    },

})