/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import UiBuilder from 'react-native-ui-builder';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { View, StyleSheet, Text } from 'react-native';

const onButtonClick = () => {
  alert('Button Pressed');
};

// Global variable to get theme type in other files.
export let theme;
const source = {

  theme: 'darkTheme',
  data: [
    {
      label: 'name',
      selectionColor: "blue",
      style: {borderColor: 'grey', borderWidth: 1},
      type: 'input',
    },
    {
      type: 'button',
      properties: {
        onPress: onButtonClick,
        title: 'Custom Button2',
        disabled: false,
        showCircle: true,
        style: { left: 10 },
      },
    }
  ]
};

export default class App extends React.Component {
  constructor() {
    super();
  }

  // TODO: theme can be applied to all components.
  render() {
    theme = source.theme;
    return (
      <>
        <View className="react-view" style={{ width: 200 }}>
          <View style={styles.sectionContainer}>
            <Text> React Native Building Blocks </Text>
          </View>
        </View>
        <View style={styles.sectionContainer}>
            <UiBuilder source={source.data} />
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
  },
});
