import React, { useState, Component } from "react";
import{
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';

class NameAnimalClass extends React.Component{
    constructor(){
        
        super();
        this.state = {
            inputText: "..."
        }
    }

    render(){
        //const [inputText, setInputText] = useState("...");



        return(
            <View>
                <Text style={styles.textStyle}>Name is {this.state.inputText}</Text>
                <TextInput
                    style={styles.textInputStyle}
                    selectTextOnFocus={true}
                    placeholder="Type name of animal"
                    onChangeText={(inputText) => {this.setState({inputText})}}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    textInputStyle:{
        borderWidth: 1,
        margin: 10,
        padding: 10
    },
    textStyle:{
        fontSize: 20,
        margin: 5
    }
});
export default NameAnimalClass;