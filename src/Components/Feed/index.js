import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity,} from 'react-native'

export default function Feed({data}){
    const[feed, setFeed] = useState(data)
    return(
        <View style={styles.container}>
            <Text>{feed.id}</Text>
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