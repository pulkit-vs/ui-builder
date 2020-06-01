/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import TakeInput from './emailApp/voice/takeInput';
import {View} from 'react-native';
import React, {Component} from 'react';

export default class App extends Component {
  render() {
    return (
      <View>
        <TakeInput />
      </View>
    );
  }
}
