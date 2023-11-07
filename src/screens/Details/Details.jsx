import { View, Text, Image, SafeAreaView, Pressable } from 'react-native'

import { Header } from '../../components'
import React from 'react'
import styles from './Details.Styles'
import { useDispatch } from 'react-redux'
import { addItem } from '../../features/Cart/CartSlice'

const Details = ({route}) => {
  const {product} = route.params
  const dispatch = useDispatch ()

  const handleAddToCart = () => {
    dispatch(addItem({ ...product, quantity: 1 }))
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style = {styles.imageContainer}>
          <Header title={'Detalle'}/>
          <Image style={styles.Image} source= {{ uri: product.images[0] }}/>
        </View>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>{`$ ${product.price}`} </Text>
        <Text style={{fontSize: 50 }}>{counter}</Text>
        <Pressable onPress={handleAddToCart}>
          <Text>Add to cart</Text>
        </Pressable>
    </SafeAreaView>
  )
}

export default Details