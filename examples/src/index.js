/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import ButtonComponent from './components/button';
import Input from './components/input';
import HeaderComponent from './components/header';
import ImageComponent from './components/image';
import React from 'react';
import {View} from 'react-native';
import {get} from 'lodash';

export default class UiBuilder extends React.Component {
  constructor() {
    super();
    this.selectComponent = this.selectComponent.bind(this);
  }

  selectComponent(component) {
    const type = get(component, 'type', '');
    switch (type) {
      case 'input':
        return <Input {...component.properties} />;
      case 'button':
        return <ButtonComponent {...component.properties} />;
      case 'header':
        return <HeaderComponent {...component.properties} />;
      case 'view':
        return (
          <View style={component.style}>
            {component.childrens.map((componentData) => {
              return this.selectComponent(componentData);
            })}
          </View>
        );
      case 'image':
        return <ImageComponent {...component.properties} />;
    }
  }

  render() {
    const {source} = this.props;
    return (
      <View>
        {source.map((component) => {
          return this.selectComponent(component);
        })}
      </View>
    );
  }
}
