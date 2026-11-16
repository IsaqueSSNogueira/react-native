import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";



export function Footer ({ link }) {


    return(
        <Text>
            Não possui conta? 
            <Link href={link} style={styles.link}>Cadastre-se aqui</Link>
        </Text>
    )
}



const styles = StyleSheet.create({

    link:{
        color:"blue"
    }
})