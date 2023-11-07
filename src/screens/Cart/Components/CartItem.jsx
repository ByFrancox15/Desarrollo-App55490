import { View, Text, Pressable } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import styles from './Cartitem.Styles'
import React from 'react'

const CartItem = ({item}) => {
  return (
    <View style={styles.container}>
         <View>
            <Image
                style={styles.image}
                source={{
                    uri: item.images[0]
                }} 
            />
            <Text style={styles.name}>{item.title}</Text>
        </View>
        <View style={styles.details}>
            <View>
                <Text>{item.quantity} </Text>
                <Text>{item.price} </Text>
            </View>
            <Pressable>
                <Feather name="trash" size={24} color={"red"}/>
            </Pressable>
        </View>
    </View>
    )
}

export default CartItem