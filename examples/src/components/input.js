/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import { Input } from 'react-native-elements';

import { applyTheme } from '../utility/utils';
import { theme } from '../index';

export default class TextInput extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      props: {},
    };

    //Function Binders
    this.onChangeText = this.onChangeText.bind(this);
  }

  onChangeText(event) {
    this.setState({ value: event });
  }

  componentDidMount() {
    // Customize button style
    this.setState({ props: this.props });

    // Applying theme on text input
    this.state.props = theme
      ? applyTheme(this.state.props, theme)
      : this.state.props;
  }

  // TODO: will add lodash and use its get method to avoid multiple conditions.
  // Will provide support for icon in text input using react-native-elements library.
  render() {
    const props = this.state.props;
    return (
      <View>
        <Input
          onChangeText={this.onChangeText}
          placeholder={props.label}
          containerStyle={props.containerStyle}
          value={this.state.value}
          selectionColor={props.selectionColor}
          inputContainerStyle={props.inputContainerStyle}
          rightIcon={props.rightIcon && {
            ...props.rightIcon.properties
          }}
          leftIcon={props.leftIcon && {
            ...props.leftIcon.properties
          }}
          leftIconContainerStyle={props.leftIcon && props.leftIcon.properties.leftIconContainerStyle && {
            ...props.leftIcon.properties.leftIconContainerStyle
          }}
          rightIconContainerStyle={props.rightIcon && props.rightIcon.properties.rightIconContainerStyle && {
            ...props.rightIcon.properties.rightIconContainerStyle
          }}
        />
      </View>
    );
  }
}

TextInput.propTypes = {
  label: PropTypes.string,
  selectionColor: PropTypes.string,
  inputContainerStyle: PropTypes.object,
  containerStyle: PropTypes.shape({
    backgroundColor: PropTypes.string,
    borderColor: PropTypes.string,
    color: PropTypes.string,
    borderWidth: PropTypes.number,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    left: PropTypes.number,
    right: PropTypes.number,
    marginTop: PropTypes.number,
  }),
  rightIcon: PropTypes.object,
  leftIcon: PropTypes.object
};


TextInput.defaultProps = {
  label: 'Enter input here',
  placeholderTextColor: 'pink',
  containerStyle: {
    backgroundColor: 'white',
    marginTop: 40,
  }
};
