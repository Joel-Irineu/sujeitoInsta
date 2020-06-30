import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity,} from 'react-native'

import like from '../../assets/like.png'
import likeada from '../../assets/likeada.png'
import send from '../../assets/send.png'

export default function Feed({data}){
    const[feed, setFeed] = useState(data)

    return(
        <View style={styles.areaFeed}>
            <View style={styles.profileView}>
                <Image 
                    source={{uri: feed.imgperfil}}
                    style={styles.profileImg}
                />

                <Text style={styles.profileName}>{feed.nome}</Text>
            </View>

            <Image 
                resizeMode='cover'
                source={{uri: feed.imgPublicacao}}
                style={styles.feedImg}
            />

            <View style={styles.areaBtn}>
                <TouchableOpacity>
                    <Image 
                        source={like}
                        style={styles.btn}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnSend}>
                    <Image 
                        source={send}
                        style={styles.btn}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerName}>{feed.nome}</Text>

                <Text style={styles.footerDescription}>{feed.descricao}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    areaFeed:{

    },
    profileView:{
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 8,
    },
    profileImg:{
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    profileName:{
        fontSize: 22,
        textAlign: 'left',
        color: '#000'
    },
    feedImg:{
        flex: 1,
        height: 300,
    },
    areaBtn:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
    },
    btn:{
        width: 33,
        height: 33,
    },
    btnSend:{
        paddingLeft: 7,
    },
    footer:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    footerName:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        paddingLeft: 5,
    },
    footerDescription:{
        paddingLeft: 5,
        fontSize: 15,
        color: '#000'
    },
})