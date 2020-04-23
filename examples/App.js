/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import UiBuilder from 'react-native-ui-builder';
import React from 'react';

const source = {
  theme: 'lightTheme',
  data: [
    {
      type: 'input',
      properties: {
        label: 'Mobile Number (10 digits)',
        placeholderTextColor: 'grey',
        style: {
          backgroundColor: 'white',
          borderColor: 'grey',
          borderWidth: 2,
          width: '90%',
          left: 20,
          marginTop: 40,
        },
      },
    },
    {
      type: 'button',
      properties: {
        title: 'FACEBOOK',
        titleStyle: {color: 'blue', fontSize: 20},
        buttonStyle: {
          backgroundColor: 'white',
          width: '90%',
          left: 20,
          borderWidth: 3,
          marginTop: 20,
        },
        icon: {
          name: 'facebook',
          color: 'blue',
          size: 20,
        },
      },
    },
  ],
};

export default class App extends React.Component {
  render() {
    return (
      <>
        <UiBuilder source={source} />
      </>
    );
  }
}
