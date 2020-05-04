import React, {Component} from 'react';
import {View} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';

import TextComponent from './text';
import ButtonComponent from './button';
import CheckboxComponent from './Checkbox';
import IconComponent from './icon';
import ImageComponent from './image';

export default class CardComponent extends Component {
  selectComponent(component, index) {
    console.log('entering inside function');
    switch (component.type) {
      case 'text':
        return <TextComponent {...component.properties} key={index} />;
      case 'button':
        return <ButtonComponent {...component.properties} key={index} />;
      case 'icon':
        return <IconComponent {...component.properties} key={index} />;
      case 'checkbox':
        return <CheckboxComponent {...component.properties} key={index} />;

      case 'image':
        return <ImageComponent {...component.properties} key={index} />;
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
    }
  }

  render() {
    console.log('CARD', this.props);
    return (
      <Card
        title={this.props.properties.title}
        //  titleNumberOfLines={this.props.properties.titleNumberOfLines}
        titleNumberOfLines={20}
        //  titleStyle={}
        //  wrapperStyle={}
        containerStyle={this.props.properties.containerStyle}
        dividerStyle={this.props.properties.dividerStyle}
        //  featuredTitle={}
      >
        {this.props.childrens.map((component, index) => {
          return this.selectComponent(component, index);
        })}
      </Card>
    );
  }
}
