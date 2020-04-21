import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Icon} from 'react-native-elements';
import {View, StyleSheet, Text} from 'react-native';
import {theme} from '../../App';
import {applyTheme} from '../utility/utils';

export default class IconComponent extends Component {
  render() {
    this.props = theme ? applyTheme(this.props, theme) : this.props;
    return (
      <View>
        <Icon
          name={this.props.name}
          size={this.props.size}
          type={this.props.iconType}
          onPress={this.props.onPress}
          iconStyle={this.props.iconStyle}
          raised={this.props.raised}
          containerStyle={this.props.containerStyle}
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
  onPress: () => console.log('Please add message on Icon click'),
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
