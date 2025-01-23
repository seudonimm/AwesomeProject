import React, { useEffect, useState } from "react";
import { 
    View,
    StyleSheet,
    Alert
 } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { DARK_PURPLE } from "../res/colors.js";
import {
    Heading,
    CustomInputField,
    Subtext,
    CustomButton,
    LinkText,
    ImageAndTextButton
} from '../components/index.js'


const Login = props => {


    const navigation = useNavigation();

    const [username, setUsername] = useState("");

    const storeUsername = async () => {
        try{
            await AsyncStorage.setItem('username', username);
            //Alert.alert(username)
        } catch(e) {
            Alert.alert(e);
        }
    };

    

    const onLogInPressed = () =>{
        if(username){
            storeUsername(username);
            navigation.navigate('MyDrawer');
        }
        else{
            Alert.alert(username);
        }
    };
    const getUsername = async () =>{
        try{
            let value = await AsyncStorage.getItem('username');

            if(value){
                setUsername(value);
            }
        } catch(e) {
            Alert.alert("nothing")
        }
    };

    useEffect(()=>{

        getUsername();
        return()=>{
            
        };
    },[]
    );

    return(
        <View style={styles.titleViewStyle}>
            <Heading
                text={"Hey,\nWelcome \nBack"}
                isLeft={true}
            />
            <CustomInputField 
                text={"Email id"}
                onChangeText={text => setUsername(text)}  
                value={username}
                source={require('/Users/jusman/AwesomeProject/assets/envelope.png')}
            />
            <CustomInputField 
                text={"Password"}
                source={require('/Users/jusman/AwesomeProject/assets/lock.png')}
                isPasswordField={true}
            />
            <Subtext
                text={"Forgot password?"}
                isRight={true}
                isBold={true}
            />
            <CustomButton
                text={"Login"}
                onPress={onLogInPressed}
                /*navigateTo={'Login'}
                buttonFunction1={setUserName}
                buttonFunction2={onSignInPressed}*/
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
                    text={"Dont have an account? "}
                />
                <LinkText
                    text={"Sign Up"}
                    onPress={()=>{
                        navigation.navigate('Register');
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: DARK_PURPLE,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleViewStyle:{
        flex:1,
        backgroundColor: DARK_PURPLE,
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
export default Login;