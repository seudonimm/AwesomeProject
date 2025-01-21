import React from "react";
import {
    Text,
    Button,
    StyleSheet,
    View
} from "react-native"

const CustomButton = (props) => {
    const {text, image, isImage} = props;
    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '7%',
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 30,
        justifyContent: 'center',
        alignSelf: 'center',
        margin: '5%',

    },
    textStyle: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    }
})

export default CustomButton;