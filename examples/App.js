/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// TODO: Will use package later.
// import UiBuilder from 'react-native-ui-builder';
import UiBuilder from "./src/index";
import React from 'react';

const source = {
  data: [
    {
      type: 'slider',
      properties: {
        maximumTrackTintColor: 'grey',
        minimumTrackTintColor: "lightgrey",
        onSlidingComplete: () => { console.log('onSlidingComplete') },
        onSlidingStart: () => { console.log('onSlidingStart') },
        thumbTintColor: 'yellow',
        style: { height: 200 },
        thumbStyle: {
          width: 30,
          height: 30, borderRadius: 0, top: "50%", borderColor: 'green', borderWidth: 1
        },
        trackStyle: { height: 2 }
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
