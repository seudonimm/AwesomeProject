
import {
    View,
    StyleSheet,
    Image
} from 'react-native';
import Heading from '../components/Heading';
import Subtext from '../components/Subtext';
import CustomButton from '../components/CustomButton';
import CustomButtonLanding from '../components/CustomButtonLanding';

const Landing = props => { 
    return(
        <View style={styles.viewStyle}>
            <Image style={styles.imageStyle} source={require('/Users/jusman/AwesomeProject/assets/landing.png')}/>
            <Heading
                text={"Social Chatter Team."}
            />
            <Subtext
                text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum"}
            />
            <CustomButtonLanding
                style={styles.buttonStyle}
                text1={"Login"}
                text2={"Sign Up"}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: 'black',
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