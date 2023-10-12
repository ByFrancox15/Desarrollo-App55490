import { Pressable, Text, View, useWindowDimensions } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import styles from './CategoryItem.Styles'
import { setCategorySelected } from "../../../../features/shop/ShopSlice";

const CategoryItem = ({ category, navigation }) => {
    const dispatch = useDispatch()
    return (
        <Pressable
            onPress={() => {
                dispatch(setCategorySelected(category))
                navigation.navigate('Products', { category })}}
            style={styles.container}
        >
                    <View style={styles.ContentContainer}>
                        <Text style={styles.Text}>{category}</Text>
                    </View>
        </Pressable>
    )
}

export default CategoryItem