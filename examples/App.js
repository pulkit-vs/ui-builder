/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import Voice from '@react-native-community/voice';
import Tts from 'react-native-tts';
// import * as Permissions from 'expo-permissions';
import {mapper} from './Mapper';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recognized: '',
      started: '',
      results: [],
      textResponse: '',
      mapper: {},
    };

    Voice.onSpeechStart = this.onSpeechStartHandler.bind(this);
    Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
    Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
  }

  async componentDidMount() {
    this.setState({mapper: mapper});
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

    console.log(this.state.results[0]);
    await Object.values(this.state.mapper).map((val, index) => {
      if (val.includes(this.state.results[0])) {
        this.setState({
          textResponse: `I heard your question, your answer is ${
            Object.keys(mapper)[index]
          }`,
        });
      }
    });

    if (this.state.textResponse.length === 0) {
      this.setState({textResponse: 'Sorry, i dont know the answer'});
    }
    await this.convertTextToSpeech(this.state.textResponse);
  };

  convertTextToSpeech = (input) => {
    console.log('convertTextToSpeech:', input);
    Tts.speak(input);
    // input.map((val) => Tts.speak(val));
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

  // Voice recognition understand letters in small case only, either will convert all to small before sending or ensure that values in json object should be in small case.

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
          Voice Recognition Service{' '}
        </Text>
        <Text
          style={{
            marginTop: 20,
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          {' '}
          {this.state.results[0]}{' '}
        </Text>
        <Button
          title={'Click me and say something'}
          onPress={(e) => this._startRecognition(e)}
          buttonStyle={{width: '60%', left: 70, borderWidth: 3, marginTop: 60}}
        />
      </View>
    );
  }
}
