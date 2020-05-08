import React from "react";
import { get } from "lodash";
import { View, KeyboardAvoidingView, ScrollView } from "react-native";

import { applyTheme } from "./src/utility/utils";
import ButtonComponent from "./src/components/button";
import CardComponent from "./src/components/card";
import CheckboxComponent from "./src/components/Checkbox";
import CarouselComponent from "./src/components/carousel";
import { COMPONENTS } from "./src/utility/constant";
import DividerComponent from "./src/components/divider";
import HeaderComponent from "./src/components/header";
import IconComponent from "./src/components/icon";
import ImageComponent from "./src/components/image";
import ModalComponent from "./src/components/modal";
import TextComponent from "./src/components/text";
import TextInput from "./src/components/input";

// Global variable to get theme type in other files.
export let theme;

export default class Components extends React.Component {
  constructor() {
    super();
    this.selectComponent = this.selectComponent.bind(this);
  }

  selectComponent(component, index) {
    const type = get(component, "type", "");
    switch (type) {
      case COMPONENTS.INPUT:
        return <TextInput {...component.properties} key={index} />;
      case COMPONENTS.ICON:
        return <IconComponent {...component.properties} key={index} />;
      case COMPONENTS.BUTTON:
        return (
          <ButtonComponent
            {...component.properties}
            createScreen={this.props.createScreen}
            key={index}
          />
        );
      case COMPONENTS.CAROUSEL: {
        let itemsData = component.properties.data.map((componentData, i) => {
          return this.selectComponent(componentData, i);
        });
        return (
          <CarouselComponent
            {...component.properties}
            data={itemsData}
            key={index}
          />
        );
      }

      case COMPONENTS.HEADER:
        return (
          <HeaderComponent
            {...component.properties}
            createScreen={this.props.createScreen}
            key={index}
          />
        );
      case COMPONENTS.TEXT:
        return (
          <TextComponent
            {...component.properties}
            createScreen={this.props.createScreen}
            key={index}
          />
        );
      case COMPONENTS.MODAL:
        return (
          <ModalComponent
            {...component}
            createScreen={this.props.createScreen}
            key={index}
          />
        );
      case COMPONENTS.VIEW: {
        if (theme) {
          component.style = applyTheme(component.style, theme);
        }
        return (
          <View style={component.style} key={index}>
            {component.childrens.map((componentData, i) => {
              return this.selectComponent(componentData, i);
            })}
          </View>
        );
      }
      case COMPONENTS.CHECKBOX:
        return <CheckboxComponent {...component.properties} key={index} />;

      case COMPONENTS.CARD:
        // map to store children components of card
        const childComponents = component.childrens.map((component, index) => {
          return this.selectComponent(component, index);
        });

        return (
          <CardComponent
            {...component.properties}
            childrens={childComponents}
            key={index}
          />
        );
      case COMPONENTS.IMAGE:
        return <ImageComponent {...component.properties} key={index} />;
      case COMPONENTS.DIVIDER:
        return <DividerComponent {...component.properties} key={index} />;
    }
  }

  render() {
    const { source } = this.props;
    theme = source.theme;
    return (
      <KeyboardAvoidingView
        enabled
        behavior={"position"}
        keyboardVerticalOffset={-200}
      >
        <ScrollView>
          <View>
            {source.data.map((component, index) => {
              return this.selectComponent(component, index);
            })}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
