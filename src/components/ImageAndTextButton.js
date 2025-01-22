import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    Text,
    Image,
    StyleSheet,
    View,
    Pressable
} from "react-native"

const ImageAndTextButton = (props) => {
    const {text, isInvert, navigateTo, buttonFunction1, buttonfunction2} = props;

    //const navigation = useNavigation();

    return(
        <Pressable 
            style={{
                ...styles.container,
                backgroundColor: (isInvert ? '#19181f':'white'),    
            }}
            onPress={props.onPress}
            /*onPress={()=>{
                navigation.navigate(navigateTo);
                buttonFunction1;
                buttonfunction2;
            }}*/
        >
            <Image 
                style={styles.imageStyle}
                source={props.source}/>
            <Text style={{
                ...styles.textStyle,
                color: (isInvert ? 'white':'#19181f')
            }}>{text}</Text>
        </Pressable>
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
        alignItems: 'center',
        margin: '5%',
        borderWidth: 1,
        borderColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textStyle: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    imageStyle: {
        height: '50%',
        width: '7%',
        marginRight: '5%'
    }
})

export default ImageAndTextButton;