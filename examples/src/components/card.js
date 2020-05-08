import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Card} from 'react-native-elements';
import {ScrollView, Text} from 'react-native';

import {applyTheme} from '../utility/utils';
import {theme} from '../index';

export default class CardComponent extends Component {
  constructor(props) {
    super(props);
    if (theme) {
      props = theme ? applyTheme(props, theme) : props;
    }
  }
  render() {
    return (
      <Card
        containerStyle={this.props.containerStyle}
        dividerStyle={this.props.dividerStyle}
        title={this.props.title}
        titleStyle={this.props.titleStyle}
        wrapperStyle={this.props.wrapperStyle}>
        <ScrollView>
          {this.props.childrens.size === 0 ? (
            <Text>Add</Text>
          ) : (
            this.props.childrens
          )}
        </ScrollView>
      </Card>
    );
  }
}

CardComponent.propTypes = {
  title: PropTypes.string,
  containerStyle: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number,
    marginTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    padding: PropTypes.number,
    textAlign: PropTypes.string,
  }),
  wrapperStyle: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number,
    marginTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    padding: PropTypes.number,
    textAlign: PropTypes.string,
  }),
  dividerStyle: PropTypes.shape({
    borderColor: PropTypes.string,
    borderWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
