// import 'react-native-gesture-handler';
// import UiBuilder from 'react-native-ui-builder';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Components from '../index';

const Stack = createStackNavigator();

// variable for containing screenNames
var screenNames = [];

export default class UiBuilder extends React.Component {
  constructor() {
    super();
    this.createScreen = this.createScreen.bind(this);
    this.state = {
      stackScreens: [],
    };
  }
  // Method for creating a given screen from given source onPress to a component
  createScreen({screenName, source}) {
    // console.log('screendata', data);
    if (!screenNames.includes(screenName)) {
      //   console.log('validation');
      screenNames.push(screenName);
      let screenJson = this.state.stackScreens;
      screenJson.push(
        <Stack.Screen key={screenName} name={screenName}>
          {(props) => (
            <Components createScreen={this.createScreen} source={source} />
          )}
        </Stack.Screen>,
      );
      this.setState({stackScreens: screenJson});
    }
  }

  render() {
    alert(JSON.stringify(this.state.stackScreens))
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name={this.props.source.screenName}>
            {(props) => (
              <Components
                createScreen={this.createScreen}
                source={this.props.source}
              />
            )}
          </Stack.Screen>
          {this.state.stackScreens}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
