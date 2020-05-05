import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Icon} from 'react-native-elements';
import {NavigationContext} from '@react-navigation/native';
import {View} from 'react-native';

import {applyTheme} from '../utility/utils';
import {theme} from '../index';

export default class IconComponent extends Component {
  componentDidMount() {
    // Creating Screen for icon onPress

    if (this.props.onPress) {
      this.props.onPress.navigation
        ? this.props.createScreen(this.props.onPress)
        : null;
    }
  }

  static contextType = NavigationContext;

  render() {
    this.props = theme ? applyTheme(this.props, theme) : this.props;
    const navigation = this.context;
    return (
      <View>
        <Icon
          name={this.props.name}
          onPress={
            this.props.onPress.navigation
              ? () => navigation.navigate(this.props.onPress.screenName)
              : this.props.onPress
          }
          size={this.props.size}
          type={this.props.iconType}
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
    backgroundColor: 'black',
    color: 'white',
  },
  containerStyle: {
    margin: 0,
    padding: 0,
  },
};
