/**
 * Sample React Native Ui Builder App
 * https://github.com/pulkit-vs/ui-builder
 *
 * @format
 * @flow strict-local
 */

//TODO : BackPress not working with debug Navigator Screen
// import UiBuilder from 'react-native-ui-builder';
import UiBuilder from './src/navigation';
import React from 'react';
import data from './src/data/jsonData';

export default class App extends React.Component {
  render() {
    return <UiBuilder source={data.carouselSource} />;
  }
}
