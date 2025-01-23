import React from "react";
import {
    StyleSheet,
}from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import {
    Heading,
    CustomListItemBox
} from '../components/index.js'

const List = props => {

    let letters = ['a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd'];

    return(
        <ScrollView style={styles.container}>
        <SafeAreaView>
            <Heading
                text={"Map"}
            />
            {letters.map(element => {
                 return <CustomListItemBox style={styles.listItemContainer} text={element}/>;
            })}
        </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#19181f'
    },
    listItemContainer: {
        height: '10%',
        width: '100%',
        borderWidth: 1,
        color: 'white',
        borderColor: 'white'

    }
});
export default List;