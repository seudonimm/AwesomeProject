import React from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    View
}from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

const List = props => {

    let letters = ['a', 'b', 'c', 'd'];

    return(
        <SafeAreaView>
            {letters.map(element => {
                 return <Text style={styles.container}>{element}</Text>;
            })}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '10%',
        width: '100%',
        borderWidth: 1
    }
});
export default List;