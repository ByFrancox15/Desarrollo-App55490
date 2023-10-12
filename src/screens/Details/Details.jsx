import { View, Text, Image } from 'react-native'

import { Header } from '../../components'
import React from 'react'
import styles from './Details.Styles'
import { useSelector } from 'react-redux'

const Details = ({route}) => {
  const counter = useSelector(state => state.counter.value)
  const {product} = route.params
  return (
    <View style={styles.container}>
      <Header title={'Detalle'}/>
      <Image style={styles.Image} source= {{ uri: product.images[0] }}/>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>{`$ ${product.price}`} </Text>
      <Text style={{fontSize: 50 }}>{counter}</Text>
    </View>
  )
}

export default Details