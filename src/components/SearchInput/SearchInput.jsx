import { View, TextInput, Pressable, } from 'react-native'
import React, { useState } from 'react'

import Antdesing from '@expo/vector-icons/AntDesign'
import styles from './SearchInput.Styles'

const SearchInput = ({ onSearch }) => {
    const [value, setValue] = useState('')

    const search = () => {
        onSearch(value)
    }

    const clearInput = () => {
        setValue('')
        onSearch('')
    }

  return (
    <View style={styles.container}>
        <TextInput 
        style={styles.input} 
        value={value} 
        onChangeText={setValue} 
        placeholder='Search Product'
        />
        <Pressable onPress={search}>
            <Antdesing name="search1" size={25} color={'black'}/>
        </Pressable>
        <Pressable onPress={clearInput}>
            <Antdesing name="closecircleo" size={25} color={'black'}/>
        </Pressable>
    </View>
  )
}

export default SearchInput