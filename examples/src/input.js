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
      // isFocused: false
    };

    //Function Binders
    this.onChangeText = this.onChangeText.bind(this);
  }

  onChangeText(event) {
    this.setState({value: event});
  }

  // handleFocus() {
  //   this.setState({isFocused : true})
  // }
  render() {
    const {componentData} = this.props;
    const label = get(componentData, 'label', '');
    const style = get(componentData, 'style', null);

    return (
      <View>
        <TextInput
          onChangeText={this.onChangeText}
          placeholder={label}
          selectionColor = {componentData.selectionColor}
          style={style}
          value={this.state.value}
          placeholderTextColor = {'white'}
          backgroundColor = {'black'}
          style = { textInputStyle  = {color : 'white'}}
        />
      </View>
    );
  }
}