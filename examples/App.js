/**
 * Sample React Native App
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import UiBuilder from './src/Navigation';
import data from './src/data/jsonData';

export default class App extends React.Component {
  render() {
    return <UiBuilder source={data.debugNavigator} />;
  }
}
