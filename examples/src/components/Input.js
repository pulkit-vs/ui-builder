/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import PropTypes from 'prop-types';
import React from 'react';
import { Input } from 'react-native-elements';

import { applyTheme, convertAndAppend } from '../utility/utils';
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
    const result =
      <Input
        onChangeText={this.onChangeText}
        placeholder={props.label}
        containerStyle={props.containerStyle}
        value={this.state.value}
        selectionColor={props.selectionColor}
        inputContainerStyle={props.inputContainerStyle}
        rightIcon={
          props.rightIcon && {
            ...props.rightIcon.properties,
          }
        }
        leftIcon={
          props.leftIcon && {
            ...props.leftIcon.properties,
          }
        }
        leftIconContainerStyle={
          props.leftIcon &&
          props.leftIcon.properties.leftIconContainerStyle && {
            ...props.leftIcon.properties.leftIconContainerStyle,
          }
        }
        rightIconContainerStyle={
          props.rightIcon &&
          props.rightIcon.properties.rightIconContainerStyle && {
            ...props.rightIcon.properties.rightIconContainerStyle,
          }
        }
      />
    convertAndAppend(result, `Input`, '/ui-builder.js')
    return result
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
  // WILL REVISIT
  rightIcon: PropTypes.shape({
    properties: PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string,
      size: PropTypes.number,
      type: PropTypes.string,
      rightIconContainerStyle: PropTypes.shape({
        properties: PropTypes.shape({
          backgroundColor: PropTypes.string,
          borderColor: PropTypes.string,
          borderWidth: PropTypes.number,
          left: PropTypes.number
        }),
      }),
    }),
  }),
  leftIcon: PropTypes.object,
};

TextInput.defaultProps = {
  label: 'Enter input here',
  placeholderTextColor: 'pink',
  containerStyle: {
    backgroundColor: 'white',
    marginTop: 40,
  },
};
