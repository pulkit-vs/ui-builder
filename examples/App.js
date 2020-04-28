/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// import 'react-native-gesture-handler';
// import UiBuilder from 'react-native-ui-builder';
import UiBuilder from './src/index';
import React from 'react';
import {View, Text, Navigator} from 'react-native';
import {Button} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {sourceData} from './sampleJSON/jsonForLoginPage';
import {sourceData2} from './sampleJSON/jsonForAddAddress';

function HomeScreen({navigation}) {
  console.log(navigation);
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
// const successfullyLoginData = {
//   data: [
//     {
//       type: 'text',
//       properties: {
//         title: 'Your Adresses',
//         style: {
//           color: 'white',
//           fontSize: 23,
//           marginLeft: 7,
//         },
//       },
//     },
//     {
//       type: 'button',
//       properties: {
//         title: 'Sign Up',
//         titleStyle: {color: 'white', fontSize: 20},
//         buttonStyle: {
//           backgroundColor: 'lightcoral',
//           width: '90%',
//           left: 20,
//           borderColor: 'red',
//           marginTop: 30,
//           borderRadius: 30,
//         },
//       },
//     },
//   ],
// };
// function SuccessFullyLogin({navigation}) {
//   return (
//     <View>
//       <UiBuilder source={successfullyLoginData} />
//     </View>
//   );
// }
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
  constructor() {
    super();
    this.renderScene = this.renderScene.bind(this);
  }

  // renderScene(route, navigator) {
  //   if (route.name === 'homePage')
  //     return <UiBuilder navigation={navigation} source={sourceData2} />;
  //   else if (route.name === 'aboutPage')
  //     return <UiBuilder navigation={navigation} source={sourceData} />;
  // }

  render() {
    // console.log()
    return (
      // <>
      //   <UiBuilder source={source} />
      // </>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Add Address">
            {(props) => (
              <UiBuilder
                navigation={props.navigation}
                name="Login Page"
                source={sourceData2}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="Login Page">
            {(props) => (
              <UiBuilder
                navigation={props.navigation}
                name="Add Address"
                source={sourceData}
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
