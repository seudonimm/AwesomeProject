import React, { useState, Component } from "react";
import {
    Text,
    ImageBackground,
    View,
    StyleSheet,
    Pressable
} from 'react-native';



class HeaderClass extends React.Component {
    
    constructor(){
        super();
        this.state = {
            question:"Choose An Animal"
        };
    }

    render(){
        /*const [question, setQuestion] = useState("Choose An Animal");
        const onButtonPress = () => {
            setQuestion("Cat or Dog?");
        }*/

        this.onButtonPress = () => {
            this.setState({question:"Cat or Dog?"})
        };

        return(
        
            <Pressable
                onPress={this.onButtonPress}
            >
                <Text
                    style = {styles.textStyle}
                >
                    {this.state.question}
                </Text>
            </Pressable>
        )
    }
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 50,
        fontWeight: 'bold',
        backgroundColor: 'yellow',
        textAlign: 'center'
    }
})
export default HeaderClass;