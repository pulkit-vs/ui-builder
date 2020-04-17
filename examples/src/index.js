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
      case 'icon':
        return <IconComponent {...component.properties} />;
      case 'button':
        return <ButtonComponent {...component.properties} />;

      case 'view':
        return (
          <View>
            //TODO: will add header in a seperate class later */
            <Header
              backgroundColor="white"
              containerStyle={{borderBottomColor: 'grey', borderBottomWidth: 1}}
              fontSize={30}
              width={'10%'}
              placement="left"
              leftComponent={{
                text: 'Create an account to checkout',
                style: {color: 'black', fontSize: 20},
              }}
              // rightComponent={{ icon: 'cross', color: 'black' }}
            />
            {component.childrens.map((componentData) => {
              return this.selectComponent(componentData);
            })}
          </View>
          //)
        );
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
