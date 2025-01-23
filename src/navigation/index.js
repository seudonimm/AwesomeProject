
import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StorageTest from '../screens/StorageTest';
import Landing from '../screens/Landing';
import Login from '../screens/Login';
import Register from '../screens/Register';
import SectionListExample from '../screens/SectionListExample';
import FlatListExample from '../screens/FlatListExample';
import List from '../screens/List';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Image, StyleSheet } from 'react-native';
//import DARK_PURPLE from '../res/colors';

const RootStack = createNativeStackNavigator({
    initialRouteName: 'Landing',
    screenOptions: {
      headerTitle: '',
      headerStyle:{backgroundColor:'#19181f'},
      headerTintColor:'white',
      
    },
    screens:{
      StorageTest: StorageTest,
      Landing: Landing,
      Login: Login,
      Register: Register,
      List: MyDrawer,
      FlatListExample: FlatListExample,
      SectionListExample: SectionListExample,
      MyDrawer: MyDrawer
    }
});



const Navigation = createStaticNavigation(RootStack);

const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown:false
            }}
        >
            <Tab.Screen name="List" component={List}
                options={{
                    tabBarIcon:({focused, color}) => 
                        <Image
                            style={
                                focused
                                    ? {tintColor: 'blue', height: 20, width: 20}
                                    : {tintColor: 'grey', height: 20, width: 20}
                            }
                            source={require('/Users/jusman/AwesomeProject/assets/map.png')}
                        />
                    ,
                }}
            />
            <Tab.Screen name="FlatListExample" component={FlatListExample}
                options={{
                    tabBarIcon:({focused, color}) => 
                        <Image
                            style={
                                focused
                                    ? {tintColor: 'blue', height: 20, width: 20}
                                    : {tintColor: 'grey', height: 20, width: 20}
                            }
                            source={require('/Users/jusman/AwesomeProject/assets/flatlist.png')}
                        />
                    ,
                }}
            />
            <Tab.Screen name="SectionListExample" component={SectionListExample}
                options={{
                    tabBarIcon:({focused, color}) => 
                        <Image
                            style={
                                focused
                                    ? {tintColor: 'blue', height: 20, width: 20}
                                    : {tintColor: 'grey', height: 20, width: 20}
                            }
                            source={require('/Users/jusman/AwesomeProject/assets/sectionlist.png')}
                        />
                    ,
                }}
            />
        </Tab.Navigator>
    );
}

const Drawer = createDrawerNavigator();

function MyDrawer () {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="BottomTabs" component={BottomTabs}/>
            <Drawer.Screen name="TopTabs" component={TopTabs}/>
        </Drawer.Navigator>
    );
}

const TopTab = createMaterialTopTabNavigator();

function TopTabs() {
    return(
        <TopTab.Navigator>
            <TopTab.Screen name="List" component={List}/>
            <TopTab.Screen name="FlatListExample" component={FlatListExample}/>
            <TopTab.Screen name="SectionListExample" component={SectionListExample}/>
        </TopTab.Navigator>
    );
}
const AppNavigation = () => {
    return(
        
        <Navigation/>
    );
};

const styles = StyleSheet.create({
    bottomTabImageStyle: {

    }
})
export default AppNavigation;