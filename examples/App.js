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

import Input from './src/input';

// import {ExampleComponent} from "../../ui-builder/app";

import { ExampleComponent } from "../examples/android/app/src/parent";

const onButtonClick = () => {
  alert('Button Pressed');
}

const buttonData = {
  'type': 'button',
  'properties': {
    'onPress': onButtonClick,
    'title': 'Custom Button',
    'disabled': false,
    'color': '#f194ff'
  }
};

const toastData = {
  'type': 'toast',
  'properties': {
    'message': 'Custom Toast'
  }
};

const App: () => React$Node = () => {
  return (
    <>
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text> React Native Building Blocks  </Text>
        </View>
      </View>
      <View style={styles.sectionContainer}>
      </View>
      <ExampleComponent data={buttonData} />

      <ExampleComponent data={toastData} />

    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,

  }
});

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
    this.selectComponent = this.selectComponent.bind(this);
  }

  selectComponent(component) {
    const type = get(component, 'type', '');
    switch (type) {
      case 'input':
        return <Input componentData={component} />;
    }
  }

  render() {
    return (
      <View>
        {source.map(component => {
          return this.selectComponent(component);
        })}
      </View>
    );
  }
}
