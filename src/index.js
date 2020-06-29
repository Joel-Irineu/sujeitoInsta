import React, {useState} from 'react'
import { StyleSheet, StatusBar, View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import clockImg from './assets/cronometro.png'

export default function Main(){
    const [number, setNumber] = useState(0)
    const [timer, setTimer] = useState(null)
    const [timerOn, setTimerOn] = useState('Iniciar')
    const [lastTime, setLastTime] = useState(null)

    function goTimer(){
        if(timer !== null){
            clearInterval(timer)
            setTimer(null)
            setTimerOn('Continuar')
        }else{
            setTimerOn('Pausar')
            setTimer(setInterval(()=>{
                setNumber(number => number + 0.1)
            }, 100))  
        }
    }

    function cleam(){
        if(timer !== null){
            Alert.alert(
                'Atenção!',
                'É necessario pausar o cronometro antes de limpar o tempo'
            )
        }else{
            setLastTime(number)
            setNumber(0)
            setTimerOn('Iniciar')
        }
        
    }

    


    return(
        <View style={styles.container}>
            <StatusBar/>
            <View style={styles.timerArea}>
                <Image 
                    source={clockImg}
                    style={styles.img}
                />
                <Text style={styles.timer}>{number.toFixed(1)}</Text>
            </View>

            <View style={styles.btnArea}>
                <TouchableOpacity
                    onPress={goTimer}
                    style={styles.btn}
                >
                    <Text style={styles.btnText}>{timerOn}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={cleam}
                    style={styles.btn}
                >
                    <Text style={styles.btnText}>Limpar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.lastTimeArea}>
                    {lastTime ? 
                        <Text style={styles.lastTimeText}>O ultimo tempofoi de {lastTime.toFixed(1)}s</Text>
                    :
                        <Text></Text>
                    }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5488f0'
    },
    timerArea:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    img:{
        width: 200,
        height: 250,
    },
    timer:{
        top: -130,
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff'
    },
    btnArea:{
        flexDirection: 'row',
        top: -30
    },
    btn:{
        width: '40%',
        margin: 10,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 25,
        padding: 15,
    },
    btnText:{
        textAlign: 'center',
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
    },
    lastTimeText:{
        textAlign: 'center',
        fontSize: 15,
        color: '#f3f3f3'
    },
})