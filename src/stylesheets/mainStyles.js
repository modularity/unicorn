import {StyleSheet, Dimensions} from 'react-native';
var window = Dimensions.get('window');
var btnWidth = window.width*.6;
var btnHeight = window.width*.12;

module.exports =  StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    //padding: 10
  },
  audioBtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    //margin: 10
  },
  activeBtn: {
    backgroundColor: '#ef8bc9',
    borderRadius: 20,
    padding: 20,
    margin: 20,
    //alignSelf: 'center'
  },
  inactiveBtn: {
    backgroundColor: '#444',
    borderRadius: 20,
    padding: 20,
    margin: 20,
    //alignSelf: 'center'
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    textAlign: 'center',
    color: '#fff'
  },
  pageText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Avenir',
    textAlign: 'center',
  },
  logo: {
    width: btnWidth,
    height: btnWidth*.8,
    borderRadius: btnWidth/2,
    resizeMode: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  modalMsgContainer: {
   marginTop: 20,
   flex: .6,
   justifyContent:'center',
   alignItems: 'center',
   alignSelf: 'center',
 },
 modalClose: {
   width: window.width*.8,
   backgroundColor: '#fdba33',
   padding: 5,
 },
 modalHeader: {
   flex: .6,
   width: window.width*.8,
   backgroundColor: '#fdba33',
   justifyContent: 'center',
   alignItems: 'center',
 },
 infoRadius: {
   borderWidth:2,
   borderColor:'#ecf0f1',
   alignItems:'center',
   justifyContent:'center',
   width:100,
   height:100,
   backgroundColor:'#fff',
   borderRadius:100,
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
});
