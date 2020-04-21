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
                  type="font-awesome"
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

    const style = theme
      ? applyThemeOnHeaderStyle(this.props, theme)
      : this.props;

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
  // leftComponent: PropTypes.shape({
  //   childrens: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       type: PropTypes.string,
  //       properties: PropTypes.shape({
  //         containerStyle: PropTypes.object,
  //         inputStyle: PropTypes.object,
  //         leftIcon: PropTypes.object,
  //         rightIcon: PropTypes.object,
  //         placeholder: PropTypes.string,
  //         size: PropTypes.number,
  //         color: PropTypes.string,
  //         name: PropTypes.string,
  //         title: PropTypes.string,
  //         style: PropTypes.object,
  //       }),
  //     }),
  //   ),
  // }),
  // rightComponent: PropTypes.shape({
  //   childrens: PropTypes.arrayof(
  //     PropTypes.shape({
  //       type: PropTypes.string,
  //       properties: PropTypes.shape({
  //         containerStyle: PropTypes.object,
  //         inputStyle: PropTypes.object,
  //         leftIcon: PropTypes.object,
  //         rightIcon: PropTypes.object,
  //         placeholder: PropTypes.string,
  //         size: PropTypes.number,
  //         color: PropTypes.string,
  //         name: PropTypes.string,
  //         title: PropTypes.string,
  //         style: PropTypes.object,
  //       }),
  //     }),
  //   ),
  // }),
  // centerComponent: PropTypes.shape({
  //   childrens: PropTypes.arrayof(
  //     PropTypes.shape({
  //       type: PropTypes.string,
  //       properties: PropTypes.shape({
  //         containerStyle: PropTypes.object,
  //         inputStyle: PropTypes.object,
  //         leftIcon: PropTypes.object,
  //         rightIcon: PropTypes.object,
  //         placeholder: PropTypes.string,
  //         size: PropTypes.number,
  //         color: PropTypes.string,
  //         name: PropTypes.string,
  //         title: PropTypes.string,
  //         style: PropTypes.object,
  //       }),
  //     }),
  //   ),
  // }),
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
