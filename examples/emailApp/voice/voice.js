/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import Voice from '@react-native-community/voice';
import {debounce} from 'lodash';

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
    // this._startRecognition();
    setInterval(() => {
      this._startRecognition();
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

  onSpeechResultsHandler = debounce((e) => {
    this.setState({
      results: e.value,
    });
    this.props.handle(e.value[0]);
  }, 1000);

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
    return <></>;
  }
}
