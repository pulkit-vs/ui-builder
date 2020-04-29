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
import { Permissions } from "expo";

export default class App extends React.Component {

  constructor(props){
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

  voiceToText = () => {

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
    this.setState({
      results: e.value,
    });
  }

  onStartButtonPress(e){
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

  onReleaseButton(e){
    console.log('onReleaseButton:e->', e);
    Voice.stop();
  }

  async componentDidMount() {

    const { status, expires, permissions } = await Permissions.askAsync(
      Permissions.AUDIO_RECORDING
    );
    if (status !== "granted") {
      alert('Permissions');
      //Permissions not granted. Don't show the start recording button because it will cause problems if it's pressed.
     // this.setState({ showRecordButton: false });
    } else {
      alert('no Permissions');
      //this.setState({ showRecordButton: true });
    }
  }

  render() {

    console.log('Result:', this.state.results);
    return (
     <View> 
       <Text> Voice Recognition Service </Text>
       <Button
          title={"Speech"}
          onPress={this._startRecognition.bind(this)}          
        />
     </View>
    );
  }
}
