import React from "react";
import {
    StyleSheet,
    Text
} from 'react-native';

const Heading = (props) => {
    const {text, isLeft} = props;
    return(
        <Text
            style={isLeft ? styles.leftTextStyle:styles.textStyle}
        >
            {text}
        </Text>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 55,
        color: 'white',
        margin: '2%'
    },
    leftTextStyle: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 55,
        color: 'white',
        margin: '5%'
    }
});

export default Heading;