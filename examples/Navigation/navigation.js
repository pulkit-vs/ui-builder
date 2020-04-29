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

// variable for maintain ScreenName
var path = [];

export default class UiBuilderMultipleScreen extends React.Component {
  constructor() {
    super();
    this.createScreen = this.createScreen.bind(this);
    this.state = {
      val: [],
    };
  }
  // for Creating Screen on onPress from Any Component
  createScreen({screenName, data}) {
    // console.log('screendata', data);
    if (!path.includes(screenName)) {
      //   console.log('validation');
      path.push(screenName);
      let temp = this.state.val;
      temp.push(
        <Stack.Screen
          name={screenName}
          //   options={{
          //     title: 'My home',
          //     headerStyle: {
          //       backgroundColor: '#f4511e',
          //     },
          //     headerTintColor: '#fff',
          //     headerTitleStyle: {
          //       fontWeight: 'bold',
          //     },
          //   }}
        >
          {(props) => (
            <UiBuilder
              createScreen={this.createScreen}
              name="Login Page"
              source={data}
            />
          )}
        </Stack.Screen>,
      );
      this.setState({val: temp});
    }
  }

  render() {
    // initialRouteName="Home"
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login Page"
            // options={{title: 'My home', style: {backgrounColor: 'red'}}}
            options={{
              title: 'My home',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}>
            {(props) => (
              <UiBuilder
                createScreen={this.createScreen}
                navigation={props.navigation}
                // name="Home"
                source={this.props.sourceData}
              />
            )}
          </Stack.Screen>
          {this.state.val}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
