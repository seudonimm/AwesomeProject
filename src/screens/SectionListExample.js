import React from "react";
import {
    SectionList,
    StyleSheet,
}from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import {
    Heading,
    Subtext,
    CustomListItemBox
} from '../components/index.js';

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
        <SafeAreaView style={styles.container}>
            <Heading
                text={'Section List'}
            />
            <SectionList
                sections={DATA}
                renderItem={({item}) => {
                    return( 
                        <CustomListItemBox style={styles.listItemContainer}
                            text={item}
                        />
                    )
                }}
                keyExtractor={(item, index) => index.toString()+item}
                renderSectionHeader={({section: {category}}) => {
                    return(
                        <Subtext
                            text={category}
                            isBold={true}
                        />
                    );
                }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#19181f'
    },
    listItemContainer: {
        flex: 1,
        height: '20%',
        width: '90%',
        borderWidth: 1,
        color: 'white',
        borderColor: 'white',
        alignSelf: 'center',
        margin: '1%',
        borderRadius: 10,
        fontSize: 20,
        textAlign: 'center'
    }
});
export default SectionListExample;