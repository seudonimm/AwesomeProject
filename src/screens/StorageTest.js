import React, { useEffect } from "react";
import { View, Text, Alert } from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";

const StorageTest = () => {

    const USER_1 = {
        name: 'Tom',
        age: 20,
        traits: {
          hair: 'black',
          eyes: 'blue'
        }
    }
      
    const USER_2 = {
        name: 'Sarah',
        age: 21,
        hobby: 'cars',
        traits: {
            eyes: 'green',
        }
    }

    const mergeUsers = async() => {
        try{
            await AsyncStorage.setItem('user1', JSON.stringify(USER_1));
            console.log(await AsyncStorage.getItem('user1'));

            await AsyncStorage.mergeItem('user1', JSON.stringify(USER_2));
            console.log(await AsyncStorage.getItem('user1'));

            await AsyncStorage.removeItem('user1');
            console.log(await AsyncStorage.getItem('user1'))

            console.log(await AsyncStorage.getAllKeys());

            const firstPair = ["@MyApp_user", "value_1"]
            const secondPair = ["@MyApp_key", "value_2"]

            await AsyncStorage.multiSet([firstPair, secondPair]);
            console.log(await AsyncStorage.getAllKeys());
        } catch(e) {
            Alert.alert("error")
        }
    }

    useEffect(() => {
        mergeUsers();
        return;
    })
    return(
        <View>
            <Text>
                text
            </Text>
        </View>
    );

}

export default StorageTest;
