import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {Card, Button, Icon} from 'react-native-elements';

import TextComponent from './text';
import ButtonComponent from './button';
import CheckboxComponent from './Checkbox';
import IconComponent from './icon';
import ImageComponent from './image';
import {theme} from '../index';
import {applyTheme} from '../utility/utils';

export default class CardComponent extends Component {
  render() {
    //  this.props = theme ? applyTheme(this.props, theme) : this.props;
    console.log('props of card', this.props);
    return (
      <Card
        title={this.props.title}
        titleStyle={this.props.titleStyle}
        wrapperStyle={this.props.wrapperStyle}
        containerStyle={this.props.containerStyle}
        dividerStyle={this.props.dividerStyle}>
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
    textAlign: PropTypes.string,
    padding: PropTypes.number,
  }),
  wrapperStyle: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number,
    marginTop: PropTypes.number,
    textAlign: PropTypes.string,
    padding: PropTypes.number,
  }),
  dividerStyle: PropTypes.shape({
    borderColor: PropTypes.string,
    padding: PropTypes.number,
    borderWidth: PropTypes.number,
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
