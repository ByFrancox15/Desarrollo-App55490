import { View, Text, Image } from 'react-native'

import { Header } from '../../components'
import React from 'react'
import styles from './Details.Styles'

const Details = ({route}) => {
  const {product} = route.params
  return (
    <View style={styles.container}>
      <Header title={'Detalle'}/>
      <Image style={styles.Image} source= {{ uri: product.images[0] }}/>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>{`$ ${product.price}`} </Text>
    </View>
  )
}

export default Details