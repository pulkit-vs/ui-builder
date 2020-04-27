import PropTypes from 'prop-types';
import React from 'react';
import {View, Image} from 'react-native';

import {applyTheme} from '../utility/utils';
import {theme} from '../index';

export default class ImageComponent extends React.Component {
  constructor(props) {
    super(props);
    if (theme) {
      props = applyTheme(this.props, theme);
    }
  }
  render() {
    return (
      <View>
        <Image
          accessibilityLabel={this.props.accessibilityLabel}
          blurRadius={this.props.blurRadius}
          capInsets={this.props.capInsets}
          fadeDuration={this.props.fadeDuration}
          resizeMethod={this.props.resizeMethod}
          resizeMode={this.props.resizeMode}
          style={this.props.style}
          source={{
            uri: this.props.uri,
          }}
        />
      </View>
    );
  }
}
ImageComponent.propTypes = {
  blurRadius: PropTypes.number,
  fadeDuration: PropTypes.number,
  resizeMethod: PropTypes.string,
  resizeMode: PropTypes.string,
  style: PropTypes.shape({
    borderColor: PropTypes.string,
    borderRadius: PropTypes.number,
    borderWidth: PropTypes.number,
    height: PropTypes.number,
    opacity: PropTypes.number,
    overflow: PropTypes.strig,
    width: PropTypes.number,
  }),
};
ImageComponent.defaultProps = {
  blurRadius: 0,
  capInsets: {},
  fadeDuration: 0,
  resizeMethod: 'auto',
  resizeMode: 'cover',
  style: {height: 100, width: 100, borderColor: 'red'},
};
