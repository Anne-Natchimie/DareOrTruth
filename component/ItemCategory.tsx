import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import styles from '../styles'
import { useNavigation } from '@react-navigation/native'

type NameProps = {id:number, name:string}

const ItemCategory = ({id, name}:NameProps) => {

    const navigation = useNavigation()
    const goToDareOrTruth = () => {
        navigation.navigate('DareOrTruth')
    }

    return (
        <Button onPress={goToDareOrTruth} contentStyle={styles.item} labelStyle={styles.title} >{name}</Button>
        // <View style={styles.item}>
        // <Text style={styles.title}>{name}</Text>
        // </View>
    )
}

export default ItemCategory