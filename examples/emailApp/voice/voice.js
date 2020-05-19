/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import Voice from '@react-native-community/voice';

export default class VoiceComponent extends React.Component {
  constructor(props) {
    super(props);
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

  // will record your voice and send covert it into text and  send it to the function which set attributes of email.
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
        <Icon
          raised
          name="microphone"
          type="font-awesome"
          size={50}
          color="#CC6699"
          onPress={(e) => this._startRecognition(e)}
          underlayColor="thistle"
          containerStyle={{margin: '30%', alignSelf: 'center'}}
        />

        <Text
          style={{
            marginBottom: 15,
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          {' '}
          {this.state.results[0]}{' '}
        </Text>
      </View>
    );
  }
}
