import { Text, TouchableOpacity } from "react-native";




export function Button ({ type, onPress }){


    const text = type === "signIn" ? "Entrar" : "Registrar"


    return (
        <TouchableOpacity onPress={onPress}>
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}