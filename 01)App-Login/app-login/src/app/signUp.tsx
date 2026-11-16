import { KeyboardAvoidingView, ScrollView, Platform, View, Text, Image, StyleSheet } from "react-native"

import signUpImg from "@/assets/signUpImg.png"
import { Header } from "@/components/Header/Header"
import { Form } from "@/components/Form/Form"
import { Footer } from "@/components/Footer/Footer"


export default function Index ()  {


    return(
        <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.select( { ios: "padding", android: "height"})}>
            <ScrollView contentContainerStyle={{flexGrow:1, padding:20}} keyboardShouldPersistTaps="handled">
                <Header img={signUpImg} />
                <Form type="signUp" />
                <Footer link="/" />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}



const styles = StyleSheet.create({

})
