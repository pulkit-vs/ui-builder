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

import Input from "./src/input";
import ButtonComponent from "./src/button";

export default class UiBuilder extends React.Component {
  constructor() {
    super();
    this.selectComponent = this.selectComponent.bind(this);
  }

  selectComponent(component) {
    const type = get(component, "type", "");
    switch (type) {
      case "input":
        return <Input componentData={component} />;
      case "button":
        return <ButtonComponent componentData = {component} />;
    }
  }

  render() {
    const { source } = this.props;
    return (
      <View>
        {source.map(component => {
          return this.selectComponent(component);
        })}
      </View>
    );
  }
}
