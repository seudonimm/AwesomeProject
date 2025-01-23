import React, { useState } from "react";
import { 
    View,
    StyleSheet,
    Alert
 } from "react-native"
import { useNavigation } from "@react-navigation/native";
import {
    Heading,
    CustomInputField,
    Subtext,
    CustomButton,
    LinkText,
    ImageAndTextButton
} from '../components/index.js'

const Register = () => {
    const navigation = useNavigation();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSignUpPressed = () =>{
        if(username && password){
            navigation.navigate('Login', username)
        }
        else{
            Alert.alert("Enter Username and Password");
        }
    };

    return(
        <View style={styles.titleViewStyle}>
            <Heading
                text={"Let's get started"}
                isLeft={true}
            />
            <CustomInputField 
                text={"Email id"}
                source={require('/Users/jusman/AwesomeProject/assets/envelope.png')}
                onChangeText={text => setUsername(text)}
            />
            <CustomInputField text={"Password"} 
                isPasswordField={true}
                source={require('/Users/jusman/AwesomeProject/assets/lock.png')}
            />
            <CustomInputField text={"Confirm Password"} 
                isPasswordField={true}
                source={require('/Users/jusman/AwesomeProject/assets/lock.png')}
            />
            <Subtext
                text={"Forgot password?"}
                isRight={true}
                isBold={true}
            />
            <CustomButton
                text={"Sign up"}
                onPress={onSignUpPressed}
            />
            <Subtext
                text={"or continue with"}
            />
            <ImageAndTextButton
                text={"Google"}    
                isInvert={true}
                source={require('/Users/jusman/AwesomeProject/assets/google_logo.png')}

            />
            <View style={styles.rowStyle}>
                <Subtext
                    text={"Already have an account? "}
                />
                <LinkText
                    text={"Login"}
                    onPress={()=>{
                        navigation.navigate('Login');
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: '#19181f',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleViewStyle:{
        flex:1,
        backgroundColor: '#19181f',
        alignItems: 'flex-start'

    },
    imageStyle: {
        width: '8%',
        height: '5%',
        marginLeft: '5%'
    },
    rowStyle: {
        flexDirection: 'row',
        alignSelf: 'center'
    }
});
export default Register;