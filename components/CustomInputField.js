import React from "react";
import {
    StyleSheet,
    TextInput
} from "react-native"

const CustomInputField = (props) => {
    const {text, image} = props;

    return(
        <TextInput 
            style={styles.inputStyle}
            placeholder={text}
            placeholderTextColor={"white"}
            inlineImageLeft={image}
        />
    );
};

const styles = StyleSheet.create({
    inputStyle: {
        height: '7%',
        width: '90%',
        alignSelf: 'center',
        backgroundColor: 'grey',
        borderRadius: 30,
        justifyContent: 'left',
        borderWidth: 1,
        borderColor: 'white',
        margin: '2%'
    }
});

export default CustomInputField;