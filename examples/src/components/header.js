import PropTypes from 'prop-types';
import React from 'react';
import { Header, Icon } from 'react-native-elements';
import { View } from 'react-native';
import { applyThemeOnHeaderStyle } from '../theme/headerTheme';
import { theme } from '../../App';

export default class HeaderComponent extends React.Component {
  render() {

    alert(JSON.stringify(this.props.leftComponent))
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
                name={style.leftComponent.name}
                type={style.leftComponent.type}
                size={style.leftComponent.size}
                color={style.leftComponent.color}
              />
            }
          }
          centerComponent={style.centerComponent}
          rightComponent={
           <Icon
              name={style.rightComponent.name}
              type={style.rightComponent.type}
              size={style.rightComponent.size}
              color={style.rightComponent.color}
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
    // text: 'MY TITLE',
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
