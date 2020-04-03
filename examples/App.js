/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';
import {get} from 'lodash';
import UiBuilder from 'react-native-ui-builder';

import Input from './src/input';

const source = [
  {
    label: 'name',
    style: {borderColor: 'grey', borderWidth: 1, width: 200},
    type: 'input',
  },
];

export default class App extends React.Component {
  constructor() {
    super();
    //this.selectComponent = this.selectComponent.bind(this);
  }

  // selectComponent(component) {
  //   const type = get(component, 'type', '');
  //   switch (type) {
  //     case 'input':
  //       return <Input componentData={component} />;
  //   }
  // }

  render() {
    return (
      <View>
        <UiBuilder source={source} />
      </View>
    );
  }
}
