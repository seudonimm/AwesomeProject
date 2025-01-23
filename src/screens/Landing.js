
import {
    View,
    StyleSheet,
    Image
} from 'react-native';

import {
    Heading,
    Subtext,
    CustomButtonLanding
} from '../components/index.js'

const Landing = props => { 

    return(
        <View style={styles.viewStyle}>
            <Image style={styles.imageStyle} source={require('/Users/jusman/AwesomeProject/assets/landing.png')}/>
            <Heading
                text={"Social Chatter Team."}
            />
            <Subtext
                text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. \nLorem ipsum"}
            />
            <CustomButtonLanding
                style={styles.buttonStyle}
                text1={"Login"}
                text2={"Sign Up"}
                navigateTo1={"Login"}
                navigateTo2={"Register"}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: '#19181f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonStyle: {
        justifyContent: 'flex-end'
    },
    rowViewStyle: {
        flex:1,
        flexDirection: 'row'
    },
    imageStyle: {
        width: 300,
        height: 300
    }

})


export default Landing;