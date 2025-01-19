import React, { useState } from "react";
import{
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';

const NameAnimal = () => {
    const [inputText, setInputText] = useState("...");

    return(
        <View>
            <Text style={styles.textStyle}>Name is {inputText}</Text>
            <TextInput
                style={styles.textInputStyle}
                selectTextOnFocus={true}
                placeholder="Type name of animal"
                onChangeText={setInputText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textInputStyle:{
        borderWidth: 1,
        margin: 10,
        padding: 10
    },
    textStyle:{
        fontSize: 20,
    }
});
export default NameAnimal;