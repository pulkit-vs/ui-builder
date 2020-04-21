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
import { applyThemeOnText } from "../theme/textTheme";
import { theme } from "../../App";

export default class TextComponent extends React.Component {

  componentWillMount() {

    // Applying theme on text
    this.props = theme ? applyThemeOnText(theme, this.props) : this.props
  }

  render() {

    const props = this.props;
    return (
      <View>
        <Text
          style={props.style}
        >
          {props.title}
        </Text>
      </View>
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
