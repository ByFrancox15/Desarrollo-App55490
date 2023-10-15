import { FlatList, View, TouchableOpacity, Text} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Header, SearchInput } from '../../components'

import styles from './Products.Styles'
import { useSelector } from 'react-redux'
import { useGetProductsByCategoryQuery } from '../../services/shopApi'

const Products = ({ navigation, route }) => {
    const category = useSelector(state = state.shop.categorySelected)
    const [keyword, setKeyword] = useState('')
    const { data, isLoading } = useGetProductsByCategoryQuery(category)

    useEffect(() => {
        if (data) {
            const ProductsFiltered = data.filter (product => product.title.includes(keyword))
        }
    }, [])

  return (
    <View style={styles.container}>
        <Header title={category} />
        <SearchInput onSearch={setKeyword} />
        <View style={styles.listContainer} >
            {!data.isLoading && (
            <FlatList 
                    data={ Object.values(data) }
                    numColumns={2}
                    columnWrapperStyle={styles.weapperStyle}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => navigation.navigate ('Details', { product: item })}>
                        <Text style={styles.FontContainer}>{item.title}</Text> 
                        </TouchableOpacity>
                )} 
                    keyExtractor={item => item.id}
            />
            )}
        
        </View>
    </View>
  )
}

export default Products