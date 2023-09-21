import { Text, View } from "react-native";

import React from "react";
import styles from './Header.Styles'

const Header = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.Text}>{title}</Text>
        </View>
    )
}

export default Header