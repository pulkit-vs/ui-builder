import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Icon} from 'react-native-elements';
import {View, StyleSheet, Text} from 'react-native';
import {applyThemeOnIconStyle} from '../theme/iconTheme';
import {theme} from '../../App';

// TODO :remove warnings laters
export default class IconComponent extends Component {
  constructor() {
    super();
  }

  render() {
    const style = {
      marginRight: 40,
      alignSelf: 'flex-end',
      marginTop: 190,
    };
    props = this.props;
    props = theme ? applyThemeOnIconStyle(props, theme) : props;
    return (
      <View>
        <Icon
          name={props.name}
          size={props.size}
          type={props.iconType}
          onPress={props.onPress}
          iconStyle={props.iconStyle}
          raised={props.raised}
          containerStyle={props.containerStyle}
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
