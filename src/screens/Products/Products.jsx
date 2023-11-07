import { FlatList, View, TouchableOpacity, Text, SafeAreaView} from 'react-native'
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
    <SafeAreaView style={styles.container}>
        <SearchInput onSearch={setKeyword} />
        <View style={styles.listContainer} >
            {!isLoading && (
            <FlatList 
                    data={ Object.values(data) }
                    numColumns={2}
                    columnWrapperStyle={styles.weapperStyle}
                    renderItem={({item}) => (
                        <TouchableOpacity 
                        styles={styles.productContainer}
                        onPress={() => navigation.navigate ('Details', { product: item })}
                    >
                        <Image 
                            style={styles.image}
                            source={{
                                uri: item.images[0],
                            }}
                        />
                        <Text style={styles.FontContainer}>{item.title}</Text> 
                        <Text style={styles.price}>{`$${item.price.toFixed(2)}`} </Text>
                        </TouchableOpacity>
                )} 
                    keyExtractor={item => item.id}
            />
            )}
        
        </View>
    </SafeAreaView>
  )
}

export default Products