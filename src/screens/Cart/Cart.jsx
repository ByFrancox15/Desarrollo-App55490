import { View, Text, FlatList, Pressable } from 'react-native'

import CartItem from './Components/CartItem'
import React from 'react'
import Cart from '../../data/Cart'
import  styles from './Cart.styles'

const Cart = () => {
  const renderItem = () => <CartItem /> 
  
  return (
    <View style={styles.container}>
      <View>
        <FlatList 
        data={Cart} 
        keyExtractor={item => item.id} 
        renderItem={renderItem} 
        />
      </View>
      <View>
        <Pressable>
          <Text>Confirm</Text>
          <View>
            <Text>{`Total $100`}</Text> 
          </View>
        </Pressable>
      </View>
    </View>
  )
}

export default Cart