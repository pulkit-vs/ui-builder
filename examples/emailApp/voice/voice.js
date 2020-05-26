/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View} from 'react-native';
import Tts from 'react-native-tts';

import Voice from '@react-native-community/voice';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recognized: '',
      started: '',
      results: [],
      textResponse: '',
    };

    Voice.onSpeechStart = this.onSpeechStartHandler.bind(this);
    Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
    Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
  }

  async componentDidMount() {
    setInterval(() => {
      Tts.speak('Answer Now');
      setTimeout(() => {
        this._startRecognition();
      }, 1000);
    }, 10000);
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
    await this.props.handle(e.value[0]);
  };

  async _startRecognition(e) {
    this.setState({
      recognized: '',
      started: '',
      results: [],
      textResponse: '',
    });
    try {
      await Voice.start('en-US');
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <View>
        <Text
          style={{
            color: 'red',
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          {' '}
          EMAIL SENDING SERVICE
        </Text>
      </View>
    );
  }
}