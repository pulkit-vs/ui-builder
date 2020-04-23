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

  selectComponent(component) {
    const type = get(component, "type", "");
    switch (type) {
      case "input":
        return <Input {...component.properties} key={1} />;
      case "icon":
        return <IconComponent {...component.properties} key={2} />;
      case "button":
        return <ButtonComponent {...component.properties} key={3} />;
      case "header":
        return <HeaderComponent {...component.properties} key={4} />;
      case "text":
        return <TextComponent {...component.properties} key={5} />;
      case "modal":
        return <ModalComponent {...component} key={6} />;
      case "view":
        return (
          <View style={component.style} key={7}>
            {component.childrens.map((componentData) => {
              return this.selectComponent(componentData);
            })}
          </View>
        );
      case "image":
        return <ImageComponent {...component.properties} key={8} />;
    }
  }

  render() {
    const { source } = this.props;
    theme = source.theme;
    return (
      <View>
        {source.data.map((component) => {
          return this.selectComponent(component);
        })}
      </View>
    );
  }
}
