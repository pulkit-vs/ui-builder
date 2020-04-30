/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import UiBuilder from 'react-native-ui-builder';
import React from 'react';
import {source} from './sampleJSON/task';
import MultiScreenUiBuilder from './src/Navigation/navigation';

// const source = {};

export default class App extends React.Component {
  render() {
    return <MultiScreenUiBuilder source={source} />;
  }
}
