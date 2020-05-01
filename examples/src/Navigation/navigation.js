import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Components from '../index';

const Stack = createStackNavigator();

export default class UiBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.createScreen = this.createScreen.bind(this);
    this.state = {
      stackScreens: [
        <Stack.Screen
          name={this.props.source.screenName}
          key={this.props.source.screenName}>
          {(props) => (
            <Components
              createScreen={this.createScreen}
              source={this.props.source}
            />
          )}
        </Stack.Screen>,
      ],
      screenNames: [this.props.source.screenName],
    };
  }

  // Method for creating a given screen from given source onPress to a component
  createScreen({screenName, source}) {
    if (!this.state.screenNames.includes(screenName)) {
      let tempScreenNames = this.state.screenNames;
      let screenJson = this.state.stackScreens;
      tempScreenNames.push(screenName);

      screenJson.push(
        <Stack.Screen key={screenName} name={screenName}>
          {(props) => (
            <Components createScreen={this.createScreen} source={source} />
          )}
        </Stack.Screen>,
      );
      this.setState({stackScreens: screenJson, screenNames: tempScreenNames});
    }
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {/* <Stack.Screen name={this.props.source.screenName}>
            {(props) => (
              <Components
                createScreen={this.createScreen}
                source={this.props.source}
              />
            )}
          </Stack.Screen> */}
          {this.state.stackScreens}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
