import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    Text,
    Button,
    StyleSheet,
    View,
    Pressable
} from "react-native"

const CustomButtonLanding = (props) => {
    const {text1, text2, navigateTo1, navigateTo2} = props;

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Pressable
                style={styles.pressableStyle1}
                onPress={()=>{
                    navigation.navigate(navigateTo1);
                }}
            >
                <Text style={styles.textStyle}>{text1}</Text>
            </Pressable>
            <Pressable
                style={{...styles.pressableStyle1, backgroundColor: 'grey'}}
                onPress={()=>{
                    navigation.navigate(navigateTo2);
                }}
            >
                <Text style={styles.textStyle}>{text2}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '7%',
        width: '90%',
        backgroundColor: 'grey',
        borderRadius: 30,
        justifyContent: 'space-around',
        //margin: '5%',
        flexDirection: 'row',
        marginTop: '35%'
    },
    textStyle: {
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    pressableStyle1: {
        backgroundColor: 'white',
        borderRadius: 30,
        width: '50%',
        justifyContent: 'center',
    }
})

export default CustomButtonLanding;