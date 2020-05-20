/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import Icon from "react-native-vector-icons/FontAwesome";
import PropTypes from "prop-types";
import React from "react";
import { Button } from "react-native-elements";
import { NavigationContext } from "@react-navigation/native";
import { View } from "react-native";

import { applyTheme } from "../utility/utils";
import { shapeStyles } from "../style/buttonStyle";
import { theme } from "../../index";

export default class ButtonComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: {},
    };
  }
  static contextType = NavigationContext;

  async componentDidMount() {
    // Creating Screen for Button onPress
    this.props.onPress && this.props.onPress.navigation
      ? this.props.createScreen(this.props.onPress)
      : null;
    await this.setState({ properties: this.props });

    // Customizing button style
    const shapeStyle = this.props.showCircle
      ? { ...shapeStyles.circleShapeView }
      : this.props.showSquare
      ? { ...shapeStyles.squareShapeView }
      : this.props.showRectangle
      ? { ...shapeStyles.rectangleShapeView }
      : null;

    if (shapeStyle) {
      await this.setState({
        properties: {
          ...this.state.properties,
          buttonStyle: { ...this.state.properties.buttonStyle, ...shapeStyle },
        },
      });
    }

    // Applying theme on button style
    if (theme) {
      await this.setState({
        properties: applyTheme(this.state.properties, theme),
      });

      if (this.props.icon) {
        await this.setState({
          properties: {
            ...this.state.properties,
            icon: applyTheme(this.state.properties.icon, theme),
          },
        });
      }
    }
  }

  render() {
    const navigation = this.context;
    return (
      <View>
        <Button
          title={this.state.properties.title}
          onPress={() => {
            this.props.onPress && this.props.onPress.navigation
              ? navigation.navigate(this.props.onPress.screenName)
              : this.props.onPress();
          }}
          disabled={this.state.properties.disabled}
          buttonStyle={this.state.properties.buttonStyle}
          titleStyle={this.state.properties.titleStyle}
          type={this.state.properties.buttonType}
          loading={this.state.properties.loading}
          icon={<Icon {...this.state.properties.icon} />}
        />
      </View>
    );
  }
}

// To run typechecking on the props for a component, for validating a props
ButtonComponent.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  disabled: PropTypes.bool,
  buttonStyle: PropTypes.shape({
    backgroundColor: PropTypes.string,
    left: PropTypes.number,
    right: PropTypes.number,
    width: PropTypes.string,
    borderColor: PropTypes.string,
    borderWidth: PropTypes.number,
    marginTop: PropTypes.number,
  }),
};

// Defaultprops is to set the default props for the class.
ButtonComponent.defaultProps = {
  title: "Button",
  onPress: () => console.log("Please attach a method to this component"),
  disabled: false,
  buttonStyle: {
    backgroundColor: "yellow",
    borderColor: "yellow",
  },
  titleStyle: {
    // color: 'blue',
    fontFamily: "arial",
    fontSize: 40,
  },
  type: "solid",
  loading: false,
};
