import {Header, Icon, Input} from 'react-native-elements';
import PropTypes from 'prop-types';
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContext} from '@react-navigation/native';

import {applyTheme} from '../utility/utils';
import {COMPONENTS} from '../utility/constant';
import {theme} from '../index';

export default class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ValueOfComponent: ['leftComponent', 'centerComponent', 'rightComponent'],
    };
    // apply theme
    props = theme ? applyTheme(this.props, theme) : this.props;
    props.leftComponent.childrens.forEach((children) => {
      children.properties = theme
        ? applyTheme(children.properties, theme)
        : children.properties;
      if (children.properties.onPress) {
        children.properties.onPress.navigation
          ? this.props.createScreen(children.properties.onPress)
          : null;
      }
    });
    props.rightComponent.childrens.forEach((children) => {
      children.properties = theme
        ? applyTheme(children.properties, theme)
        : children.properties;
      if (children.properties.onPress) {
        children.properties.onPress.navigation
          ? this.props.createScreen(children.properties.onPress)
          : null;
      }
    });
    props.centerComponent.childrens.forEach((children) => {
      children.properties = theme
        ? applyTheme(children.properties, theme)
        : children.properties;
      if (children.properties.onPress) {
        children.properties.onPress.navigation
          ? this.props.createScreen(children.properties.onPress)
          : null;
      }
    });
  }
  static contextType = NavigationContext;
  render() {
    const navigation = this.context;
    //for creating customized header's (left , right and center component)
    const valueOfComponent = this.state.ValueOfComponent.map(
      (component, index) =>
        this.props[component].childrens ? (
          <View
            key={index}
            style={
              this.props[component].childrens[0].type == COMPONENTS.VIEW
                ? this.props[component].childrens[0].properties.style
                : {}
            }>
            {this.props[component].childrens.map((item, i) => {
              if (item.type == COMPONENTS.ICON) {
                // creating screen for header'icon onPress
                if (item.properties.onPress) {
                  item.properties.onPress.navigation
                    ? this.props.createScreen(item.properties.onPress)
                    : null;
                }

                return (
                  <Icon
                    iconStyle={item.properties.iconStyle}
                    color={item.properties.color}
                    key={i}
                    name={item.properties.name}
                    type={item.properties.type}
                    onPress={
                      item.properties.onPress
                        ? item.properties.onPress.navigation
                          ? () =>
                              navigation.navigate(
                                item.properties.onPress.screenName,
                              )
                          : item.properties.onPress
                        : null
                    }
                    size={item.properties.size}
                  />
                );
              } else if (item.type == COMPONENTS.TEXT) {
                return (
                  <Text key={i} style={item.properties.style}>
                    {item.properties.title}
                  </Text>
                );
              } else if (item.type == COMPONENTS.INPUT) {
                return (
                  <Input
                    containerStyle={item.properties.containerStyle}
                    inputStyle={item.properties.inputStyle}
                    key={i}
                    leftIcon={
                      item.properties.leftIcon ? (
                        <Icon
                          iconStyle={item.properties.leftIcon.iconStyle}
                          color={item.properties.leftIcon.color}
                          name={item.properties.leftIcon.name}
                          size={item.properties.leftIcon.size}
                          type={item.properties.leftIcon.type}></Icon>
                      ) : null
                    }
                    placeholder={item.properties.placeholder}
                    rightIcon={
                      item.properties.rightIcon ? (
                        <Icon
                          iconStyle={item.properties.rightIcon.iconStyle}
                          color={item.properties.rightIcon.color}
                          name={item.properties.rightIcon.name}
                          size={item.properties.rightIcon.size}
                          type={item.properties.rightIcon.type}></Icon>
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
          centerComponent={valueOfComponent[1] ? valueOfComponent[1] : {}}
          centerContainerStyle={this.props.centerContainerStyle}
          leftComponent={valueOfComponent[0] ? valueOfComponent[0] : {}}
          leftContainerStyle={this.props.leftContainerStyle}
          placement={this.props.placement}
          rightComponent={valueOfComponent[2] ? valueOfComponent[2] : {}}
          rightContainerStyle={this.props.rightContainerStyle}
        />
      </View>
    );
  }
}

HeaderComponent.propTypes = {
  centerComponent: PropTypes.shape({
    childrens: PropTypes.array,
  }),
  containerStyle: PropTypes.shape({
    backgroundColor: PropTypes.string,
    borderWidth: PropTypes.number,
    borderColor: PropTypes.string,
    borderBottomWidth: PropTypes.number,
    borderBottomColor: PropTypes.string,
    color: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
  }),
  leftComponent: PropTypes.shape({
    childrens: PropTypes.array,
  }),
  placement: PropTypes.string,
  rightComponent: PropTypes.shape({
    childrens: PropTypes.array,
  }),
};

HeaderComponent.defaultProps = {
  centerComponent: {
    childrens: [
      {
        type: 'view',
        properties: {style: {flexDirection: 'row'}},
      },
    ],
  },
  containerStyle: {
    backgroundColor: 'blue',
    justifyContent: 'space-around',
    borderColor: 'black',
    borderWidth: 0,
    height: 70,
  },
  leftComponent: {
    childrens: [
      {
        type: 'view',
        properties: {style: {flexDirection: 'row'}},
      },
    ],
  },
  placement: 'center',
  rightComponent: {
    childrens: [
      {
        type: 'view',
        properties: {style: {flexDirection: 'row'}},
      },
    ],
  },
};
