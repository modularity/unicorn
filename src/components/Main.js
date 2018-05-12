
import React, { Component } from 'react';
import { Animated,Platform,Text,View,Image,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../stylesheets/mainStyles';

type Props = {};
export default class Main extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      name: 'Unicorn'
    }
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    });
  }

  render() {
    this.SetInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    });
    const Rotate_Y_AnimatedStyle = {
      transform: [{ rotateY: this.SetInterpolate }]
    }
    return (
      <View style={styles.container}>
      <Text style={styles.pageText}>Welcome {this.state.name} to	&#129412; paradise!</Text>
      {this.renderButtons()}
        <Animated.Image style={[Rotate_Y_AnimatedStyle, styles.logo]}
          source={require('../images/royaltyfreeunicorn.jpg')} />
        <TouchableOpacity onPress={ () => this.props.navigation.navigate('Register')}>
            <Text style={styles.pageText}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
  renderButtons() {
    if (this.state.isPlaying) {
      return (
        <View style={styles.buttonRow}>
        <TouchableOpacity onPress={ () => this.playAudio()}
                          style={styles.btn}>
        <View style={styles.audioBtn}>
          <Icon name="pause" size={25} color="#fff"/>

        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={ () => this.stopAudio()}
                          style={styles.btn}>
        <View style={styles.audioBtn}>
          <Icon name="stop" size={25} color="#fff"/>

        </View>
        </TouchableOpacity>
        </View>
      );
    }
    return (
      <View>
        <TouchableOpacity onPress={ () => this.playAudio()}
                          style={styles.btn}>
        <View style={styles.audioBtn}>
          <Icon name="play" size={25} color="#fff"/>

        </View>
        </TouchableOpacity>
      </View>
    );
    /*
    <TouchableOpacity style={styles.audioBtn}
            onPress={ () => this.playAudio() }>
        <Icon name="pause" size={25} color="#ef8bc9"/>
        <Text style={styles.pageText}>Pause</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.audioBtn}
          onPress={ () => this.stopAudio() }>
        <Icon name="stop" size={25} color="#ef8bc9"/>
        <Text style={styles.pageText}>Stop</Text>
    </TouchableOpacity>


    return (
      <View styles={styles.buttonRow}>
        <TouchableOpacity style={styles.audioBtn}
                onPress={ () => this.playAudio() }>
          <View style={styles.audioBtn}>
            <Icon name="play" size={25} color="#ef8bc9"/>
            <Text style={styles.pageText}>Play</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
    */
  }
  playAudio() {
    this.setState({isPlaying: true});
    this.flip_Card_Animation();
  }
  stopAudio() {
    this.setState({isPlaying: false});
    this.flip_Card_Animation();
  }

  flip_Card_Animation = () => {
    if (this.value >= 90) {
      Animated.spring(this.animatedValue,{
        toValue: 0,
        tension: 10,
        friction: 8,
      }).start();
    } else {
      Animated.spring(this.animatedValue,{
        toValue: 180,
        tension: 10,
        friction: 8,
      }).start();

    }
  }
}
