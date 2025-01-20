import React, {useState, Component} from "react";
import {
    Text,
    Image,
    View,
    Button,
}from 'react-native';

const catImage = {uri:'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg'};

const dogImage = {uri:'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg'};

const questionMark = {uri:'https://png.pngtree.com/element_our/png/20181205/question-mark-vector-icon-png_256683.jpg'}

class ChooseAnimalClass extends React.Component {
    
    constructor(){
        super();
        this.state = {
            animalImage: questionMark
        }
    }
    //const [animalImage, setAnimalImage] = useState(questionMark)
    

    render() {




    
        return(
            <View>
                <Image
                    source={this.state.animalImage}
                    width={250}
                    height={250}
                />
                <Button
                    title="Cat"
                    onPress={() => {this.setState({animalImage:catImage})}}
                />
                <Button
                    title="Dog"
                    onPress={() => {this.setState({animalImage:dogImage})}}
                />
            </View>
        );
    }
};

export default ChooseAnimalClass;