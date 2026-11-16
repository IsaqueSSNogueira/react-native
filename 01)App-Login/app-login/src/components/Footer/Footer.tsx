import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";



export function Footer ({ link, type }) {

    const message = type === "signIn" ? "Não possui conta?" : "Já possui conta?"
    const linkMessage  = type === "signIn" ? "Cadastre-se aqui" : "Faça login aqui"

    return(
        <Text style={styles.textFooter}>
            {message} {" "}
            <Link href={link} style={styles.link}>{linkMessage}</Link>
        </Text>
    )
}



const styles = StyleSheet.create({
    textFooter:{
        textAlign:"center",
        marginTop:24,
        color:"#585860",
        gap:10
    },
    link:{
        color:"blue",
    }
})