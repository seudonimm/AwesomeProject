import React from "react";
import {
    FlatList,
    SectionList,
    StyleSheet,
    Text,
    View
}from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import Heading from "../components/Heading";

const SectionListExample = props => {

    const DATA = [
        {
          category: 'Vowels',
          data: ['a', 'e', 'i'],
        },
        {
          category: 'Consanants',
          data: ['b', 'n', 'f'],
        },
    ];

    let letters = ['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd'];

    return(
        <SafeAreaView>
            <Heading
                text={'Section List'}
            />
            <SectionList
                sections={DATA}
                renderItem={({item}) => {
                    return( 
                        <Text style={styles.container}>
                            {item}
                        </Text>
                    )
                }}
                keyExtractor={(item, index) => index.toString()}
                renderSectionHeader={({section: {category}}) => {
                    return(
                        <Text>
                            {category}
                        </Text>
                    );
                }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '10%',
        width: '100%',
        borderWidth: 1
    }
});
export default SectionListExample;