import {StyleSheet, Dimensions} from 'react-native';
var window = Dimensions.get('window');
var btnWidth = window.width*.4;
var btnHeight = window.width*.12;
var inputWidth = window.width*.5;

module.exports =  StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: inputWidth,
    height: inputWidth,
    borderRadius: btnWidth/2,
    resizeMode: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  inputSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: .5,
    borderColor: 'rgba(0,0,0,0.2)',
    height: 40,
    borderRadius: 5,
    margin: 8
  },
  inputImage: {
    padding: 5,
    margin: 5,
    height: 25,
    width: 25,
    //resizeMode : 'stretch',
    alignItems: 'center'
  },
  input: {
    width: inputWidth,
    height: btnHeight,
    padding: 8,
  },
  buttonContainer: {
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  pageText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    textAlign: 'center',
    color: '#fff',
  },
  confirmBtn: {
    backgroundColor: '#ef8bc9',
    width: btnWidth,
    height: btnHeight,
    borderRadius: 20,
    padding: 10,
    alignSelf: 'center'
  },
  loginText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    textAlign: 'center',
    color: '#948bef',
  },
  msgText: {
    width: Dimensions.get('window').width,
    fontSize: 14,
    textAlign: 'center',
    alignSelf: 'center',
    padding: 5,
    backgroundColor: '#f1592a',
    color: '#fff'
  },
  modalMsgContainer: {
   flex: 1,
   justifyContent:'center',
   alignItems: 'center',
   alignSelf: 'center',
 },
 modalClose: {
   width: window.width*.8,
   backgroundColor: '#ef8bc9',
   padding: 5,
 },
 modalHeader: {
   flex: .3,
   width: window.width*.8,
   backgroundColor: '#ef8bc9',
   justifyContent: 'center',
   alignItems: 'center',
 },
 infoRadius: {
   width: btnWidth/2,
   height: btnWidth/2,
   borderRadius: btnWidth/4,
   borderWidth:2,
   borderColor:'#fff',

   backgroundColor:'#fff',
   justifyContent:'center',
   alignItems: 'center'
 },
 errImage: {
   width: btnWidth/2,
   height: btnWidth/2,
   borderRadius: btnWidth/4,
   resizeMode: 'center',
   justifyContent: 'center',
   alignItems: 'center',
   alignSelf: 'center',
 },
 modalTxtContainer: {
   width: window.width*.8,
   backgroundColor: '#ecf0f1',
   flex: .3,
   justifyContent: 'center',
   alignItems: 'center',
 },
  h1Text: {
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Avenir',
    textAlign: 'center',
    alignSelf: 'center',
    margin: 3,
    color: '#777',
    backgroundColor: 'transparent',
  },
  registerAgain: {
    backgroundColor: '#fcbae3',
    width: btnWidth,
    height: btnHeight,
    borderRadius: 20,
    padding: 10,
    margin: 5,
    alignSelf: 'center'
    }
});
