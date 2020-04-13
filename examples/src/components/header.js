import React from 'react';
import {View} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {applyThemeOnHeaderStyle} from '../theme';
import {theme} from '../../App';
import PropTypes from 'prop-types';

export default class HeaderComponent extends React.Component {
  state = {
    props: {},
  };
  componentWillMount() {
    this.state.props = {...this.props};
    // Applying theme on header style
    this.state.props = theme
      ? applyThemeOnHeaderStyle(this.state.props, theme)
      : this.state.props;
  }
  render() {
    let style = this.props;
    return (
      <View>
        <Header
          containerStyle={this.state.props.containerStyle}
          placement={style.placement}
          leftComponent={
            <Icon
              name={style.leftComponent.name}
              type={style.leftComponent.type}
              size={style.leftComponent.size}
              color={style.leftComponent.color}
            />
          }
          centerComponent={this.state.props.centerComponent}
          rightComponent={
            <Icon
              name={style.rightComponent.name}
              type={style.rightComponent.type}
              size={style.rightComponent.size}
              color={style.rightComponent.color}
            />
          }
          leftContainerStyle={this.props.leftContainerStyle}
          centerContainerStyle={this.props.centerContainerStyle}
          rightContainerStyle={this.props.rightContainerStyle}
        />
      </View>
    );
  }
}
HeaderComponent.propTypes = {
  leftComponent: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.number,
    color: PropTypes.string,
  }),
  rightComponent: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.number,
    color: PropTypes.string,
  }),
  placement: PropTypes.string,
  containerStyle: PropTypes.shape({
    color: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    backgroundColor: PropTypes.string,
    borderWidth: PropTypes.number,
    borderColor: PropTypes.string,
  }),
};

HeaderComponent.defaultProps = {
  placement: 'center',

  leftComponent: {
    name: 'ios-menu',
    type: 'ionicon',
    size: 40,
    color: 'green',
  },
  centerComponent: {
    text: 'MY TITLE',
    style: {
      color: 'green',
    },
  },
  rightComponent: {
    name: 'ios-home',
    type: 'ionicon',
    size: 40,
    color: 'green',
  },
  containerStyle: {
    backgroundColor: 'blue',
    justifyContent: 'space-around',
    borderColor: 'black',
    borderWidth: 0,
    height: 70,
  },
};
