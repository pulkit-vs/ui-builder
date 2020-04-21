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
import { View, Text } from 'react-native';

const onIconClick = () => {
  alert('Please add message on Icon click');
};

// Global variable to get theme type in other files.
export let theme;
const source = {
  theme: 'lightTheme',
  data: [
    {

    }
  ]

}

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
        <View className="react-view" style={{ width: 200 }}>
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
