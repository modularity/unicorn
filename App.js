/**
  DinnerTableChat
 */

import React, { Component } from 'react';
import { Platform,Text,View,YellowBox } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Main from './src/components/Main';
import Login from './src/components/Login';
import Register from './src/components/Register';

YellowBox.ignoreWarnings(['Warning: isMounted(...)','Module RCTImageLoader', 'Module RCTVideoManager']);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <Nav />
  }
}

// navigation objects where order matters
// nested nav objects must be initialized before referencing
const Nav = createStackNavigator({
  Main: { screen: Main,
    navigationOptions: ({ navigation }) => ({
      title: 'Main',
      headerLeft: null,
      headerStyle: { backgroundColor: '#948bef' },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Avenir',
        color: '#fff',
      },
    }),
  },
  Register: { screen: Register,
    navigationOptions: ({ navigation }) => ({
      title: 'Register',
      headerLeft: null,
      headerStyle: { backgroundColor: '#948bef' },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Avenir',
        color: '#fff',
      },
    }),
  },
  Login: { screen: Login,
    navigationOptions: ({ navigation }) => ({
      title: 'Login',
      headerLeft: null,
      headerStyle: { backgroundColor: '#948bef' },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Avenir',
        color: '#fff',
      },
    }),
  },

});
/*
navigationOptions: ({ navigation }) => ({
  header: null
}),
*/
