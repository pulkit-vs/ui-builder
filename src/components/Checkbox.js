import React, { Component } from "react";
import { View } from "react-native";
import { CheckBox, Icon, colors } from "react-native-elements";

import { applyTheme } from "../utility/utils";
import { theme } from "../../index";
import PropTypes from "prop-types";

export default class CheckboxComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
    if (theme) {
      props = applyTheme(props, theme);
    }
  }

  componentDidMount() {
    // to set the initial state of checkbox component given by user and color of text content
    this.setState({
      checked: this.props.checked,
    });
  }
  handleCheckboxStatus = () => {
    this.setState({
      checked: !this.state.checked,
    });
  };
  render() {
    if (this.state.checked && this.props.titleStyle.checkedColor) {
      this.props.titleStyle.color = this.props.titleStyle.checkedColor;
    }
    if (!this.state.checked && this.props.titleStyle.uncheckedColor) {
      this.props.titleStyle.color = this.props.titleStyle.uncheckedColor;
    }

    return (
      <View>
        <CheckBox
          checked={this.state.checked}
          checkedColor={this.props.checkboxStyle.color}
          checkedIcon={this.props.checkboxStyle.checkedIcon}
          containerStyle={this.props.containerStyle}
          disabled={this.props.disabled}
          iconRight={this.props.checkboxStyle.iconRight}
          onPress={this.handleCheckboxStatus}
          textStyle={this.props.titleStyle}
          title={this.props.title}
          uncheckedColor={this.props.checkboxStyle.color}
          uncheckedIcon={this.props.checkboxStyle.uncheckedIcon}
        />
      </View>
    );
  }
}

CheckboxComponent.propTypes = {
  title: PropTypes.string,
  disabled: PropTypes.bool,
  containerStyle: PropTypes.shape({
    backgroundColor: PropTypes.string,
    borderColor: PropTypes.string,
    borderWidth: PropTypes.string,
    borderRadius: PropTypes.number,
  }),
  checkboxStyle: PropTypes.shape({
    uncheckedColor: PropTypes.string,
    checkedColor: PropTypes.string,
  }),
};

// Defaultprops is to set the default props for the class.
CheckboxComponent.defaultProps = {
  title: "checkbox",
  disabled: false,
  iconRight: false,
  checkboxStyle: {
    checkedColor: "black",
    uncheckedColor: "black",
  },
  titleStyle: {
    color: "blue",
    fontFamily: "arial",
    fontSize: 18,
  },
  containerStyle: {
    //borderWidth: '80%',
    borderRadius: 20,
    backgroundColor: "red",

    borderColor: "black",
  },
};
