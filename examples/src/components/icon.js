import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import PropTypes from 'prop-types';
import {theme} from '../../App';
import {applyThemeOnIconStyle} from '../theme/iconTheme';
export default class IconComponent extends Component {
  render() {
    //  console.log(this.props);
    props = this.props;
    props = theme ? applyThemeOnIconStyle(props, theme) : props;
    return (
      <View>
        <Icon
          name={'g-translate'}
          size={props.size}
          type={props.iconType}
          color={props.color}
          onPress={props.onPress}
          containerStyle={props.containerStyle}
          iconStyle={props.iconStyle}
        />
      </View>
    );
  }
}
IconComponent.propTypes = {
  size: PropTypes.number,
  name: PropTypes.string,
  color: PropTypes.string,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  containerStyle: PropTypes.shape({
    backgroundColor: PropTypes.string,
  }),
};

// Defaultprops is to set the default props for the class.
IconComponent.defaultProps = {
  disabled: false,
  size: 30,
  type: 'material',
  raised: true,
  iconStyle: {
    color: 'red',
  },
  containerStyle: {
    padding: 0,
    margin: 0,
  },
};
