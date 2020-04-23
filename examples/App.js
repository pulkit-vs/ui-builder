/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import UiBuilder from 'react-native-ui-builder';
import React from 'react';

const source = {
  // theme: 'darkTheme',
  data: [{
    type: 'button',
    properties: {
        title: 'FACEBOOK',
        showCircle: true,
        buttonStyle : {},
        // icon: {
        //   name: 'facebook',
        //   color: 'blue',
        //   size: 20
        // }
    }
}
]
}

export default class App extends React.Component {

  render() {
    return (
      <>
        <UiBuilder source={source} />
      </>
    );
  }
}
