/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, TextInput} from 'react-native';
import {get} from 'lodash';

export default class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };

    //Function Binders
    this.onChangeText = this.onChangeText.bind(this);
  }

  onChangeText(event) {
    this.setState({value: event});
  }

  render() {
    const {componentData} = this.props;
    const label = get(componentData, 'label', '');
    const style = get(componentData, 'style', null);

    return (
      <View>
        <TextInput
          onChangeText={this.onChangeText}
          placeholder={label}
          style={style}
          value={this.state.value}
        />
      </View>
    );
  }
}
