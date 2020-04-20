import PropTypes from 'prop-types';
import React from 'react';
import {Header, Icon, Input} from 'react-native-elements';
import {View, Text} from 'react-native';
import {
  applyThemeOnHeaderStyle,
  applyThemeOnText,
  applyThemeOnIcon,
  applyThemeOnInput,
} from '../theme/headerTheme';
import {theme} from '../../App';
import {applyThemeOnTextInputStyle} from '../theme/textInputTheme';

export default class HeaderComponent extends React.Component {
  valueOfComponent = ['leftComponent', 'centerComponent', 'rightComponent'];

  render() {
    // Map for access left , right and center component JSON
    this.valueOfComponent = this.valueOfComponent.map((component, index) =>
      this.props[component].childrens ? (
        <View
          keys={index}
          style={
            this.props[component].childrens[0].type == 'view'
              ? this.props[component].childrens[0].style
              : {}
          }>
          {this.props[component].childrens.map((item, index) => {
            if (item.type == 'icon') {
              const styleOfIcon = theme
                ? applyThemeOnIcon(item.properties, theme)
                : item.properties;

              return (
                <Icon
                  keys={index}
                  name={styleOfIcon.name}
                  color={styleOfIcon.color}
                  size={styleOfIcon.size}
                />
              );
            } else if (item.type == 'text') {
              const styleOfText = theme
                ? applyThemeOnText(item.properties, theme)
                : item.properties;
              return (
                <Text keys={index} style={styleOfText.style}>
                  {styleOfText.title}
                </Text>
              );
            } else if (item.type == 'input') {
              const styleOfInput = theme
                ? applyThemeOnInput(item.properties, theme)
                : item.properties;
              return (
                <Input
                  keys={index}
                  containerStyle={styleOfInput.containerStyle}
                  inputStyle={styleOfInput.inputStyle}
                  placeholder={styleOfInput.placeholder}
                  leftIcon={
                    styleOfInput.leftIcon ? (
                      <Icon
                        name={styleOfInput.leftIcon.name}
                        size={styleOfInput.leftIcon.size}
                        color={styleOfInput.leftIcon.color}></Icon>
                    ) : null
                  }
                  rightIcon={
                    styleOfInput.rightIcon ? (
                      <Icon
                        name={styleOfInput.rightIcon.name}
                        size={styleOfInput.rightIcon.size}
                        color={styleOfInput.rightIcon.color}></Icon>
                    ) : null
                  }></Input>
              );
            } else {
              return null;
            }
          })}
        </View>
      ) : null,
    );

    console.log(this.valueOfComponent);
    let style = theme ? applyThemeOnHeaderStyle(this.props, theme) : this.props;

    return (
      <View>
        <Header
          containerStyle={style.containerStyle}
          placement={style.placement}
          leftComponent={
            this.valueOfComponent[0] ? this.valueOfComponent[0] : {}
          }
          centerComponent={
            this.valueOfComponent[1] ? this.valueOfComponent[1] : {}
          }
          rightComponent={
            this.valueOfComponent[2] ? this.valueOfComponent[2] : {}
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

  leftComponent: {style: {color: 'red'}},
  centerComponent: {style: {color: 'red'}},
  rightComponent: {style: {color: 'red'}},
  containerStyle: {
    backgroundColor: 'blue',
    justifyContent: 'space-around',
    borderColor: 'black',
    borderWidth: 0,
    height: 70,
  },
};
