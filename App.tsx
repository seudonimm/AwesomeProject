import './gesture-handler';
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
import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChooseAnimal from './chooseAnimal';
import Header from './header';
import NameAnimal from './nameAnimal';
import Landing from './src/screens/Landing';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import { HeaderTitle } from '@react-navigation/elements';
import StorageTest from './src/screens/StorageTest';
import List from './src/screens/List';
import FlatListExample from './src/screens/FlatListExample';
import SectionListExample from './src/screens/SectionListExample';
import AppNavigation from './src/navigation';
import { DARK_PURPLE } from './src/res/colors';


const image = {uri:'https://reactnative.dev/img/tiny_logo.png'}
function App(): React.JSX.Element {



  //const Navigation = createStaticNavigation(RootStack);

  return (
    <AppNavigation/>
  );
}

const styles = StyleSheet.create({
  backgroundStyle:{
    flex: 1,
    backgroundColor: DARK_PURPLE
  },
  /*scrollViewStyle:{
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
  }*/
});

export default App;
