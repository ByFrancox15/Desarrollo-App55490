import { FlatList, SafeAreaView, View } from "react-native";

import { CategoryItem } from './components'
import { Header } from "../../components";
import React from "react";
import styles from './Home.Styles'
import { useCategoriesQuery } from "../../services/shopApi";

const Home = ({navigation}) => {
    const { data, isLoading } = useCategoriesQuery()
    return (
        <SafeAreaView style={styles.container}>
            <Counter />
            <Header title={'Categories'} />
            <View style={styles.listContainer}>
                {!isLoading &&(
                    <FlatList
                    data={data}
                    keyExtractor={category => category}
                    renderItem={({ item }) => (
                        <CategoryItem category={item} navigation={navigation} />)}
                    />
                )}
            </View>
       </SafeAreaView>
    ); 
}

export default Home