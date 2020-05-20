/**
 * Sample React Native Ui Builder App
 * https://github.com/pulkit-vs/ui-builder
 *
 * @format
 * @flow strict-local
 */

//TODO : BackPress not working with debug Navigator Screen
// import UiBuilder from 'react-native-ui-builder';
import React from 'react';
import UiBuilder from './src/Navigation';
import data from './src/data/jsonData';

export default class App extends React.Component {
  render() {
    // return <UiBuilder source={data.carouselSource} />;
    return <UiBuilder source={data.debugNavigator} />;
  }
}
