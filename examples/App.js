/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// import 'react-native-gesture-handler';
// import UiBuilder from 'react-native-ui-builder';
// import UiBuilder from './src/index';

import React from 'react';
import {sourceData} from './sampleJSON/jsonForLoginPage';
import UiBuilderMultipleScreen from './Navigation/navigation';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <UiBuilderMultipleScreen source={sourceData} />;
  }
}
