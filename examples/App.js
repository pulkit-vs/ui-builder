/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import UiBuilder from 'react-native-ui-builder';
import React from 'react';
import { Text, View } from 'react-native';
import { Button } from "react-native-elements";
import Voice from '@react-native-community/voice';
import Tts from 'react-native-tts';
// import { Permissions } from "expo";
import * as Permissions from 'expo-permissions';

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
    'how are you': 'i m good thank you'
  }

  returningResponseForAnInput = async () => {
    console.log('returningResponseForAnInput:', Object.keys(this.responses))
    await Object.keys(this.responses).map(key => {
      if (key === this.state.results[0]) {
        this.setState({ result: this.responses[key] })
        return this.responses[key];
      }
    })
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

    this.setState({ textResponse: '' })
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

  onStartButtonPress(e) {
    console.log('onStartButtonPress:e->', e);
    Voice.start('en-US');
  }

  async _startRecognition(e) {
    this.setState({
      recognized: '',
      started: '',
      results: [],
    });
    try {
      await Voice.start('en-US');
    } catch (e) {
      console.error(e);
    }
  }

  onReleaseButton(e) {
    console.log('onReleaseButton:e->', e);
    Voice.stop();
    console.log('result:', this.state.results)
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
    console.log('Result:', this.state.results);
    return (
      <View>
        <Text> Voice Recognition Service </Text>
        <Button
          title={"Speech"}
          onPress={(e) => this._startRecognition(e)}
        />
        {/* <Button
          title={"Speech end"}
          onPress={(e) => this.onReleaseButton(e)}
        /> */}
      </View>
    );
  }
}
