import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {CheckBox, Icon, colors} from 'react-native-elements';

import {applyThemeOnCheckboxStyle} from '../theme';
import {theme} from '../../App';
import PropTypes from 'prop-types';

export default class CheckboxComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  componentDidMount() {
    // Applying theme on button style
    this.setState({
      checked: this.props.checked,
    });
  }
  render() {
    let props = this.props;

    props = theme ? applyThemeOnCheckboxStyle(props, theme) : props;

    return (
      <View>
        <CheckBox
          checked={this.state.checked}
          title={props.title}
          onPress={() => this.setState({checked: !this.state.checked})}
          containerStyle={props.containerStyle}
          textStyle={props.titleStyle}
          disabled={props.disabled}
          uncheckedColor={props.checkboxStyle.color}
          checkedColor={props.checkboxStyle.color}
          iconRight={props.checkboxStyle.iconRight}
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
    left: PropTypes.number,
    right: PropTypes.number,
    width: PropTypes.string,
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
    checkedColor: 'black',
    uncheckedColor: 'black',
  },
  titleStyle: {
    color: 'blue',
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
