import React from 'react';
import {View} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {applyThemeOnHeaderStyle} from '../theme/headerTheme';
import {theme} from '../../App';
import PropTypes from 'prop-types';

export default class HeaderComponent extends React.Component {

  componentDidMount() {
    // Applying theme on button style
  }

  render() {
    let style = theme
      ? applyThemeOnHeaderStyle(this.props, theme)
      : this.props;

    let leftComponent = {...style.leftComponent};
    let rightComponent = {...style.rightComponent};

    return (
      <View>
        <Header
          containerStyle={style.containerStyle}
          placement={style.placement}
          leftComponent={
            <Icon
              name={leftComponent.name}
              type={leftComponent.type}
              size={leftComponent.size}
              color={leftComponent.color}
            />
          }
          centerComponent={style.centerComponent}
          rightComponent={
            <Icon
              name={rightComponent.name}
              type={rightComponent.type}
              size={rightComponent.size}
              color={rightComponent.color}
            />
          }
          leftContainerStyle={style.leftContainerStyle}
          centerContainerStyle={style.centerContainerStyle}
          rightContainerStyle={style.rightContainerStyle}
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
