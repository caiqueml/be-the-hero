import React from 'react'
import {View, TouchableOpacity, Image, Text} from 'react-native'
import styles from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import logo from '../../assets/logo.png'
import { Feather } from '@expo/vector-icons'
import * as MailComposer from 'expo-mail-composer'
import { Linking } from 'react-native'

export default function Detail(){ 
    const route = useRoute()
    const incident = route.params.incident
    const navigation = useNavigation()
    const message = `Olá ${incident.name}, gostaria de ajudar com o caso ${incident.title} com valor de ${Intl.NumberFormat('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' })
            .format(incident.value)}`
    function navBack (){
        navigation.goBack()
    }

    function sendMail (){ 
        MailComposer.composeAsync({
            subject: incident.title,
            recipients: [incident.email],
            body: message
        })
    }

    function sendWhatsApp(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}?text=${message}`)
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo}/> 
                <TouchableOpacity onPress={navBack}>
                    <Feather name='arrow-left' 
                    size={28} 
                    color='#E82041'/>
                </TouchableOpacity>
            </View>  

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
                <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text> 

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text> 

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', { 
                    style: 'currency', 
                    currency: 'BRL' })
                        .format(incident.value)}</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso!</Text>
                <Text style={styles.heroDescription}>Entre em contato:</Text>
                <View style={styles.actions}>
                    <TouchableOpacity 
                    style={styles.action} 
                    onPress={sendWhatsApp}>
                        <Text style={styles.actionText}>WhatsApp: </Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                    style={styles.action} 
                    onPress={sendMail}>
                        <Text style={styles.actionText}>Email: </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}