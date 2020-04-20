/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// TODO: will use Uibuilder from npm package later.
// import UiBuilder from 'react-native-ui-builder';

import React from 'react';
import UiBuilder from './src/index';
import { View } from 'react-native';

// Global variable to get theme type in other files.
export let theme;
const source = {
  // theme: 'darkTheme',
  data: [
    {
      type: 'modal',
      properties: {
        style: { margin: 0, width: '100%', marginBottom: 200, marginTop: 200, backgroundColor: 'white' },
        backdropColor: 'grey',
        closeModal: ['onBackdropPress', 'onBackButtonPress', 'onSwipeComplete'],
        swipeDirection: 'left'
      },
      childrens: [
        {
          type: 'icon',
          properties: {
            containerStyle: { alignSelf: 'flex-end', right: 20, marginBottom: 10, position: 'absolute' },
            name: 'close',
            color: 'red',
            size: 40,
            onPress: 'closeModal'
          }
        },
        {
          type: 'text',
          properties: {
            style: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 10, color: 'black' },
            title: 'Custom Modal'
          }
        },
        {
          type: 'input',
          properties: {
            label: 'Email',
            style: { backgroundColor: 'white', borderColor: 'grey', borderWidth: 2, width: "60%", left: 70, marginTop: 40 },
            placeholderTextColor: 'grey'
          }
        },
        {
          type: 'button',
          properties: {
            title: "Close Modal",
            onPress: 'closeModal',
            buttonStyle: { backgroundColor: 'white', width: "60%", left: 70, borderWidth: 3, marginTop: 60 },
            titleStyle: { color: 'black' }
          }
        },
      ]
    },
    {
      type: 'view',
      style: {},
      childrens: [
        {
          type: 'input',
          properties: {
            label: 'Mobile Number (10 digits)',
            placeholderTextColor: 'grey',
            style: { backgroundColor: 'white', borderColor: 'grey', borderWidth: 2, width: "90%", left: 20, marginTop: 40 }
          }
        },
        {
          type: 'button',
          properties: {
            title: 'FACEBOOK',
            titleStyle: { color: 'blue', fontSize: 20 },
            buttonStyle: { backgroundColor: 'white', width: "90%", left: 20, borderWidth: 3, marginTop: 20 }
          }
        }
      ]
    }
  ]
};

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    theme = source.theme;
    return (
      <>
        <View>
          <UiBuilder source={source.data} />
        </View>
      </>
    );
  }
}
