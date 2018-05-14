
import React, { Component } from 'react';
import { NativeModules, Animated,Platform,Text,View,Image,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../stylesheets/welcomeStyles';
import Video from 'react-native-video';
//const NativeModules = require('NativeModules');

type Props = {};
export default class Welcome extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      pause: false,
      loopAudio: (Platform.OS === 'android') ? false : true
    }
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    });
  }

  render() {
    // prep animation
    this.SetInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    });
    const Rotate_Y_AnimatedStyle = {
      transform: [{ rotateY: this.SetInterpolate }]
    }

    // pull name from navigation props
    const { navigation } = this.props;
    var name = navigation.getParam('name', null);
    if (name === null) name = this.props.screenProps.name;

    return (
      <View style={styles.container}>
      <Text style={styles.pageText}>Welcome {name} to	&#129412; paradise!</Text>
      {this.renderButtons()}
        <Animated.Image style={[Rotate_Y_AnimatedStyle, styles.logo]}
          source={require('../images/unicornLogo.png')} />
        <TouchableOpacity onPress={ () => this.logoutPressed()}>
            <Text style={styles.pageText}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
  renderButtons() {
    //https://www.dropbox.com/s/zrl1jsdk29qdv5r/Pink Fluffy Unicorns Dancing on Rainbows - Fluffle Puff .mp3
    // dropbox link didn't work, on iOS returns AVFoundationErrorDomain code -11800
    // s3 streams but takes 8-12 seconds to buffer
    if (this.state.isPlaying) {
      return (
        <View>
          <Video source={{uri: "https://s3.amazonaws.com/unicorn-app/PinkFluffyUnicornsDancingonRainbows-FlufflePuff.mp3"}}   // Can be a URL or a local file.
                 ref={(ref) => {this.player = ref}}      // Store reference
                 rate={1.0}                              // 0 is paused, 1 is normal.
                 volume={1.0}                            // 0 is muted, 1 is normal.
                 muted={false}                           // Mutes the audio entirely.
                 paused={this.state.pause}               // Pauses playback entirely.
                 repeat={this.state.loopAudio}           // Repeat forever.
                 playInBackground={false}                // Audio continues to play when app entering background.
                 playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
                 ignoreSilentSwitch={"ignore"}           // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
                 progressUpdateInterval={1000.0}         // [iOS] Interval to fire onProgress (default to ~250ms)
                 onLoadStart={this.loadStart}            // Callback when video starts to load
                 onLoad={this.onLoad}                    // Callback when video loads
                 onProgress={this.onProgress}            // Callback every ~250ms with currentTime
                 onEnd={this.onEnd}                      // Callback when playback finishes
                 onError={this.videoError}               // Callback when video cannot be loaded
                 onBuffer={this.onBuffer}                // Callback when remote video is buffering
                 onTimedMetadata={this.onTimedMetadata}  // Callback when the stream receive some metadata
               />
          <View style={styles.buttonRow}>
            { this.state.pause ? this.renderButton('play', () => { this.playAudio() }, this.state.isPlaying )
              : this.renderButton('pause', () => { this.pauseAudio() }, this.state.isPlaying )}
            {this.renderButton('stop', () => { this.stopAudio() }, this.state.isPlaying )}
          </View>
        </View>
      );
    }
    return (
      <View>
        {this.renderButton('play', () => { this.playAudio() }, true )}
      </View>
    );
  }
  // Video/Audio API callbacks
  loadStart = (res) => {
    console.log('loadStart', res);
  }
  onLoad = (res) => {
    console.log('onLoad', res);
  }
  onProgress = (res) => {
    console.log('onProgress', res);
  }
  onEnd = (res) => {
    console.log('onEnd', res);
  }
  videoError = (err) => {
    console.log('video err', err);
  }
  onBuffer = (res) => {
    console.log('onBuffer', res);
  }
  onTimedMetadata = (res) => {
    console.log('onTimedMetadata', res);
  }

  // button factory: toggle playback button styles btw active and inactive mode
  renderButton(title, onPress, active) {
    var style = active ? styles.activeBtn : styles.inactiveBtn;
    return (
        <TouchableOpacity onPress={onPress} style={style}>
          <View style={styles.audioBtn}>
            <Icon name={title} size={25} color="#fff"/>
          </View>
        </TouchableOpacity>
    );
  }
  playAudio() {
    this.setState({isPlaying: true, pause: false});
    this.startAnimation();
  }
  pauseAudio() {
    this.setState({pause: true});
    this.stopAnimation();
  }
  stopAudio() {
    this.setState({isPlaying: false, pause: false});
    this.stopAnimation();
  }

  startAnimation() {
    Animated.loop(
        Animated.sequence([
          Animated.spring(this.animatedValue,{
            toValue: 0,
            tension: 10,
            friction: 8,
          }),
          Animated.spring(this.animatedValue,{
            toValue: 180,
            tension: 10,
            friction: 8,
          })
        ])
      ).start()
  };

  stopAnimation() {
    this.animatedValue.stopAnimation();
  }

  logoutPressed() {
    var CustomModal = NativeModules.CustomModal;
    this.props.navigation.navigate('Login');
    if (Platform.OS === 'android') {
      CustomModal.show('You got logged out!', CustomModal.SHORT);
      return;
    }
    CustomModal.logoutMsg('You got logged out!','We will miss you...');
  }
}
