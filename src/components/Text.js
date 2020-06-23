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

  componentDidMount() {
    // Applying theme on text
    if (theme) {
      this.props = applyTheme(this.props, theme);
    }

    if (this.props.onPress && this.props.onPress.navigation) {
      this.props.createScreen(this.props.onPress)
    }
  }
  static contextType = NavigationContext;
  render() {
    const navigation = this.context;
    const props = this.props;
    return (
      <>
        <Text
          style={props.style}
          onPress={
            this.props.onPress && this.props.onPress.navigation
              ? () => navigation.navigate(this.props.onPress.screenName)
              : () => this.props.onPress()
          }
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
