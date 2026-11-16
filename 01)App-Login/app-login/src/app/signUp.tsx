import { KeyboardAvoidingView, ScrollView, Platform, View, Text, Image, StyleSheet } from "react-native"

import signUpImg from "@/assets/signUpImg.png"
import { Header } from "@/components/Header/Header"
import { Form } from "@/components/Form/Form"
import { Footer } from "@/components/Footer/Footer"


export default function SignUp ()  {


    return(
        <KeyboardAvoidingView style={styles.container} behavior={Platform.select( { ios: "padding", android: "height"})}>
            <ScrollView contentContainerStyle={{flexGrow:1}} keyboardShouldPersistTaps="handled">
                <Header img={signUpImg} type="signUp" />
                <Form type="signUp" />
                <Footer link="/" type="signUp" />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:32,
        backgroundColor:"#FDFDFD"
    }

})
