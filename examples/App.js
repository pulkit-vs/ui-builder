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
import {View} from 'react-native';

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
      style: {flexDirection: 'row'},
      childrens: [
        {
          type: 'image',
          properties: {
            uri: 'https://picsum.photos/seed/picsum/200/300',
            style: {
              width: 180,
              height: 300,
            },
          },
        },
        {
          type: 'image',
          properties: {
            uri: 'https://picsum.photos/200/300/?blur=1',
            style: {
              width: 200,
              height: 300,
            },
          },
        },
      ],
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
          },
        },
      ],
    },
    {
      type: 'button',
      properties: {
        onPress: onButtonClick,
        title: 'Custom Button1',
        disabled: false,
        buttonStyle: {backgroundColor: 'pink'},
        titleStyle: {color: 'blue', fontSize: 40},
      },
    },
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
