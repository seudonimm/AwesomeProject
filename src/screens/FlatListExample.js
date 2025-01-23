import React from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    View
}from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import Heading from "../components/Heading";
import {CustomListItemBox} from "../components/index.js"
const FlatListExample = props => {

    let letters = ['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd','a', 'b', 'c', 'd', 'a', 'b', 'c', 'd','a', 'b', 'c', 'd', 'a', 'b', 'c', 'd','a', 'b', 'c', 'd', 'a', 'b', 'c', 'd','a', 'b', 'c', 'd', 'a', 'b', 'c', 'd','a', 'b', 'c', 'd', 'a', 'b', 'c', 'd','a', 'b', 'c', 'd', 'a', 'b', 'c', 'd','a', 'b', 'c', 'd', 'a', 'b', 'c', 'd','a', 'b', 'c', 'd', 'a', 'b', 'c', 'd'];

    const renderListItem = ({item}) =>{
        return( 
            <CustomListItemBox style={styles.listItemContainer}
                text={item}
            />
        )
    };

    return(
        <SafeAreaView style={styles.container}>
            <Heading
                text={"Flat List"}
            />
            <FlatList
                data={letters}
                renderItem={(renderListItem)}
                keyExtractor={(item, index) => item + index.toString()}
                initialNumToRender={1}
                maxToRenderPerBatch={1}
                updateCellsBatchingPeriod={1}
                removeClippedSubviews={true}
                windowSize={1}
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
        height: '10%',
        width: '100%',
        borderWidth: 1,
        color: 'white',
        borderColor: 'white'
    }
});
export default FlatListExample;