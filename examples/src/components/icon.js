import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Icon} from 'react-native-elements';
import {View, StyleSheet, Text} from 'react-native';
import {applyThemeOnIconStyle} from '../theme/iconTheme';
import {theme} from '../../App';

export default class IconComponent extends Component {
  constructor() {
    super();
  }

  render() {
    const props = this.props;
    const style = theme ? applyThemeOnIconStyle(props, theme) : props;
    return (
      <View>
        <Icon
          name={style.name}
          size={style.size}
          type={style.iconType}
          onPress={style.onPress}
          iconStyle={style.iconStyle}
          raised={style.raised}
          containerStyle={style.containerStyle}
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

//Defaultprops is to set the default props for the class.
IconComponent.defaultProps = {
  disabled: false,
  size: 30,
  type: 'material',
  iconStyle: {
    color: 'white',
    backgroundColor: 'black',
  },
  containerStyle: {
    padding: 0,
    margin: 0,
  },
};
