/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, View } from 'react-native';
import { Button } from "react-native-elements";
import Voice from '@react-native-community/voice';
import Tts from 'react-native-tts';
// import * as Permissions from 'expo-permissions';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      recognized: '',
      started: '',
      results: [],
      textResponse: ''
    };

    Voice.onSpeechStart = this.onSpeechStartHandler.bind(this);
    Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
    Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
  }

  responses = {
    'hello': 'hello',
    'hi': 'hi',
    'how are you': 'i m good thank you',
    'hi how are you': 'hi i m good thank you',
    'hello how are you': 'hello i m good thank you',
    "what's your name": 'i m a voice recognition service'
  }

  onSpeechStartHandler(e) {
    this.setState({
      started: '√',
    });
  }

  onSpeechEndHandler(e) {
    this.setState({
      recognized: '√',
    });
  }

  onSpeechResultsHandler = async (e) => {

    await this.setState({
      results: e.value,
    });

    await Object.keys(this.responses).map(key => {
      if (key === this.state.results[0]) {
        this.setState({ textResponse: this.responses[key] })
      }
    })
    if (this.state.textResponse.length === 0) {
      this.setState({ textResponse: 'Sorry, i dont know the answer' })
    }
    await this.convertTextToSpeech(this.state.textResponse);
  }

  convertTextToSpeech = (input) => {
    console.log('convertTextToSpeech:', input)
    Tts.speak(input)
    // input.map((val) => Tts.speak(val));
  };

  async _startRecognition(e) {
    this.setState({
      recognized: '',
      started: '',
      results: [],
      textResponse: ''
    });
    try {
      await Voice.start('en-US');
    } catch (e) {
      console.error(e);
    }
  }

  // async componentDidMount() {

  //   console.log('componentDidMount:', Permissions.AUDIO_RECORDING);
  //   let { status, expires, permissions } = Permissions && await Permissions.askAsync(
  //     Permissions.AUDIO_RECORDING
  //   );
  //   console.log('status:', status)
  //   if (status !== "granted") {
  //     console.log('Permissions');
  //   } else {
  //     console.log('no Permissions');
  //   }
  // }

  render() {
    return (
      <View>
        <Text> Voice Recognition Service </Text>
        <Button
          title={"Click me and say something"}
          onPress={(e) => this._startRecognition(e)}
        />
      </View>
    );
  }
}
