/**
  Register page with email/password and token generation on server side
 */
import React, { Component } from 'react';
import { Text,TextInput,TouchableOpacity,View,Image,Linking,Alert,Platform,Modal,KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../stylesheets/loginStyles';

type Props = {};
export default class Register extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      errMsg: 'testing',
      showMsgModal: false,
    }
  }

  render() {
    return (
    <View style={styles.container}>
      {this.renderMessage()}
      <Image style={styles.logo} source={require('../images/royaltyfreeunicorn.jpg')} />
      {this.renderInputFields()}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={ () => this.RegisterPressed()}
                          style={styles.confirmBtn}>
            <Text style={styles.pageText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => this.props.navigation.navigate('Login')}>
            <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
    );
  }

  renderInputFields() {
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;
    return (<View>
      <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
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
      <View style={styles.inputSection}>
        <Icon name="user-o" style={styles.inputImage} />
          <TextInput
                style={styles.input}
                placeholder='name'
                placeholderTextColor='#b6ccef'
                onChangeText={(name) => this.setState({name})}
                value={this.state.name}
                autoCapitalize='none'
                keyboardType='email-address'
                autoCorrect={false}
                underlineColorAndroid='transparent'
              />
      </View>
      </KeyboardAvoidingView>
    </View>);
  }

  // display user error messages
  renderMessage() {
    return (<Modal transparent={true} visible={this.state.showMsgModal} animationType={'fade'}
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
      </View>
    </Modal>);
  }

  RegisterPressed() {
    var errorMsg = '';
    // check required fields: email, firstName, lastName, programCode
    if (this.validateEmail()) errorMsg += "Please enter a valid email. \n";
    //if (this.state.password === '') errorMsg += "Please enter your password. \n";
    if (this.validatePassword()) errorMsg += "Your password should have at least 6 characters. \n";
    if (this.validateName()) errorMsg += "Please enter your name.";
    if (errorMsg === '') {
      this.Register();
    } else {
      //Alert.alert("Login error", errorMsg);
      this.setState({showMsgModal: true, errMsg: errorMsg});
    }
  }


  validateEmail() {
    var email = this.state.email;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var isValid = re.test(String(email).toLowerCase());
    //console.warn('email', isValid);
    return !isValid;
  }

  validatePassword() {
    var password = this.state.password;
    var notValidLen = (password.length < 6);
    //console.warn('len',notValidLen);
    var re = /\w/;
    var isValid = re.test(password);
    //console.warn('psd', isValid);
    return !isValid || !notValidLen;
  }

  validateName() {
    var name = this.state.name;
    var re = /\D/;
    var isValid = re.test(name);
    //console.warn('name', isValid);
    return !isValid;
  }


  Register(user) {
    this.props.navigation.navigate('Main');
  }

}