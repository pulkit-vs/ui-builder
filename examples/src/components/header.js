import {Header, Icon, Input} from 'react-native-elements';
import PropTypes from 'prop-types';
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContext} from '@react-navigation/native';

import {applyTheme} from '../utility/utils';
import {theme} from '../index';

export default class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ValueOfComponent: ['leftComponent', 'centerComponent', 'rightComponent'],
    };
    // apply theme
    if (theme) {
      props = applyTheme(this.props, theme);
      props.leftComponent.childrens.forEach((children) => {
        children.properties = applyTheme(children.properties, theme);
      });
      props.rightComponent.childrens.forEach((children) => {
        children.properties = applyTheme(children.properties, theme);
      });
      props.centerComponent.childrens.forEach((children) => {
        children.properties = applyTheme(children.properties, theme);
      });
    }
  }
  static contextType = NavigationContext;
  componentDidMount() {
    if (this.props.onPress) {
      this.props.onPress.navigation
        ? this.props.createScreen(this.props.onPress)
        : null;
    }
  }
  render() {
    const navigation = this.context;
    //for creating customized header's (left , right and center component)
    const valueOfComponent = this.state.ValueOfComponent.map(
      (component, index) =>
        this.props[component].childrens ? (
          <View
            key={index}
            style={
              this.props[component].childrens[0].type == 'view'
                ? this.props[component].childrens[0].properties.style
                : {}
            }>
            {this.props[component].childrens.map((item, i) => {
              if (item.type == 'icon') {
                const styleOfIcon = item.properties;
                if (item.properties.onPress) {
                  item.properties.onPress.navigation
                    ? this.props.createScreen(item.properties.onPress)
                    : null;
                }

                return (
                  <Icon
                    iconStyle={styleOfIcon.iconStyle}
                    color={styleOfIcon.color}
                    key={i}
                    name={styleOfIcon.name}
                    type={styleOfIcon.type}
                    onPress={
                      item.properties.onPress &&  item.properties.onPress.navigation
                        ? () =>
                            navigation.navigate(
                              item.properties.onPress.screenName,
                            )
                        : item.properties.onPress
                    }
                    size={styleOfIcon.size}
                  />
                );
              } else if (item.type == 'text') {
                const styleOfText = item.properties;
                return (
                  <Text key={i} style={styleOfText.style}>
                    {styleOfText.title}
                  </Text>
                );
              } else if (item.type == 'input') {
                const styleOfInput = item.properties;
                return (
                  <Input
                    containerStyle={styleOfInput.containerStyle}
                    inputStyle={styleOfInput.inputStyle}
                    key={i}
                    leftIcon={
                      styleOfInput.leftIcon ? (
                        <Icon
                          iconStyle={styleOfInput.leftIcon.iconStyle}
                          color={styleOfInput.leftIcon.color}
                          name={styleOfInput.leftIcon.name}
                          size={styleOfInput.leftIcon.size}
                          type={styleOfInput.leftIcon.type}></Icon>
                      ) : null
                    }
                    placeholder={styleOfInput.placeholder}
                    rightIcon={
                      styleOfInput.rightIcon ? (
                        <Icon
                          iconStyle={styleOfInput.rightIcon.iconStyle}
                          color={styleOfInput.rightIcon.color}
                          name={styleOfInput.rightIcon.name}
                          size={styleOfInput.rightIcon.size}
                          type={styleOfInput.rightIcon.type}></Icon>
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
