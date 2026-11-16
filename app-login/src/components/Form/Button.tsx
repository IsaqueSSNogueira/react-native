import { StyleSheet, Text, TouchableOpacity } from "react-native";




export function Button ({ type, onPress }){


    const text = type === "signIn" ? "Entrar" : "Registrar"


    return (
        <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={() => {onPress(type)}}>
            <Text style={styles.label}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        width:"100%",
        height:48,
        backgroundColor: "#3366FF",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8
    },
    label:{
        color: "#FFFFFF",
        fontSize:16,
        fontWeight: 600
    }
})