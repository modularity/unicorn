/**
  Unicorn apps for fellow unicorn lovers to come together and watch happy unicorns dance to their fav song.
 */

import React, { Component } from 'react';
import { ActivityIndicator,AsyncStorage,Text,View,YellowBox } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Welcome from './src/components/Welcome';
import Login from './src/components/Login';
import Register from './src/components/Register';

// ignoring these for now
YellowBox.ignoreWarnings(['Class RCTCxxModule','Warning: isMounted(...)','Module RCTImageLoader', 'Module RCTVideoManager']);

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      registerChecked: false,
      registered: false,
      nameChecked: false,
      name: '',
    }
    this.checkRegistration();
  }

  render() { // spinner if still loading, otherwise route to Nav
    //return <Nav screenProps={{name: this.state.name}} />;
    var appReady = this.state.registerChecked && this.state.nameChecked;
    if (!appReady) return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#ef8bc9" />
      </View>
    );
    return this.getRoute();
  }

  async checkRegistration() {
    // uncomment line below to wipe storage for testing
    // AsyncStorage.clear();
    await AsyncStorage.getItem('registered')
      .then(val => {
        if (val) this.setState({registered: val, registerChecked: true});
        else this.setState({registerChecked: true});
      })
      .catch(e => {
        Alert.alert('Start Error', 'Hmm something went wrong initializing the app.');
      })
      .done();
    await AsyncStorage.getItem('name')
      .then(val => {
        if (val) this.setState({name: val, nameChecked: true});
        else this.setState({nameChecked: true});
      })
      .catch(e => {
        Alert.alert('Start Error', 'Hmm something went wrong initializing the app.');
      })
      .done();
  }
  getRoute() {
    if (this.state.name) { // name implies registration completed
      return route = <MainNav screenProps={{name: this.state.name}} />;
    }
    return <Nav screenProps={{name: this.state.name}} />;
  }
}

// navigation objects where order matters
// nested nav objects must be initialized before referencing
const MainNav = createStackNavigator({
  Welcome: { screen: Welcome,
    navigationOptions: ({ navigation }) => ({
      title: 'Welcome',
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

const Nav = createStackNavigator({
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
  Welcome: { screen: Welcome,
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
});
