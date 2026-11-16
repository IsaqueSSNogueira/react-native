import { Alert, StyleSheet, View } from "react-native";
import { Input } from "./Input";
import { Button } from "./Button";
import { useState } from "react";
import { ValidateForm } from "@/utils/ValidateForm";




export function Form ({type}) {

    const [inputs, setInputs] = useState({
        email:"a",
        password:"a"
    })

    const handleChange = (type, value) => {
        type === "email" ? setInputs(prev => ({...prev, email: value})) : setInputs(prev => ({...prev, password: value})) 
    }
    

    const handleSubmit = (type) => {

        if(!ValidateForm(inputs.email) || !ValidateForm(inputs.password)){
            Alert.alert("Login não realizador")
        }
        else{
            Alert.alert("Login realizado", `Logado com ${inputs.email}`)
        }


    }

    return(
        <View style={styles.formContainer}>
            <Input type="Email"  onChangeText={(value) => handleChange("email", value)} />
            <Input type="Senha" onChangeText={(value) => handleChange("password", value)} />
            <Button type={type} onPress={handleSubmit}  />
        </View>
    )

}


const styles = StyleSheet.create({
    formContainer:{
        marginTop:20,
        gap:10
    },
})