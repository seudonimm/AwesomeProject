import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    Pressable,
    StyleSheet,
    Text
} from 'react-native';

const LinkText = (props) => {
    const {text, navigateTo} = props;
    const navigation = useNavigation();

    return(
        <Pressable
            onPress={props.onPress}
        >
            <Text
                style={
                    styles.textStyle
                }
                //style={isRight ? styles.rightTextStyle:styles.textStyle}
            >
                {text}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        color: 'white',
        textAlign: 'right',
        alignSelf: 'flex-end',
        marginRight: '5%',
        fontWeight: 'bold'
    },
});

export default LinkText;