import React from "react";
import {
    Text,
    Button,
    StyleSheet,
    View
} from "react-native"

const CustomButtonLanding = (props) => {
    const {text1, text2, image, isImage} = props;
    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>{text1}</Text>
            <Text style={styles.textStyle}>{text2}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '7%',
        width: '90%',
        backgroundColor: 'grey',
        borderRadius: 30,
        justifyContent: 'space-between',
        alignSelf: 'center',
        margin: '5%',
        flexDirection: 'row',
        marginTop: '35%'
    },
    textStyle: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    }
})

export default CustomButtonLanding;