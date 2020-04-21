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

import { applyTheme } from '../utility/utils';
import { theme } from '../../App';

export default class Input extends React.Component {
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

  componentWillMount() {
    // Customize button style
    this.state.props = { ...this.props };

    // Applying theme on text input
    this.state.props = theme
      ? applyTheme(this.state.props, theme)
      : this.state.props;
  }

  // Will provide support for icon in text input using react-native-elements library.
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
    marginTop: PropTypes.number,
  }),
};

Input.defaultProps = {
  label: 'name',
  selectionColor: 'green',
  placeholderTextColor: 'pink',
  style: {
    backgroundColor: 'pink',
    borderColor: 'black',
    fontFamily: 'arial',
    color: 'black',
  },
};
