/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import PropTypes from "prop-types";
import React from "react";
import { Text } from "react-native";
import { NavigationContext } from "@react-navigation/native";

import { applyTheme } from "../utility/utils";
import { theme } from "../../index";

export default class TextComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      properties: {},
    };
  }
  static contextType = NavigationContext;

  componentDidMount() {

    // Creating Screen for text onPress
    this.props.onPress && this.props.onPress.navigation
      ? this.props.createScreen(this.props.onPress)
      : null;

    this.setState({properties: this.props});

    // Applying theme on text
    if (theme) {
      this.props = applyTheme(this.props, theme);
    }
  }

  render() {
    const navigation = this.context;
    return (
      <>
        <Text
          style={this.state.properties.style}
          onPress={
            this.props.onPress && this.props.onPress.navigation
              ? () => navigation.navigate(this.props.onPress.screenName)
              : () => this.props.onPress()
          }
        >
          {this.state.properties.title}
        </Text>
      </>
    );
  }
}

TextComponent.propTypes = {
  title: PropTypes.string,
  style: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number,
    fontWeight: PropTypes.string,
    marginTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    textAlign: PropTypes.string,
  }),
};

TextComponent.defaultProps = {
  title: 'Text',
  style: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 0,
    textAlign: 'center',
  },
  onPress() {
    alert('Please attach a method');
  },
};
