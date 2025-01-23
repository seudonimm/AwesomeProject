import React from "react";
import {
    StyleSheet,
    Text
} from 'react-native';

const CustomListItemBox = (props) => {
    const {text, isBold} = props;

    return(
        <Text
            style={{
                ...styles.listItemContainer, 
                fontWeight:(isBold ? 'bold' : 'normal')
            }}
        >
            {text}
        </Text>
    );
}

const styles = StyleSheet.create({
    listItemContainer: {
        flex: 1,
        height: '20%',
        width: '90%',
        borderWidth: 1,
        color: 'white',
        borderColor: 'white',
        alignSelf: 'center',
        margin: '1%',
        borderRadius: 10,
        fontSize: 20,
        textAlign: 'center'
    }
});

export default CustomListItemBox;