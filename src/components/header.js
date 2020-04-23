import { Header, Icon, Input } from "react-native-elements";
import PropTypes from "prop-types";
import React from "react";
import { View, Text } from "react-native";

import { applyTheme } from "../utility/utils";
import { theme } from "../../index";

export default class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ValueOfComponent: ["leftComponent", "centerComponent", "rightComponent"],
    };
    if (theme) {
      this.props = applyTheme(this.props, theme);
    }
  }

  render() {
    // Map for access left , right and center component JSON
    const valueOfComponent = this.state.ValueOfComponent.map(
      (component, index) =>
        this.props[component].childrens ? (
          <View
            keys={index}
            style={
              this.props[component].childrens[0].type == "view"
                ? this.props[component].childrens[0].properties.style
                : {}
            }
          >
            {this.props[component].childrens.map((item, index) => {
              if (item.type == "icon") {
                const styleOfIcon = theme
                  ? applyTheme(item.properties, theme)
                  : item.properties;

                return (
                  <Icon
                    color={styleOfIcon.color}
                    keys={index}
                    name={styleOfIcon.name}
                    type={styleOfIcon.type}
                    size={styleOfIcon.size}
                  />
                );
              } else if (item.type == "text") {
                const styleOfText = applyTheme(item.properties, theme);
                return (
                  <Text keys={index} style={styleOfText.style}>
                    {styleOfText.title}
                  </Text>
                );
              } else if (item.type == "input") {
                const styleOfInput = theme
                  ? applyTheme(item.properties, theme)
                  : item.properties;
                return (
                  <Input
                    containerStyle={styleOfInput.containerStyle}
                    inputStyle={styleOfInput.inputStyle}
                    keys={index}
                    leftIcon={
                      styleOfInput.leftIcon ? (
                        <Icon
                          color={styleOfInput.leftIcon.color}
                          name={styleOfInput.leftIcon.name}
                          size={styleOfInput.leftIcon.size}
                          type={styleOfInput.leftIcon.type}
                        ></Icon>
                      ) : null
                    }
                    placeholder={styleOfInput.placeholder}
                    rightIcon={
                      styleOfInput.rightIcon ? (
                        <Icon
                          color={styleOfInput.rightIcon.color}
                          name={styleOfInput.rightIcon.name}
                          size={styleOfInput.rightIcon.size}
                          type={styleOfInput.rightIcon.type}
                        ></Icon>
                      ) : null
                    }
                  ></Input>
                );
              } else {
                return null;
              }
            })}
          </View>
        ) : null
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
  centerComponent: { style: { color: "red" } },
  containerStyle: {
    backgroundColor: "blue",
    justifyContent: "space-around",
    borderColor: "black",
    borderWidth: 0,
    height: 70,
  },
  leftComponent: { style: { color: "red" } },
  placement: "center",
  rightComponent: { style: { color: "red" } },
};
