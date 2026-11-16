import { Image, StyleSheet, Text, View } from "react-native";



export function Header ({ img }) {


    return(
        <View>
            <Image source={img} style={styles.img}/>
            <Text style={styles.title}>Entrar</Text>
            <Text style={styles.subtitle}>Acesse sua conta com email e senha</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    img:{
        width:300,
        height:300
    },
    title:{
        fontSize:28,
        fontWeight:700
    },
    subtitle:{
        fontSize:16
    },
})