
import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StorageTest from '../screens/StorageTest';
import Landing from '../screens/Landing';
import Login from '../screens/Login';
import Register from '../screens/Register';
import SectionListExample from '../screens/SectionListExample';
import FlatListExample from '../screens/FlatListExample';
import List from '../screens/List';

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
      List: List,
      FlatListExample: FlatListExample,
      SectionListExample: SectionListExample
    }
});

const Navigation = createStaticNavigation(RootStack);

const AppNavigation = () => {
    return(
        <Navigation/>
    );
};

export default AppNavigation;