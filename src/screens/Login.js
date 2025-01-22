import React, { useEffect, useState } from "react";
import { 
    View,
    StyleSheet,
    Image,
    Alert
 } from "react-native"
import Heading from "../components/Heading";
import CustomInputField from "../components/CustomInputField";
import Subtext from "../components/Subtext";
import CustomButton from "../components/CustomButton";
import LinkText from "../components/LinkText";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import ImageAndTextButton from "../components/ImageAndTextButton";

const Login = props => {


    const navigation = useNavigation();

    const [username, setUsername] = useState("");

    const storeUsername = async () => {
        try{
            await AsyncStorage.setItem('username', username);
            Alert.alert(username)
        } catch(e) {
            Alert.alert(e);
        }
    };

    

    const onLogInPressed = () =>{
        if(username){
            storeUsername(username);
            navigation.navigate('Landing');
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
export default Login;