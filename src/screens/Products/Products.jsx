import { FlatList, View, TouchableOpacity, Text} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Header, SearchInput } from '../../components'

import allProducts from '../../data/products'
import styles from './Products.Styles'

const Products = ({ navigation, route }) => {
    const [arrProducts, setArrProducts] = useState([])
    const [keyword, setKeyword] = useState('')
    const {category} = route.params 

    useEffect(() => {
        if (category) {
            const Products = allProducts.filter(product => product.category === category)
            const ProductsFiltered = Products.filter (product => product.title.includes(keyword))
            setArrProducts(ProductsFiltered)
        } else {
            const ProductsFiltered = allProducts.filter(product => product.title.includes(keyword))
            setArrProducts(ProductsFiltered)
        }
    }, [category, keyword])

  return (
    <View style={styles.container}>
        <Header title={category} />
        <SearchInput onSearch={setKeyword} />
        <View style={styles.listContainer} >
        <FlatList 
            data={arrProducts}
            renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate ('Details', { product: item })}>
                 <Text style={styles.FontContainer}>{item.title}</Text> 
                </TouchableOpacity>
            )} 
            keyExtractor={item => item.id}
        />
        </View>
    </View>
  )
}

export default Products