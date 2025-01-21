import React from "react";
import {
    Text,
    Button,
    StyleSheet,
    View
} from "react-native"

const CustomButton = (props) => {
    const {text, isInvert} = props;
    return(
        <View style={{
            ...styles.container,
            backgroundColor: (isInvert ? '#19181f':'white'),    
        }}>
            <Text style={{
                ...styles.textStyle,
                color: (isInvert ? 'white':'#19181f')
            }}>{text}</Text>
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
        borderWidth: 1,
        borderColor: 'white'
    },
    textStyle: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    }
})

export default CustomButton;