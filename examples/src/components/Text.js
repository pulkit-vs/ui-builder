import PropTypes from 'prop-types';
import React from 'react';
import {Text} from 'react-native';
import {NavigationContext} from '@react-navigation/native';

import {applyTheme} from '../utility/utils';
import {theme} from '../index';

export default class TextComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newProps: props,
    };
  }
  async componentDidMount() {
    // Applying theme on text

    if (theme) {
      const themeProp = applyTheme(this.props, theme);
      await this.setState({
        newProps: themeProp,
      });
    }

    if (this.state.newProps.onPress && this.state.newProps.onPress.navigation) {
      this.state.newProps.createScreen(this.state.newProps.onPress);
    }
  }
  static contextType = NavigationContext;
  render() {
    const navigation = this.context;
    const updatedProps = this.state.newProps;
    return (
      <>
        <Text
          style={updatedProps.style}
          onPress={
            this.state.newProps.onPress &&
            this.state.newProps.onPress.navigation
              ? () =>
                  navigation.navigate(this.state.newProps.onPress.screenName)
              : () => this.state.newProps.onPress()
          }>
          {updatedProps.title}
        </Text>
      </>
    );
  }
}

TextComponent.propTypes = {
  title: PropTypes.string,
  style: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number,
    fontWeight: PropTypes.string,
    marginTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    textAlign: PropTypes.string,
  }),
};

TextComponent.defaultProps = {
  title: 'Text',
  style: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 0,
    textAlign: 'center',
  },
  onPress() {
    alert('Please attach a method');
  },
};
