import PropTypes from 'prop-types';
import React, {Component} from 'react';

import {Icon} from 'react-native-elements';
import {View} from 'react-native';
import {applyTheme} from '../utility/utils';
import {theme} from '../../App';

export default class IconComponent extends Component {
  constructor(props) {
    super(props);
    if (theme) {
      // Applying theme on components.
      props = applyTheme(props, theme);
    }
  }
  render() {
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
