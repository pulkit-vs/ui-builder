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
  data: [
    {
      type: 'checkbox',
      properties: {
        title: 'PHP',
        disabled: false,
        checked: false,
        titleStyle: {
          color: 'black',
          fontSize: 22,
          uncheckedColor: 'black',
          checkedColor: 'pink',
        },
        checkboxStyle: {
          color: 'pink',
          size: 25,
          checkedIcon: 'check-circle',
          uncheckedIcon: 'circle-o',
        },
        containerStyle: {
          borderColor: '#DCDCDC',
          borderRadius: 20,
          width: '80%',
        },
      },
    },
    {
      type: 'checkbox',
      properties: {
        title: 'JAVASCRIPT',
        titleStyle: {
          color: 'pink',
          fontSize: 22,
          uncheckedColor: 'black',
          checkedColor: 'pink',
        },
        checkboxStyle: {
          color: 'pink',
          size: 25,
        },
        containerStyle: {
          borderColor: '#DCDCDC',
          borderRadius: 20,
          width: '80%',
        },
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
          <View>
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
