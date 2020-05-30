/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import TakeInput from './emailApp/voice/takeInput';
import {View, Button} from 'react-native';
//import {Button} from 'react-native-elements';
import {GoogleSignin} from '@react-native-community/google-signin';
import React, {Component} from 'react';

export default class App extends Component {
  handleGoogleClicked = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const tokens = await GoogleSignin.getTokens();
      if (tokens) {
        console.log(tokens);
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  render() {
    return (
      <View>
        {/* <TakeInput /> */}
        <Button title="Login Button" onPress={this.handleGoogleClicked} />
      </View>
    );
  }
}
