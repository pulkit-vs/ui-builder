/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// TODO: will use Uibuilder from npm package later.
//import UiBuilder from 'react-native-ui-builder';
import React from 'react';
import UiBuilder from './src/index';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {View, StyleSheet, Text} from 'react-native';
import {CheckBox, Icon} from 'react-native-elements';
const onButtonClick = () => {
  alert('Button Pressed');
};

// Global variable to get theme type in other files.
export let theme;
const source = {
  theme: '',
  data: [
    {
      type: 'checkbox',
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
        checked: true,

        disabled: false,
        title: 'Enter title here using props ',
        disabled: false,
        checkboxStyle: {
          color: 'red',
          iconRight: false,
        },

        titleStyle: {color: 'black', fontFamily: 'arial'},
        buttonStyle: {backgroundColor: 'pink'},
        titleStyle: {color: 'blue', fontSize: 40},
      },
    },
  ],
};

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: true,
    };
  }

  render() {
    theme = source.theme;
    return (
      <>
        <View className="react-view" style={{width: 200}}>
          <View style={styles.sectionContainer}>
            <Text> React Native Building Blocks </Text>
          </View>
        </View>
        <View>
          <UiBuilder source={source.data} />
        </View>
      </>
    );
  }
}
