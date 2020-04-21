/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// TODO: will use Uibuilder from npm package later.
//import UiBuilder from 'react-native-ui-builder';
import React, {Children} from 'react';
import UiBuilder from './src/index';
import {View, Text} from 'react-native';
import {CheckBox} from 'react-native-elements';
const onButtonClick = () => {
  alert('Button Pressed');
};
const onIconClick = () => {
  alert('Please add message on Icon click');
};

// Global variable to get theme type in other files.
export let theme;
const source = {
  // theme: 'darkTheme',

  data: [
    // {
    //   type: 'view',
    //   style: {},
    //   childrens: [
    //     {
    //       type: 'header',
    //       properties: {
    //         containerStyle: {
    //           borderBottomColor: 'grey',
    //           borderBottomWidth: 1,
    //           backgroundColor: 'red',
    //           height: 40,
    //         },

    //         fontSize: 30,
    //         width: 200,

    //         centreComponent: {
    //           childrens: [
    //             {
    //               type: 'view',
    //               style: {
    //                 flex: 1,
    //                 flexDirection: 'row',
    //               },
    //             },

    //             {
    //               type: 'icon',
    //               properties: {
    //                 name: 'add',
    //                 color: 'white',
    //                 size: 10,
    //               },
    //             },
    //             {
    //               type: 'text',
    //               properties: {
    //                 title: 'Your Addresses',
    //                 style: {
    //                   color: 'white',
    //                   size: 10,
    //                 },
    //               },
    //             },
    //           ],
    //         },
    //       },
    //     },
    //   ],
    // },
    {
      type: 'view',
      style: {},
      childrens: [
        {
          type: 'header',
          properties: {
            containerStyle: {
              backgroundColor: 'red',
              borderBottomWidth: 0,
              height: 70,
            },
            centerComponent: {
              childrens: [
                {
                  type: 'view',
                  style: {flexDirection: 'row'},
                },
                {
                  type: 'icon',
                  properties: {
                    name: 'add',
                    color: 'white',
                  },
                },
                {
                  type: 'text',
                  properties: {
                    title: 'Your Adresses',
                    style: {color: 'white', fontSize: 23},
                  },
                },
                {
                  type: 'icon',
                  properties: {
                    name: 'add',
                    color: 'red',
                    size: 20,
                  },
                },
              ],
            },
          },
        },
        {
          type: 'header',
          properties: {
            containerStyle: {
              backgroundColor: 'white',
              borderBottomWidth: 0,

              height: 40,
            },
            leftComponent: {
              childrens: [
                {
                  type: 'view',
                  style: {flexDirection: 'row'},
                },
                {
                  type: 'icon',
                  properties: {
                    name: 'add',
                    color: 'red',
                  },
                },
                {
                  type: 'text',
                  properties: {
                    title: 'Add Your Addresses',
                    style: {
                      color: 'red',
                      fontSize: 18,
                      width: 200,
                      marginBottom: 10,
                    },
                  },
                },
              ],
            },
          },
        },
      ],
    },
  ],
};

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: true,
    };
  }

  render() {
    theme = source.theme;
    return (
      <>
        <View>
          <UiBuilder source={source.data} />
        </View>
      </>
    );
  }
}
