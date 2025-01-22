import React from "react";
import {
    StyleSheet,
    Text
} from 'react-native';

const Subtext = (props) => {
    const {text, isRight, isBold} = props;

    return(
        <Text
            style={{
                ...styles.textStyle, 
                alignSelf:(isRight ? 'flex-end': "center"),
                textAlign:(isRight ? 'right' : 'center'),
                marginRight:(isRight ? '5%' : 0),
                fontWeight:(isBold ? 'bold' : 'normal')
            }}
            //style={isRight ? styles.rightTextStyle:styles.textStyle}
        >
            {text}
        </Text>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        alignSelf: 'center',
    },
});

export default Subtext;