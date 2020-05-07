import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Card, Button, Icon} from 'react-native-elements';
import {View, ScrollView} from 'react-native';

import ButtonComponent from './button';
import CheckboxComponent from './Checkbox';
import IconComponent from './icon';
import ImageComponent from './image';
import TextComponent from './text';
import {applyTheme} from '../utility/utils';
import {theme} from '../index';

export default class CardComponent extends Component {
  constructor() {
    this.props = theme ? applyTheme(this.props, theme) : this.props;
  }
  render() {
    return (
      <Card
        containerStyle={this.props.containerStyle}
        dividerStyle={this.props.dividerStyle}
        title={this.props.title}
        titleStyle={this.props.titleStyle}
        wrapperStyle={this.props.wrapperStyle}>
        <ScrollView>{this.props.childrens}</ScrollView>
      </Card>
    );
  }
}

CardComponent.propTypes = {
  title: PropTypes.string,
  containerStyle: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number,
    marginTop: PropTypes.number,
    padding: PropTypes.number,
    textAlign: PropTypes.string,
  }),
  wrapperStyle: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number,
    marginTop: PropTypes.number,
    padding: PropTypes.number,
    textAlign: PropTypes.string,
  }),
  dividerStyle: PropTypes.shape({
    borderColor: PropTypes.string,
    borderWidth: PropTypes.number,
    padding: PropTypes.number,
  }),
};

CardComponent.defaultProps = {
  containerStyle: {
    backgroundColor: 'white',

    height: 300,
    width: 200,
  },
  titleStyle: {
    fontSize: 20,
  },
};
