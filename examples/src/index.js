/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {get} from 'lodash';
import {View, KeyboardAvoidingView, ScrollView} from 'react-native';

import ButtonComponent from './components/Button';
import CardComponent from './components/Card';
import CarouselComponent from './components/Carousel';
import CheckboxComponent from './components/Checkbox';
import DividerComponent from './components/Divider';
import HeaderComponent from './components/Header';
import IconComponent from './components/Icon';
import ImageComponent from './components/Image';
import ModalComponent from './components/Modal';
import SliderComponent from './components/Slider';
import TextComponent from './components/Text';
import TextInput from './components/Input';
import {COMPONENTS} from './utility/constant';
import {applyTheme} from './utility/utils';
import VideoComponent from "./components/video";

// Global variable to get theme type in other files.
export let theme;

export default class Components extends React.Component {
  constructor() {
    super();
    this.selectComponent = this.selectComponent.bind(this);
  }

  selectComponent(component, index) {
    const type = get(component, 'type', '');
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

        console.log(component);
        return (
          <CardComponent
            {...component.properties}
            childrens={childComponents}
            key={index}
          />
        );
      case COMPONENTS.IMAGE:
        return <ImageComponent {...component.properties} key={index} />;
      case COMPONENTS.SLIDER:
        return <SliderComponent {...component.properties} key={index} />;
      case COMPONENTS.DIVIDER:
        return <DividerComponent {...component.properties} key={index} />;
      case COMPONENTS.VIDEO:
      return <VideoComponent {...component.properties} key={index} />;
    }
  }

  render() {
    const {source} = this.props;
    theme = source.theme;
    return (
      <KeyboardAvoidingView
        enabled
        behavior={'position'}
        keyboardVerticalOffset={-200}>
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
