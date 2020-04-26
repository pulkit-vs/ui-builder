import PropTypes from "prop-types";
import React, { Component } from "react";
import { CheckBox, Icon, colors } from "react-native-elements";
import { View } from "react-native";
import { applyTheme } from "../utility/utils";
import { theme } from "../../index";

export default class CheckboxComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      color: "",
    };
    if (theme) {
      // Applying theme on components.
      props = applyTheme(props, theme);
    }
  }

  componentDidMount() {
    let updatedTextColor;
    if (this.props.checked) {
      updatedTextColor = this.props.titleStyle.checkedColor
        ? this.props.titleStyle.checkedColor
        : this.props.titleStyle.color;
    } else {
      updatedTextColor = this.props.titleStyle.uncheckedColor
        ? this.props.titleStyle.uncheckedColor
        : this.props.titleStyle.color;
    }
    // to set the initial state of checkbox component given by user and color of text content
    this.setState({
      checked: this.props.checked,
      color: updatedTextColor,
    });
  }
  // this method is used to change the state of checkbox from unchecked -> checked and vice versa.

  handleCheckboxStatus = () => {
    const checkedColor = this.props.titleStyle.checkedColor
      ? this.props.titleStyle.checkedColor
      : this.props.titleStyle.color;

    const uncheckedColor = this.props.titleStyle.uncheckedColor
      ? this.props.titleStyle.uncheckedColor
      : this.props.titleStyle.color;

    if (this.state.checked) {
      this.setState({
        checked: !this.state.checked,
        color: uncheckedColor,
      });
    } else {
      this.setState({
        checked: !this.state.checked,
        color: checkedColor,
      });
    }
  };

  render() {
    props.titleStyle.color = this.state.color
      ? this.state.color
      : props.titleStyle.color;

    return (
      <View>
        <CheckBox
          checked={this.state.checked}
          title={this.props.title}
          onPress={this.handleCheckboxStatus}
          containerStyle={this.props.containerStyle}
          textStyle={this.props.titleStyle}
          disabled={this.props.disabled}
          uncheckedColor={this.props.checkboxStyle.color}
          checkedColor={this.props.checkboxStyle.color}
          iconRight={this.props.checkboxStyle.iconRight}
          checkedIcon={this.props.checkboxStyle.checkedIcon}
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
