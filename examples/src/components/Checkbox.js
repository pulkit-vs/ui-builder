import React, {Component} from 'react';
import {View} from 'react-native';
import {CheckBox, Icon, colors} from 'react-native-elements';

import {applyTheme} from '../utility/utils';
import {theme} from '../../App';
import PropTypes from 'prop-types';

export default class CheckboxComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
    if (theme) {
      props = theme ? applyTheme(props, theme) : props;
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
    if (this.state.checked) {
      this.props.titleStyle.color = this.props.titleStyle.checkedColor
        ? this.props.titleStyle.checkedColor
        : this.props.titleStyle.color;
    } else {
      this.props.titleStyle.color = this.props.titleStyle.uncheckedColor
        ? this.props.titleStyle.uncheckedColor
        : this.props.titleStyle.color;
    }

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
  title: 'checkbox',
  disabled: false,
  iconRight: false,
  checkboxStyle: {
    checkedColor: 'black',
    uncheckedColor: 'black',
  },
  titleStyle: {
    color: 'blue',
    fontFamily: 'arial',
    fontSize: 18,
  },
  containerStyle: {
    //borderWidth: '80%',
    borderRadius: 20,
    backgroundColor: 'red',

    borderColor: 'black',
  },
};
