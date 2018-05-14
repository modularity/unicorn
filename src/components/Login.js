/**
  Login page with email/password and token generation on server side
 */
import React, { Component } from 'react';
import { AsyncStorage,Text,TextInput,TouchableOpacity,View,Image,Linking,Alert,Platform,Modal,KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../stylesheets/loginStyles';

type Props = {};
export default class Login extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errMsg: 'testing',
      showMsgModal: false,
    }
  }

  render() {
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;
    return (
    <View style={styles.container}>
      {this.renderMessage()}
      <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={keyboardVerticalOffset}>
      <Image style={styles.logo} source={require('../images/unicornLogo.png')} />
      {this.renderInputFields()}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={ () => this.loginPressed()}
                          style={styles.confirmBtn}>
            <Text style={styles.pageText}>Log In</Text>
        </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    </View>
    );
  }

  renderInputFields() {
    return (<View>
      <View style={styles.inputSection}>
        <Icon name="envelope-o" style={styles.inputImage}/>
        <TextInput
              style={styles.input}
              placeholder='email'
              placeholderTextColor='#b6ccef'
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
              autoCapitalize='none'
              keyboardType='email-address'
              autoCorrect={false}
              underlineColorAndroid='transparent'
            />
      </View>
      <View style={styles.inputSection}>
        <Icon name="key" style={styles.inputImage} />
          <TextInput
              style={styles.input}
              placeholder='password'
              placeholderTextColor='#b6ccef'
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              autoCapitalize='none'
              keyboardType='default'
              autoCorrect={false}
              secureTextEntry={true}
              underlineColorAndroid='transparent'
            />
      </View>
    </View>);
  }

  // display user error messages
  renderMessage() {
    return (<Modal transparent={false} visible={this.state.showMsgModal} animationType={'fade'}
           onRequestClose={() => this.setState({showMsgModal: false}) }>
      <View style={styles.modalMsgContainer}>
        <View style={styles.modalClose}>
          <TouchableOpacity onPress={() => this.setState({showMsgModal: false, postRecPreGraph: false}) }>
            <Icon name="times" size={25} color="#ecf0f1"/>
          </TouchableOpacity>
        </View>
        <View style={styles.modalHeader}>
          <View style={styles.infoRadius}>
          <Image style={styles.errImage} source={require('../images/sadunicorn.jpg')} />
          </View>
        </View>
        <View style={styles.modalTxtContainer}>
          <Text style={styles.h1Text}>{this.state.errMsg}</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.registerAgain}
                            onPress={() => this.routeToRegister() }>
            <Text style={styles.pageText}>Register Again</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>);
  }

  routeToRegister() {
    this.setState({showMsgModal: false});
    this.props.navigation.navigate('Register')
  }

  async loginPressed() {
    var errorMsg = '';
    if (!await this.validateEmail()) errorMsg += "Please enter a valid email. \n";
    if (!await this.validatePassword()) errorMsg += "Please enter your password.";
    if (errorMsg === '') this.login();
    else this.setState({showMsgModal: true, errMsg: errorMsg});
  }

  // check email input against registration email via AsyncStorage
  validateEmail() {
    return AsyncStorage.getItem('email')
      .then( val => val === this.state.email )
      .catch( e => Alert.alert('Start Error', 'Hmm something went wrong checking your password.'))
  }

  // check password input against registration password via AsyncStorage
  // AsyncStorage isn't encrypted
  // definitely recommend a web service or encryption layer
  validatePassword() {
    return AsyncStorage.getItem('password')
      .then( val => val === this.state.password )
      .catch( e => Alert.alert('Start Error', 'Hmm something went wrong checking your password.'))
  }

  login(user) {
    this.props.navigation.navigate('Welcome');
  }

}
