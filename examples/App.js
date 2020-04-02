/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import {ExampleComponent} from "../../ui-builder/app";

import { ExampleComponent } from "../examples/android/app/src/parent";

const onButtonClick = () => {
  alert('Button Pressed');
}

const buttonData = {
  'type': 'button',
  'properties': {
    'onPress': onButtonClick,
    'title': 'Custom Button',
    'disabled': false,
    'color': '#f194ff'
  }
};

const toastData = {
  'type': 'toast',
  'properties': {
    'message': 'Custom Toast'
  }
};

const App: () => React$Node = () => {
  return (
    <>
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text> React Native Building Blocks  </Text>
        </View>
      </View>
      <View style={styles.sectionContainer}>
      </View>
      <ExampleComponent data={buttonData} />

      <ExampleComponent data={toastData} />

    </>
  );
};

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
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
