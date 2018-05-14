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
});
