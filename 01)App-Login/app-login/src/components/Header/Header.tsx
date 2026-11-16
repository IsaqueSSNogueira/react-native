import { Image, StyleSheet, Text, View } from "react-native";



export function Header ({ img, type }) {

    const title = type === "signIn" ? "Entrar" : "Cadastrar"
    const subtitle = type === "signIn" ? "Acesse sua conta com email e senha" : "Crie uma conta gratuitamente"


    return(
        <View>
            <Image source={img} style={styles.img}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    img:{
        width:"100%",
        height:330,
        resizeMode:"contain",
        marginTop:62
    },
    title:{
        fontSize:32,
        fontWeight:900
    },
    subtitle:{
        fontSize:16
    },
})