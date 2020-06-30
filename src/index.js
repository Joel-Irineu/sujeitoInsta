import React, { useState } from 'react'
import { StatusBar, View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import FeedItens from './Components/Feed'

import logo from './assets/logo.png'
import send from './assets/send.png'
import camera from './assets/camera.png'

import feed from './services/feed'

export default function Main(){
    const [data, setData] = useState(feed)


  return(
    <View style={styles.container}>
        <StatusBar/>
        <View style={styles.header}>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{paddingRight: 3}}>
                        <Image 
                            source={camera}
                            style={styles.camera}
                        />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image 
                        source={logo}
                        style={styles.logo}
                    />
            </TouchableOpacity>
            </View>
           
           <TouchableOpacity>
                <Image 
                    source={send}
                    style={styles.send}
                />
           </TouchableOpacity>
        </View>

        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <FlatList 
                style={styles.storys}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={data}
                renderItem={({item}) => ( 
                    <TouchableOpacity>
                        <Image 
                            source={{uri: item.imgperfil}}
                            style={styles.profileImg}
                        />
                    </TouchableOpacity>
                )}
            />

            <FlatList 
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({item}) => ( <FeedItens data={item} />)}
            />
        </ScrollView>
      
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
    camera:{
        width: 28,
        height: 25,
    },
    logo:{

    },
    send:{
        width: 25,
        height: 25,
    },
    storys:{
        height: 65,
        marginTop: 7,
    },
    profileImg:{
        width: 50,
        height: 50,
        borderRadius: 25,
        alignSelf: 'center',
        margin: 5,
        borderWidth: 2,
        borderColor: '#D67707',
    },

})