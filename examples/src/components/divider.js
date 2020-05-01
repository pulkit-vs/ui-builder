/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import PropTypes from 'prop-types';
import React from 'react';
import { Divider } from 'react-native-elements';

import { applyTheme } from '../utility/utils';
import { theme } from '../index';

export default class DividerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: {},
    };
  }

  async componentDidMount() {

    await this.setState({ properties: this.props });
    // Applying theme on divider style
    if (theme) {
      await this.setState({
        properties: applyTheme(this.props, theme),
      });
    }
  }

  render() {
    return (
      <Divider style={this.state.properties.style} />
    );
  }
}

DividerComponent.propTypes = {
  style: {
    borderWidth: PropTypes.number,
    marginTop: PropTypes.number,
    borderColor: PropTypes.string
  }
};

DividerComponent.defaultProps = {
  style: {
    borderWidth: 1,
    marginTop: 50,
    borderColor: 'green'
  }
};