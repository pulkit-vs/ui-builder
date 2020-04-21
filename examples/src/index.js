/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import ButtonComponent from './components/button';
import Input from './components/input';
import React from 'react';
import {View, Text} from 'react-native';
import {get} from 'lodash';
import {Header} from 'react-native-elements';
import IconComponent from './components/icon';
import ImageComponent from './components/image';
import HeaderComponent from './components/header';

import Checkbox from './components/Checkbox';

export default class UiBuilder extends React.Component {
  constructor() {
    super();
    this.selectComponent = this.selectComponent.bind(this);
  }

  selectComponent(component) {
    const type = get(component, 'type', '');
    switch (type) {
      case 'input':
        return <Input {...component.properties} key={1} />;
      case 'icon':
        return <IconComponent {...component.properties} key={2} />;
      case 'button':
        return <ButtonComponent {...component.properties} key={3} />;
      case 'header':
        return <HeaderComponent {...component.properties} key={4} />;
      // case 'view':
      //   return (
      //     <View style={component.style}>
      //       //TODO: will add header in a seperate class later */
      //       <Header
      //         backgroundColor="white"
      //         containerStyle={{borderBottomColor: 'grey', borderBottomWidth: 1}}
      //         fontSize={30}
      //         width={'10%'}
      //         placement="left"
      //         leftComponent={{
      //           text: 'Create an account to checkout',
      //           style: {color: 'black', fontSize: 20},
      //         }}
      //         // rightComponent={{ icon: 'cross', color: 'black' }}
      //       />
      //       {component.childrens.map((componentData) => {
      //         return this.selectComponent(componentData);
      //       })}
      //     </View>
      //   );
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
