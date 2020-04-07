/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import { get } from 'lodash';
import React from 'react';
import { View, TextInput } from 'react-native';
import { applyThemeOnTextInputStyle } from "./theme";
import { createTextInputStyle } from "./inputStyle";
import { theme } from "../App";

export default class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };

    //Function Binders
    this.onChangeText = this.onChangeText.bind(this);
  }

  onChangeText(event) {
    this.setState({ value: event });
  }

  render() {
    const { componentData } = this.props;

    // Update pre-defined style as per given props.
    let textInputStyle = createTextInputStyle(componentData);

    // Applying theme on text input style
    textInputStyle = theme ? applyThemeOnTextInputStyle(textInputStyle, theme) : textInputStyle;

    return (
      <View>
        <TextInput
          onChangeText={this.onChangeText}
          placeholder={textInputStyle.placeholder}
          selectionColor={textInputStyle.selectionColor}
          style={textInputStyle.style}
          value={this.state.value}
          placeholderTextColor={textInputStyle.placeholderTextColor}
        />
      </View>
    );
  }
}
