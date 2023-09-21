import { FlatList, View, TouchableOpacity, Text} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Header, SearchInput } from '../../components'

import allProducts from '../../data/products'
import styles from './Products.Styles'

const Products = ({category, setProductSelected}) => {
    const [arrProducts, setArrProducts] = useState([])
    const [keyword, setKeyword] = useState('')

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
                <TouchableOpacity onPress={() => setProductSelected(item)}>
                 <Text>{item.title}</Text> 
                </TouchableOpacity>
            )} 
            keyExtractor={item => item.id}
        />
        </View>
    </View>
  )
}

export default Products