import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {CheckBox, Icon, colors} from 'react-native-elements';

import {applyThemeOnCheckboxStyle} from '../theme/checkboxTheme';
import {theme} from '../../App';
import PropTypes from 'prop-types';

export default class CheckboxComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      color: '',
    };
  }

  componentDidMount() {
    let colorCopy;
    if (this.props.checked === true) {
      colorCopy = this.props.titleStyle.checkedColor
        ? this.props.titleStyle.checkedColor
        : this.props.titleStyle.color;
    } else {
      colorCopy = this.props.titleStyle.uncheckedColor
        ? this.props.titleStyle.uncheckedColor
        : this.props.titleStyle.color;
    }
    // to set the initial state of checkbox component given by user and color of text content
    this.setState({
      checked: this.props.checked,
      color: colorCopy,
    });
  }
  handleChange = () => {
    const initialValue = this.state.checked;
    const checkedColor = this.props.titleStyle.checkedColor
      ? this.props.titleStyle.checkedColor
      : this.props.titleStyle.color;
    const uncheckedColor = this.props.titleStyle.uncheckedColor
      ? this.props.titleStyle.uncheckedColor
      : this.props.titleStyle.color;
    // console.log('handleChnage', this.props.titleStyle);
    if (initialValue === true) {
      this.setState({
        checked: !this.state.checked,
        color: uncheckedColor,
      });
    }
    if (initialValue !== true) {
      this.setState({
        checked: !this.state.checked,
        color: checkedColor,
      });
    }
  };
  render() {
    let props = this.props;
    //console.log(this.state);
    props.titleStyle.color = this.state.color
      ? this.state.color
      : props.titleStyle.color;
    props = theme ? applyThemeOnCheckboxStyle(props, theme) : props;

    return (
      <View>
        <CheckBox
          checked={this.state.checked}
          title={props.title}
          onPress={this.handleChange}
          containerStyle={props.containerStyle}
          textStyle={props.titleStyle}
          disabled={props.disabled}
          uncheckedColor={props.checkboxStyle.color}
          checkedColor={props.checkboxStyle.color}
          iconRight={props.checkboxStyle.iconRight}
          checkedIcon={props.checkboxStyle.checkedIcon}
          uncheckedIcon={props.checkboxStyle.uncheckedIcon}
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
    borderWidth: PropTypes.number,
    borderRadius: PropTypes.number,
  }),
  checkboxStyle: PropTypes.shape({
    uncheckedColor: PropTypes.string,
    checkedColor: PropTypes.string,
  }),
};

// Defaultprops is to set the default props for the class.
CheckboxComponent.defaultProps = {
  title: 'Checkbox',
  disabled: false,
  iconRight: false,
  checkboxStyle: {
    checkedColor: 'red',
    uncheckedColor: 'black',
  },
  titleStyle: {
    color: 'black',
    fontFamily: 'arial',
    fontSize: 18,
  },
  containerStyle: {
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: 'white',
    borderColor: 'black',
  },
};
