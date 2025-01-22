import React from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    View
}from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

const FlatListExample = props => {

    let letters = ['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd'];

    return(
        <SafeAreaView>
            {/*letters.map(element => {
                 return <Text style={styles.container}>{element}</Text>;
            })*/}
            <FlatList
                data={letters}
                renderItem={({item}) => {
                    return( 
                        <Text style={styles.container}>
                            {item}
                        </Text>
                    )
                }}
                keyExtractor={(item, index) => index.toString()}
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
export default FlatListExample;