/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
// import UiBuilder from 'react-native-ui-builder';
import UiBuilder from './src/index';
import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {sourceData} from './sampleJSON/jsonForLoginPage';
import {sourceData2} from './sampleJSON/jsonForAddAddress';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <Text>Add Address</Text>
      <Button
        title="Go to Add Address"
        onPress={() => navigation.navigate('Add Address')}
      />
      <Text>Login Page</Text>
      <Button
        title="Go to Login Page"
        onPress={() => navigation.navigate('Login Page')}
      />
    </View>
  );
}
// function DetailsScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Details Screen</Text>
//       <Button
//         title="Go to Login Page"
//         onPress={() => navigation.navigate('Login Page')}
//       />
//     </View>
//   );
// }
const Stack = createStackNavigator();

const source = {
  theme: 'lightTheme',
  data: [
    {
      type: 'navigation',
      props: {
        initialScreen: 'Home',
      },

      childrens: [
        {
          name: 'Add Address',
          properties: {souce: sourceData2},
        },
        {
          name: 'Login Page',
          properties: {source: sourceData},
        },
      ],
    },
  ],
};

export default class App extends React.Component {
  render() {
    return (
      // <>
      //   <UiBuilder source={source} />
      // </>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Add Address">
            {(props) => <UiBuilder source={sourceData2} />}
          </Stack.Screen>
          <Stack.Screen name="Login Page">
            {(props) => <UiBuilder source={sourceData} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
