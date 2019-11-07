import React from 'react';
import { StyleSheet, Text, View, Image, AsyncStorage, ActivityIndicator, StatusBar, SafeAreaView, ScrollView} from 'react-native';
import {createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from "react-navigation-stack";
// import AsyncStorage from '@react-native-community/async-storage'

import IndividualRecipes from './components/IndividualRecipes.js'
import CreateRecipeForm from './components/CreateRecipeForm.js'
import Search from './components/Search.js';
import HomePage from './components/homePage.js'
import Login from './components/Login.js';
import SignUp from './components/signUp';
import plus from './assets/add_circle_grey.png';
import search from './assets/Union.png';
import logout from './assets/account_circle.png';


class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }
  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    console.log('test for token userToken', userToken)
    
  
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };


  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}


const CreateNavigator =  createStackNavigator({
  Create: {screen:  CreateRecipeForm},
  Home:  {screen: HomePage}
}, {initialRouteName: "Create"})

// const CookBookNavigator =  createStackNavigator({
//   CookBook: {screen:  MyCookBook},
//   FolderInCookBook:  {screen: CookBookFolder}
// }, {initialRouteName: "CookBook"})

const LoginNavigator = createStackNavigator({
  Login: {screen: Login},
  SignUp: {screen: SignUp}
},
{
  initialRouteName: 'Login',
});

const RecipeNavigator = createStackNavigator({
  Home: {screen: HomePage},
  IndividualR: {screen: IndividualRecipes}
},
{
  initialRouteName: 'Home',
});

const MainNavigator = createBottomTabNavigator({
  Home: {screen: RecipeNavigator,
    navigationOptions: {
      tabBarLabel: 'Explore',
      tabBarIcon: (
            <Image style={{ width: 20, height: 20, paddingLeft: 28}} source={search}/>
            
      ),
    }
  },
  Create: {screen: CreateNavigator,
    navigationOptions: {
      tabBarLabel: 'Create',
      tabBarIcon: (
            <Image style={{ width: 25, height: 25, paddingTop:10 }} source={plus}/>
      ),
    }},
  Profile: {screen: Login,
    navigationOptions: {
      tabBarLabel: 'Sign Out', 
      tabBarIcon: (
        <Image style={{ width: 25, height: 25}} source={logout}/>
        
  ),
    tabBarOnPress: async ({navigation}) => {
        await AsyncStorage.clear();
        navigation.navigate('Auth');
    }
    }},
},
{
  initialRouteName: 'Home',
  
},
);

const AuthNavigator = createBottomTabNavigator({
  Home: {screen: RecipeNavigator,
    navigationOptions: {
      tabBarLabel: 'Explore',
      tabBarIcon: (
            <Image  style={{width: 20, height: 20, paddingLeft: 28}} source={search}/>
      )
    }
  },
  Create: {screen: LoginNavigator,
    navigationOptions: {
      tabBarLabel: 'Login',
      tabBarIcon: (
            <Image style={{ width: 25, height: 25, paddingTop:10 }} source={logout}/>
      ),
    }
  },
},
{
  initialRouteName: 'Home',
  
});

const AppContainer = createAppContainer(
  createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    App: MainNavigator,
    Auth: AuthNavigator
  },
  {
    initialRouteName: 'AuthLoading',
  }) 
  );



export default App = () => {
    return (
      <AppContainer/>
    )
  }

