import { StyleSheet } from "react-native";
import { colors } from "../../constants/color";

export default styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: 80, 
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Text: {
        fontSize: 30,
        fontFamily: 'OpenSans',
        marginTop: 25,
    },
})