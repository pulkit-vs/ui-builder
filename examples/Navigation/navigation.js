/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// import 'react-native-gesture-handler';
// import UiBuilder from 'react-native-ui-builder';
import UiBuilder from '../src/index';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

// variable for maintaining ScreenName
var screenNames = [];

export default class UiBuilderMultipleScreen extends React.Component {
  constructor() {
    super();
    this.createScreen = this.createScreen.bind(this);
    this.state = {
      stackScreens: [],
    };
  }
  // for Creating Screen on onPress from Any Component
  createScreen({screenName, source}) {
    // console.log('screendata', data);
    if (!screenNames.includes(screenName)) {
      //   console.log('validation');
      screenNames.push(screenName);
      let temp = this.state.stackScreens;
      temp.push(
        <Stack.Screen name={screenName}>
          {(props) => (
            <UiBuilder createScreen={this.createScreen} source={source} />
          )}
        </Stack.Screen>,
      );
      this.setState({stackScreens: temp});
    }
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={this.props.source.screenName}>
            {(props) => (
              <UiBuilder
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
