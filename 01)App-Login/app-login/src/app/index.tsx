import { KeyboardAvoidingView, ScrollView, Platform, View, Text, Image, StyleSheet } from "react-native"

import signInImg from "@/assets/signInImg.png"
import { Header } from "@/components/Header/Header"
import { Form } from "@/components/Form/Form"
import { Footer } from "@/components/Footer/Footer"


export default function Index ()  {


    return(
        <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.select( { ios: "padding", android: "height"})}>
            <ScrollView contentContainerStyle={{flexGrow:1, padding:20}} keyboardShouldPersistTaps="handled">
                <Header img={signInImg} />
                <Form type="signIn" />
                <Footer link="/signUp" />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}



const styles = StyleSheet.create({

})