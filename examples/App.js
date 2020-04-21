/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// TODO: will use Uibuilder from npm package later.
//import UiBuilder from 'react-native-ui-builder';
import React, {Children} from 'react';
import UiBuilder from './src/index';
import {source} from './src/sampleJSON/yourAddress';
const onIconClick = () => {
  alert('Please add message on Icon click');
};

// Global variable to get theme type in other files.
export let theme;

export default class App extends React.Component {
  render() {
    theme = source.theme;
    return (
      <>
        <UiBuilder source={source.data} />
      </>
    );
  }
}
