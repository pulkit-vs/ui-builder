/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import PropTypes from 'prop-types';
import React from 'react';
import { View, Text } from 'react-native';
import { theme } from "../../App";
import { handleTheme } from "../utility/utils";

export default class TextComponent extends React.Component {

  componentWillMount() {

    // Applying theme on text
    this.props = theme ? handleTheme(theme, this.props) : this.props
  }

  render() {

    const props = this.props;
    return (
      <>
        <Text
          style={props.style}
        >
          {props.title}
        </Text>
      </>
    );
  }
}

TextComponent.propTypes = {

  title: PropTypes.string,
  style: PropTypes.shape({
    fontSize: PropTypes.number,
    fontWeight: PropTypes.string,
    textAlign: PropTypes.string,
    marginTop: PropTypes.number,
    color: PropTypes.string
  })
}

TextComponent.defaultProps = {
  title: 'Text',
  style: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 0
  }

}
