/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ActivityIndicator,
  Button,
  Alert,
  Image,
  ImageBackground,
  TextInput,
  Switch,
  TouchableHighlight,
  Modal,
  View,
  Pressable,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import ChooseAnimal from './chooseAnimal';
import Header from './header';
import NameAnimal from './nameAnimal';

const image = {uri:'https://reactnative.dev/img/tiny_logo.png'}
function App(): React.JSX.Element {

  const[text, setText] = useState("text field")
  const[number, setNumber] = useState("")

  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  const [textPress, setTextPress] = useState("text should change")
  const onTextPress = () => setTextPress("changed")

  const [modalVisible, setModalVisible] = useState(false)

  const [refreshing, setRefreshing] = useState(false)
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <Header/>
      <ChooseAnimal/>
      <NameAnimal/>
      <ScrollView
        style={styles.scrollViewStyle}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
        }>
        {/*text*/}
        <Text style = {styles.titleTextStyle}>Below are Implementations</Text>
        <Text style = {styles.bodyTextStyle}> words words</Text>
        {/*button*/}
        <Button 
          title = "Press"
          color = "#6C7156"
          onPress={() => Alert.alert('pressed')}
        />
        {/*activity indicator*/}
        <ActivityIndicator style = {styles.activityIndicatorStyle} size = "large" color = "#ff8da1"/>
        {/*image*/}
        <Image
          style={{width: 200, height: 100}}
          source = {
            image
          }
        />
        {/*touchable highlight*/}
        <TouchableHighlight onPress={onTextPress}>
          <ImageBackground source = {image} resizeMode="cover">
            <Text style={styles.buttonStyle}>{textPress}</Text>
          </ImageBackground>
        </TouchableHighlight>
        {/*touchable opacity*/}
        <TouchableOpacity onPress={onTextPress}>
          <ImageBackground source = {image} resizeMode="cover">
            <Text style={styles.buttonStyle}>{textPress}</Text>
          </ImageBackground>
        </TouchableOpacity>
        {/*toucable without feedback*/}
        <TouchableWithoutFeedback onPress={onTextPress}>
          <ImageBackground source = {image} resizeMode="cover">
            <Text style={styles.buttonStyle}>{textPress}</Text>
          </ImageBackground>
        </TouchableWithoutFeedback>
        {/*Image background*/}
        <ImageBackground source = {image} resizeMode="cover">
            <Text style={styles.bodyTextStyle}>text</Text>
          </ImageBackground>
        {/*text input*/}
        <TextInput
          style={styles.textInputStyle}
          onChangeText={setText}
          value={text}  
        />
        {/*switch*/}
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        {/*modal*/}
        <Modal
          animationType='slide'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.")
            setModalVisible(!modalVisible)
          }}
          >
            <View style={styles.centeredViewStyle}>
              <View style={styles.modalViewStyle}>
                <Text>Hello World!</Text>
                <Pressable
                  style={styles.buttonStyle}
                  onPress={() => setModalVisible(!modalVisible)}  
                >
                  <Text>Hide Modal</Text>
                </Pressable>
              </View>
            </View>
        </Modal>
        <Pressable
          style={styles.buttonStyle}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text>Show Modal</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyle:{
    flex: 1,
  },
  scrollViewStyle:{
    backgroundColor: '#808080'
  },
  titleTextStyle:{
    fontWeight: 'bold', 
    fontSize: 38, 
    textAlign: 'center',
    color: 'orange',
    fontFamily: 'times new roman'
  },
  bodyTextStyle:{
    fontSize: 20, 
    textAlign: 'center',
    color: 'green',
    fontFamily: 'arial'
  },
  activityIndicatorStyle:{
    justifyContent: 'flex-end'
  },
  backgroundImageStyle:{
    flex: 1
  },
  textInputStyle:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
  buttonStyle:{
    alignItems: 'center',
    backgroundColor: '#dddddd',
    padding: 10,
    borderRadius: 20
  },
  modalViewStyle:{
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  centeredViewStyle:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
