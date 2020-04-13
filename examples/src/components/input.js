/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import PropTypes from 'prop-types';
import React from 'react';
import { View, TextInput } from 'react-native';
import { applyThemeOnTextInputStyle } from "../theme/textInputTheme";
import { theme } from "../../App";

export default class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      props: {}
    };

    //Function Binders
    this.onChangeText = this.onChangeText.bind(this);
  }

  onChangeText(event) {
    this.setState({ value: event });
  }

  componentWillMount() {

    // Customize button style
    this.state.props = { ...this.props };

    // Applying theme on text input
    this.state.props = theme ? applyThemeOnTextInputStyle(theme, this.state.props) : this.state.props
  }

  render() {

    const props = this.state.props;
    return (
      <View>
        <TextInput
          onChangeText={this.onChangeText}
          placeholder={props.label}
          selectionColor={props.style.selectionColor}
          style={props.style}
          value={this.state.value}
          placeholderTextColor={props.placeholderTextColor}
        />
      </View>
    );
  }
}

Input.propTypes = {

  label: PropTypes.string,
  selectionColor: PropTypes.string,
  style: PropTypes.shape({
    backgroundColor: PropTypes.string,
    borderColor: PropTypes.string,
    fontFamily: PropTypes.string,
    color: PropTypes.string,
    borderWidth: PropTypes.number,
    width: PropTypes.string,
    left: PropTypes.number,
    right: PropTypes.number,
    marginTop: PropTypes.number
  })
}

Input.defaultProps = {
  label: 'name',
  selectionColor: 'green',
  placeholderTextColor: 'pink',
  style: {
    backgroundColor: 'pink',
    borderColor: 'black',
    fontFamily: 'arial',
    color: "black"
  }
}
