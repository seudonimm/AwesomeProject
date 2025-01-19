import React, { useState } from "react";
import {
    Text,
    ImageBackground,
    View,
    StyleSheet,
    Pressable
} from 'react-native';



const Header = () => {
    const [question, setQuestion] = useState("Choose An Animal");
    const onButtonPress = () => {
        setQuestion("Cat or Dog?");
    }

    return(
    
        <Pressable
            onPress={onButtonPress}
        >
            <Text
                style = {styles.textStyle}
            >
                {question}
            </Text>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 50,
        fontWeight: 'bold',
        backgroundColor: 'yellow',
        textAlign: 'center'
    }
})
export default Header;