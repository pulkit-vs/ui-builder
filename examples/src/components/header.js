import PropTypes from 'prop-types';
import {Header, Icon, Input} from 'react-native-elements';
import React from 'react';
import {View, Text} from 'react-native';

import {applyTheme} from '../utility/utils';
import {theme} from '../../App';

export default class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ValueOfComponent: ['leftComponent', 'centerComponent', 'rightComponent'],
    };
    if (theme) {
      this.props = applyTheme(this.props, theme);
    }
  }

  render() {
    // Map for access left , right and center component JSON
    // this.props = theme ? applyTheme(this.props, theme) : this.props;
    // this.state.ValueOfComponent.forEach((value) => {
    //   this.props[value].childrens.forEach((children) => {
    //     this.props[value].childrens.properties = applyTheme(
    //       children.properties,
    //       theme,
    //     );
    //   });
    // });
    console.log('main props', this.props.containerStyle);
    const valueOfComponent = this.state.ValueOfComponent.map(
      (component, index) =>
        this.props[component].childrens ? (
          <View
            keys={index}
            style={
              this.props[component].childrens[0].type == 'view'
                ? this.props[component].childrens[0].properties.style
                : {}
            }>
            {this.props[component].childrens.map((item, index) => {
              if (item.type == 'icon') {
                const styleOfIcon = theme
                  ? applyTheme(item.properties, theme)
                  : item.properties;

                return (
                  <Icon
                    keys={index}
                    name={styleOfIcon.name}
                    type={styleOfIcon.type}
                    color={styleOfIcon.color}
                    size={styleOfIcon.size}
                  />
                );
              } else if (item.type == 'text') {
                const styleOfText = applyTheme(item.properties, theme);
                return (
                  <Text keys={index} style={styleOfText.style}>
                    {styleOfText.title}
                  </Text>
                );
              } else if (item.type == 'input') {
                const styleOfInput = theme
                  ? applyTheme(item.properties, theme)
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
                          type={styleOfInput.leftIcon.type}
                          color={styleOfInput.leftIcon.color}></Icon>
                      ) : null
                    }
                    rightIcon={
                      styleOfInput.rightIcon ? (
                        <Icon
                          name={styleOfInput.rightIcon.name}
                          size={styleOfInput.rightIcon.size}
                          type={styleOfInput.rightIcon.type}
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

    return (
      <View>
        <Header
          containerStyle={this.props.containerStyle}
          placement={this.props.placement}
          leftComponent={valueOfComponent[0] ? valueOfComponent[0] : {}}
          centerComponent={valueOfComponent[1] ? valueOfComponent[1] : {}}
          rightComponent={valueOfComponent[2] ? valueOfComponent[2] : {}}
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
    childrens: PropTypes.array,
  }),
  rightComponent: PropTypes.shape({
    childrens: PropTypes.array,
  }),
  centerComponent: PropTypes.shape({
    childrens: PropTypes.array,
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
