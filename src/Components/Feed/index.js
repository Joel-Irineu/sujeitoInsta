import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity,} from 'react-native'

import like from '../../assets/like.png'
import likeada from '../../assets/likeada.png'
import send from '../../assets/send.png'
import comment from '../../assets/comment.png'
import options from '../../assets/options.png'

export default function Feed({data}){
    const[feed, setFeed] = useState(data)
    const[likes, setLikes] = useState(feed.likeada)
    const[likesNum, setLikesNum] = useState(feed.likers)
    const[likeIcon, setLikeIcon] = useState(like)

    function showLikes(likers){
        if(likesNum <= 0){
            return
        }
        return(
        <Text style={styles.likes}>{likesNum} {likesNum > 1 ? 'curtidas': 'curtida'}</Text>
        )
    }

    function toLike(){
        if(likes === true){
            setLikes(false)
            setLikesNum(likesNum => likesNum - 1)
            console.log(likes)
            setLikeIcon(like)
        }else{
            setLikes(true)
            setLikesNum(likesNum => likesNum + 1)
            setLikeIcon(likeada)
        }
    }

    return(
        <View style={styles.areaFeed}>
            <View style={styles.profileView}>
                <View style={styles.profile}>
                    <Image 
                        source={{uri: feed.imgperfil}}
                        style={styles.profileImg}
                    />

                    <Text style={styles.profileName}>{feed.nome}</Text>
                </View>

                <TouchableOpacity>
                    <Image 
                        source={options}
                        style={styles.options}
                    />
                </TouchableOpacity>
            </View>

            <Image 
                resizeMode='cover'
                source={{uri: feed.imgPublicacao}}
                style={styles.feedImg}
            />

            <View style={styles.areaBtn}>
                <TouchableOpacity onPress={toLike}>
                    <Image 
                        source={likeIcon}
                        style={styles.btn}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnSend}>
                    <Image 
                        source={comment}
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

            {showLikes(feed.likers)}

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
        justifyContent: 'space-between'
    },
    profile:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    profileImg:{
        width: 35,
        height: 35,
        borderRadius: 25,
    },
    profileName:{
        fontSize: 16,
        textAlign: 'left',
        color: '#000',
        fontWeight: 'bold',
        marginLeft: 4,
    },
    options:{
        width: 20,
        height: 20,
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
    likes:{
        fontWeight: 'bold',
        marginLeft: 5,
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