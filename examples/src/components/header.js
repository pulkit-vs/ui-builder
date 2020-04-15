import PropTypes from 'prop-types';
import React from 'react';
import { Header, Icon } from 'react-native-elements';
import { View } from 'react-native';
import { applyThemeOnHeaderStyle } from '../theme/headerTheme';
import { theme } from '../../App';

export default class HeaderComponent extends React.Component {
  render() {

    let style = theme ? applyThemeOnHeaderStyle(this.props, theme) : this.props;

    return (
      <View>
        <Header
          containerStyle={style.containerStyle}
          placement={style.placement}
          leftComponent={
            {
              ...style.leftComponent,
              ...style.leftComponent.icon && <Icon
                name={style.leftComponent.icon.name}
                type={style.leftComponent.icon.type}
                size={style.leftComponent.icon.size}
                color={style.leftComponent.icon.color}
              />
            }
          }
          centerComponent={
            {
              ...style.centerComponent,
              ...style.centerComponent.icon && <Icon
                name={style.centerComponent.icon.name}
                type={style.centerComponent.icon.type}
                size={style.centerComponent.icon.size}
                color={style.centerComponent.icon.color}
              />
            }
          }
          rightComponent={
            {
              ...style.rightComponent,
              ...style.rightComponent.icon && <Icon
                name={style.rightComponent.icon.name}
                type={style.rightComponent.icon.type}
                size={style.rightComponent.icon.size}
                color={style.rightComponent.icon.color}
              />
            }
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
    // text: 'MY TITLE',
    style: {
      color: 'green',
    },
  },
  rightComponent: {
    // name: 'ios-home',
    // type: 'ionicon',
    // size: 40,
    // color: 'green',
  },
  containerStyle: {
    backgroundColor: 'blue',
    justifyContent: 'space-around',
    borderColor: 'black',
    borderWidth: 0,
    height: 70,
  },
};
