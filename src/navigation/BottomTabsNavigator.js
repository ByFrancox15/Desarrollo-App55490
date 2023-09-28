import CartNavigator from "./CartNavigator";
import StackNavigator from "./StackNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import Feather from '@expo/vector-icons/Feather'

const BottomTab = createBottomTabNavigator ()

function BottomTabNavigator () {
    return (
        <BottomTab.Navigator 
        initialRouteName="Shop" 
        screenOptions={{
            headerShown: false, 
            tabBarShowLabel: false, 
            tabBarStyle: styles.TabBar}}>
                <BottomTab.Screen 
                name= 'Shop' 
                component={StackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather 
                        name="shopping-bag" 
                        size={24} 
                        color={'#000000'}/>
                    ),
                }}
                />
                <BottomTab.Screen 
                name= 'CartNav' 
                component={CartNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather 
                        name="shopping-cart" 
                        size={24} 
                        color={'#000000'}/>
                    ),
                }}
                />
        </BottomTab.Navigator>
    )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
    TabBar: {
        backgroundColor: '#d2a391',
        borderColor: '#000000',
        borderTopWidth: 1,
    },
    
})