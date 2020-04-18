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
      type: 'image',
      properties: {
        uri: 'https://reactnative.dev/img/tiny_logo.png',
        style: {
          width: 330,
          height: 200,
          borderRadius: 10,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          borderWidth: 5,
          borderColor: 'black',
          margin: 10,
          marginRight: 10,
        },
        resizeMode: 'repeat',
      },
    },
    // {
    //   type: 'view',
    //   style: {},
    //   childrens: [
    //     {
    //       type: 'input',
    //       properties: {
    //         label: 'Mobile Number (10 digits)',
    //         placeholderTextColor: 'grey',
    //         style: {
    //           backgroundColor: 'white',
    //           borderColor: 'grey',
    //           borderWidth: 2,
    //           width: '90%',
    //           left: 20,
    //           marginTop: 40,
    //         },
    //       },
    //     },
    //     {
    //       type: 'button',
    //       properties: {
    //         title: 'FACEBOOK',
    //         titleStyle: {color: 'blue', fontSize: 20},
    //         buttonStyle: {
    //           backgroundColor: 'white',
    //           width: '90%',
    //           left: 20,
    //           borderWidth: 3,
    //           marginTop: 20,
    //         },
    //       },
    //     },
    //   ],
    // },
    // {
    //   type: 'button',
    //   properties: {
    //     onPress: onButtonClick,
    //     title: 'Custom Button1',
    //     disabled: false,
    //     buttonStyle: {backgroundColor: 'pink'},
    //     titleStyle: {color: 'blue', fontSize: 40},
    //   },
    // },
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
