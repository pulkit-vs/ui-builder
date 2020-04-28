/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import {get} from 'lodash';

import ButtonComponent from './components/button';
import HeaderComponent from './components/header';
import IconComponent from './components/icon';
import ImageComponent from './components/image';
import Input from './components/input';
import ModalComponent from './components/modal';
import TextComponent from './components/text';
import {applyTheme} from './utility/utils';

// Global variable to get theme type in other files.
export let theme;

export default class UiBuilder extends React.Component {
  constructor() {
    super();
    this.selectComponent = this.selectComponent.bind(this);
  }

  selectComponent(component, index) {
    const type = get(component, 'type', '');
    switch (type) {
      case 'input':
        return <Input {...component.properties} key={index} />;
      case 'icon':
        return <IconComponent {...component.properties} key={index} />;
      case 'button':
        return <ButtonComponent {...component.properties} key={index} />;
      case 'header':
        return <HeaderComponent {...component.properties} key={index} />;
      case 'text':
        return <TextComponent {...component.properties} key={index} />;
      case 'modal':
        return <ModalComponent {...component} key={index} />;
      case 'view': {
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
      case 'image':
        return <ImageComponent {...component.properties} key={index} />;
    }
  }

  render() {
    const {source, navigation} = this.props;
    theme = source.theme;
    return (
      <View>
        <Button
          title="Go to home Page"
          onPress={() => navigation.navigate(this.props.name)}
        />
        {source.data.map((component, index) => {
          return this.selectComponent(component, index);
        })}
      </View>
    );
  }
}
