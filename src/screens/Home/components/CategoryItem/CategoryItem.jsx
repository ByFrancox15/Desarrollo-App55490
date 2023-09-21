import { Pressable, Text, View, useWindowDimensions } from "react-native";

import { Card } from "../../../../components";
import React, { useEffect } from "react";
import styles from './CategoryItem.Styles'

const CategoryItem = ({ category, setCategorySelected }) => {
    const { height, widht } = useWindowDimensions()

    useEffect(() => {
        console.log(height, widht)
    }, [])

    return (
        <Pressable onPress={() => setCategorySelected(category)}>
            <Card style={styles.cardContainer}>
                {widht > 400 ? (
                    <View>
                        <Text>{category}</Text>
                    </View>
                ): (
                    <Text style={styles.Text}>{category}</Text>
                )}
            </Card>
        </Pressable>
    )
}

export default CategoryItem