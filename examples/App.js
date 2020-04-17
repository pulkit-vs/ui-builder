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
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { View, StyleSheet, Text } from 'react-native';

const onButtonClick = () => {
  alert('Button Pressed');
};

// Global variable to get theme type in other files.
export let theme;
const source = {
  // theme: 'darkTheme',
  data: [
    {
      type: 'view',
      style: {},
      childrens: [
        {
          type: 'header',
          properties: {
            containerStyle: {
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
              backgroundColor: 'white',
              height: 70,
            },
            placement: 'left',
            fontSize: 30,
            width: '10%',
            leftComponent: {
              // icon : {},
              text: 'Create an account to checkout',
              style: { color: 'black', fontSize: 18 },
            },
            rightComponent: {
              icon: {
                icon: 'close',
                color: 'grey',
                size: 30,
              },
            },
          },
        },
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
            icon: {
              name: 'facebook',
              color: 'blue',
              size: 20,
              iconStyle: { marginRight: 10 }
            },
            titleStyle: { color: 'blue', fontSize: 20 },
            buttonStyle: {
              backgroundColor: 'white',
              width: '90%',
              left: 20,
              borderWidth: 3,
              marginTop: 20,
            },
          },
        },
      ],
    }
  ],
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
