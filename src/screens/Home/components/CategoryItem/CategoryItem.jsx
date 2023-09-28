import { Pressable, Text, View, useWindowDimensions } from "react-native";
import React, { useEffect } from "react";

import styles from './CategoryItem.Styles'

const CategoryItem = ({ category, navigation }) => {
    return (
        <Pressable onPress={() => navigation.navigate('Products', { category })}
                    style={styles.container}
        >
                    <View style={styles.ContentContainer}>
                        <Text style={styles.Text}>{category}</Text>
                    </View>
        </Pressable>
    )
}

export default CategoryItem