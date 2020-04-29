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
// import { Permissions } from "expo";
import * as Permissions from 'expo-permissions';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      recognized: '',
      started: '',
      results: [],
    };

    Voice.onSpeechStart = this.onSpeechStartHandler.bind(this);
    Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
    Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
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

  onSpeechResultsHandler(e) {
    console.log('onSpeechResultsHandler:e->', e);
    this.setState({
      results: e.value,
    });
  }

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
        <Button
          title={"Speech end"}
          onPress={(e) => this.onReleaseButton(e)}
        />
      </View>
    );
  }
}
