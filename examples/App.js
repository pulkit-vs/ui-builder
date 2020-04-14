/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// TODO: will use Uibuilder from npm package later.
// import UiBuilder from 'react-native-ui-builder';

import React from 'react';
import UiBuilder from './src/index';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {View, StyleSheet, Text} from 'react-native';

const onButtonClick = () => {
  alert('Button Pressed');
};

// Global variable to get theme type in other files.
export let theme;
const source = {
  theme: 'darkTheme',
  data: [
    {
      type: 'header',
      properties: {
        containerStyle: {
          backgroundColor: 'pink',
          borderWidth: 5,
          borderColor: 'gray',

          borderBottomWidth: 5,
          borderBottomColor: 'gray',

          height: 70,
        },
        leftComponent: {
          name: 'logo-facebook',
          type: 'ionicon',
          color: 'lightblue',
          size: 40,
        },
        centerComponent: {text: 'MY Account', style: {color: 'blue'}},

        rightComponent: {
          name: 'ios-person',
          type: 'ionicon',
          color: 'lightblue',
          size: 40,
        },
        placement: 'center',
      },
    },

    {
      label: 'name',
      selectionColor: 'blue',
      style: {borderColor: 'grey', borderWidth: 1},
      type: 'input',
    },
    {
      type: 'button',
      properties: {
        onPress: onButtonClick,
        title: 'Custom Button1',
        disabled: false,
        style: {left: 150, width: 200},
      },
    },
    {
      type: 'button',
      properties: {
        onPress: onButtonClick,
        title: 'Custom Button2',
        disabled: false,
        showCircle: true,
        style: {left: 10},
      },
    },
    {
      type: 'view',
      style: {},
      childrens: [
        {
          type: 'input',
          properties: {
            label: 'Mobile Number (10 digits)',
            placeholderTextColor: 'grey',
            style: {
              backgroundColor: 'white',
              borderColor: 'grey',
              borderWidth: 2,
              width: '90%',
              left: 20,
              marginTop: 40,
            },
          },
        },
        {
          type: 'button',
          properties: {
            title: 'FACEBOOK',
            titleStyle: {color: 'blue', fontSize: 20},
            buttonStyle: {
              backgroundColor: 'white',
              width: '90%',
              left: 20,
              borderWidth: 3,
              marginTop: 20,
            },
          },
        },
      ],
    },
    {
      type: 'button',
      properties: {
        onPress: onButtonClick,
        title: 'Custom Button1',
        disabled: false,
        buttonStyle: {backgroundColor: 'pink'},
        titleStyle: {color: 'blue', fontSize: 40},
      },
    },
  ],
};

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    theme = source.theme;
    return (
      <>
        <View className="react-view" style={{width: 200}}>
          <View style={styles.sectionContainer}>
            <Text> React Native Building Blocks </Text>
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <UiBuilder source={source.data} />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
});
