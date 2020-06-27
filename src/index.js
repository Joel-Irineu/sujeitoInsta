import React, {useState} from 'react'
import { StyleSheet, StatusBar, View, Text, Image, TouchableOpacity } from 'react-native'
import fechado from './assets/biscoito.png'
import aberto from './assets/biscoitoAberto.png'

import luckTexts from './luckTexts'

export default function Main(){
    const [biscoito, setBiscoito] = useState(fechado)
    const [text, setText] = useState('Quebre o biscoito para ler a sorte!')


    function breakCookie(){
        let radonLuck = Math.floor(Math.random() * luckTexts.length)
        setBiscoito(aberto)
        setText(luckTexts[radonLuck])
    }
    console.log(text)

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor='#262626'/>
            <Image
                source={biscoito}
                style={styles.img}
            />
            <Text style={styles.luck}>{text}</Text>

            <TouchableOpacity
                onPress={breakCookie}
                style={styles.btn}
            >
                <Text style={styles.btnText}>Quebrar biscoito</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img:{
        width: 250,
        height: 250,
    },
    luck:{
        borderWidth: 1,
        padding: 10,
        borderColor: '#00000022',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 14,
        borderRadius: 5,
        width: '90%',
    },
    btn:{
        margin: 10,
        borderWidth: 2,
        borderColor: '#dd7b22',
        borderRadius: 25,
        padding: 15,
    },
    btnText:{
        fontSize: 15,
        color: '#dd7b22',
        fontWeight: 'bold',
    },
})