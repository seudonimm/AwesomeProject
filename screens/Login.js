import React from "react";
import { 
    View,
    StyleSheet,
    Image
 } from "react-native"
import Heading from "../components/Heading";
import CustomInputField from "../components/CustomInputField";
import Subtext from "../components/Subtext";
import CustomButton from "../components/CustomButton";

const Login = () => {

    return(
        <View style={styles.titleViewStyle}>
            <Image style={styles.imageStyle} source={require('/Users/jusman/AwesomeProject/assets/arrow.png')}/>
            <Heading
                text={"Hey,\nWelcome \nBack"}
                isLeft={true}
            />
            <CustomInputField 
                text={"Email id"}
                image={'envelope'}    
            />
            <CustomInputField text={"Password"}/>
            <Subtext
                text={"Forgot password?"}
                isRight={true}
                isBold={true}
            />
            <CustomButton
                text={"Login"}
            />
            <Subtext
                text={"or continue with"}
            />
            <CustomButton
                text={"Google"}    
                isInvert={true}
            />
            <View style={styles.rowStyle}>
                <Subtext
                    text={"Dont have an account? "}
                />
                <Subtext
                    text={"Sign Up"}
                    isBold={true}
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