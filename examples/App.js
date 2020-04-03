/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// TODO: Will use UiBuilder builder library later for displaying components.
// import UiBuilder from 'react-native-ui-builder';
import React from 'react';
import UiBuilder from "./src/index";
import { View, StyleSheet, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const onButtonClick = () => {
  alert('Button Pressed');
}

const source = [
  {
    label: 'name',
    style: { borderColor: 'grey', borderWidth: 1, width: 200 },
    type: 'input',
  },
  {
    'type': 'button',
    'properties': {
      'onPress': onButtonClick,
      'title': 'Custom Button',
      'disabled': false,
      'color': '#f194ff',
      'showCircle': false,
      'buttonStyle': { left: 50 }
    }
  }
];


export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text> React Native Building Blocks  </Text>
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <UiBuilder source={source} />
        </View>
      </>
    );
  }
}


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,

  }
});