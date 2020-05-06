/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import UiBuilder from 'react-native-ui-builder';
import React from 'react';
import UiBuilder from './src/navigation/navigation';

import {source} from './sampleJSON/carouselJson';

export default class App extends React.Component {
  render() {
    return <UiBuilder source={source} />;
  }
}
