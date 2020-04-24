/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { View } from "react-native";
import { get } from "lodash";

import ButtonComponent from "./src/components/button";
import HeaderComponent from "./src/components/header";
import IconComponent from "./src/components/icon";
import ImageComponent from "./src/components/image";
import Input from "./src/components/input";
import ModalComponent from "./src/components/modal";
import TextComponent from "./src/components/text";

// Global variable to get theme type in other files.
export let theme;

export default class UiBuilder extends React.Component {
  constructor() {
    super();
    this.selectComponent = this.selectComponent.bind(this);
  }

  selectComponent(component, index) {
    const type = get(component, "type", "");
    switch (type) {
      case "input":
        return <Input {...component.properties} key={index} />;
      case "icon":
        return <IconComponent {...component.properties} key={index} />;
      case "button":
        return <ButtonComponent {...component.properties} key={index} />;
      case "header":
        return <HeaderComponent {...component.properties} key={index} />;
      case "text":
        return <TextComponent {...component.properties} key={index} />;
      case "modal":
        return <ModalComponent {...component} key={index} />;
      case "view":
        return (
          <View style={component.style} key={index}>
            {component.childrens.map((componentData, i) => {
              return this.selectComponent(componentData, i);
            })}
          </View>
        );
      case "image":
        return <ImageComponent {...component.properties} key={index} />;
    }
  }

  render() {
    const { source } = this.props;
    theme = source.theme;
    return (
      <View>
        {source.data.map((component, index) => {
          return this.selectComponent(component, index);
        })}
      </View>
    );
  }
}
