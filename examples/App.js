/**
 * Voice Recognition React Native App
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Tts from 'react-native-tts';
import Voice from '@react-native-community/voice';
import { APP_NAME, BUTTON_MSG, ERROR_RESPONSE_MSG, VOICE_DEFAULT_LANG, VOICE_RESPONSE_MSG } from "./constants";
import { Button } from "react-native-elements";
import { Text, View } from 'react-native';
import { mapper } from "./Mapper";

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      recognized: '',
      started: '',
      results: [],
      textResponse: '',
      mapper: {}
    };

    Voice.onSpeechStart = this.onSpeechStartHandler.bind(this);
    Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
    Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
  }

  async componentDidMount() {
    this.setState({ mapper: mapper })
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

    console.log('onSpeechResultsHandler-response:', this.state.results[0])
    await Object.values(this.state.mapper).map((val, index) => {
      if (val.includes(this.state.results[0])) {
        this.setState({ textResponse: `${VOICE_RESPONSE_MSG} ${Object.keys(mapper)[index]}` })
      }
    })

    if (this.state.textResponse.length === 0) {
      this.setState({ textResponse: ERROR_RESPONSE_MSG })
    }
    await this.convertTextToSpeech(this.state.textResponse);
  }

  convertTextToSpeech = (input) => {
    console.log('convertTextToSpeech:', input)
    Tts.speak(input)
    // input.map((val) => Tts.speak(val));
  };

  /**
   * Method will be called on click of a button, it will start listening... 
   * @param {*} e 
   */
  async _startRecognition(e) {
    this.setState({
      recognized: '',
      started: '',
      results: [],
      textResponse: ''
    });
    try {
      await Voice.start(VOICE_DEFAULT_LANG);
    } catch (e) {
      console.error(e);
    }
  }

  // Voice recognition understand letters in small case only, either will convert all to small before sending or ensure that values in json object should be in small case.
  render() {
    return (
      <View>
        <Text style={{ color: 'red', textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}> {APP_NAME} </Text>
        <Text style={{ marginTop: 20, textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}> {this.state.results[0]} </Text>
        <Button
          title={BUTTON_MSG}
          onPress={(e) => this._startRecognition(e)}
          buttonStyle={{ width: "60%", left: 70, borderWidth: 3, marginTop: 60 }}
        />
      </View>
    );
  }
}
