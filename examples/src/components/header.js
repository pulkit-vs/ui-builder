import PropTypes from 'prop-types';
import React from 'react';
import { Header } from 'react-native-elements';
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
          leftComponent={{
            ...style.leftComponent,
            ...style.leftComponent.icon,
          }}
          centerComponent={{
            ...style.centerComponent,
            ...style.centerComponent.icon,
          }}
          rightComponent={{
            ...style.rightComponent,
            ...style.rightComponent.icon,
          }}
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
    icon: PropTypes.shape({
      icon: PropTypes.string,
      type: PropTypes.string,
      size: PropTypes.number,
      color: PropTypes.string,
    }),
    text: PropTypes.string,
    style: PropTypes.shape({
      color: PropTypes.string,
      fontSize: PropTypes.number,
    }),
  }),
  rightComponent: PropTypes.shape({
    icon: PropTypes.shape({
      icon: PropTypes.string,
      type: PropTypes.string,
      size: PropTypes.number,
      color: PropTypes.string,
    }),
    text: PropTypes.string,
    style: PropTypes.shape({
      color: PropTypes.string,
      fontSize: PropTypes.number,
    }),
  }),
  centerComponent: PropTypes.shape({
    icon: PropTypes.shape({
      icon: PropTypes.string,
      type: PropTypes.string,
      size: PropTypes.number,
      color: PropTypes.string,
    }),
    text: PropTypes.string,
    style: PropTypes.shape({
      color: PropTypes.string,
      fontSize: PropTypes.number,
    }),
  }),
  placement: PropTypes.string,
  containerStyle: PropTypes.shape({
    color: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    backgroundColor: PropTypes.string,
    borderWidth: PropTypes.number,
    borderColor: PropTypes.string,
    borderBottomWidth: PropTypes.number,
    borderBottomColor: PropTypes.string,
  }),
};

HeaderComponent.defaultProps = {
  placement: 'center',

  leftComponent: { style: { color: 'red' } },
  centerComponent: { style: { color: 'red' } },
  rightComponent: { style: { color: 'red' } },
  containerStyle: {
    backgroundColor: 'blue',
    justifyContent: 'space-around',
    borderColor: 'black',
    borderWidth: 0,
    height: 70,
  },
};
