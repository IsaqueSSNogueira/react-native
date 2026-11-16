import { StyleSheet, TextInput } from "react-native";


export function Input ({ type, ...rest}) {

    return(
        <TextInput placeholder={type} style={styles.input} {...rest}></TextInput>

    )

}



const styles = StyleSheet.create({

    input:{
        padding: 5
    }

})