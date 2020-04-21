/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// TODO: will use Uibuilder from npm package later.
// import UiBuilder from 'react-native-ui-builder';

import React, {Children} from 'react';
import UiBuilder from './src/index';
import {View} from 'react-native';

const onButtonClick = () => {
  alert('Button Pressed');
};

// Global variable to get theme type in other files.
export let theme;
const source = {
  // theme: 'darkTheme',

  data: [
    {
      type: 'view',
      style: {flexDirection: 'row'},
      childrens: [
        {
          type: 'image',
          properties: {
            uri: 'https://picsum.photos/seed/picsum/200/300',
            style: {
              width: 180,
              height: 300,
            },
          },
        },
        {
          type: 'image',
          properties: {
            uri: 'https://picsum.photos/200/300/?blur=1',
            style: {
              width: 200,
              height: 300,
            },
          },
        },
      ],
    },
    {
      type: 'view',
      style: {},
      childrens: [
        {
          type: 'header',
          properties: {
            containerStyle: {
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
              backgroundColor: 'white',
              height: 80,
            },
            placement: 'left',
            fontSize: 30,
            width: '10%',
            leftComponent: {
              childrens: [
                {
                  type: 'icon',
                  properties: {
                    name: 'menu',
                    color: 'grey',
                    size: 40,
                  },
                },
              ],
            },
            centerComponent: {
              childrens: [
                {
                  type: 'text',
                  properties: {
                    title: 'Welcome',
                    style: {color: 'black', fontSize: 15},
                  },
                },
              ],
            },
            rightComponent: {
              childrens: [
                {
                  type: 'view',
                  style: {
                    flex: 1,
                    flexDirection: 'row',
                  },
                },
                {
                  type: 'input',
                  properties: {
                    containerStyle: {
                      width: 150,
                      height: 50,
                    },
                    inputStyle: {
                      height: 10,
                      width: 200,
                      color: 'black',
                    },
                    rightIcon: {
                      name: 'search',
                      color: 'lightblue',
                      size: 40,
                    },
                    placeholder: 'search user',
                  },
                },
                {
                  type: 'icon',
                  properties: {
                    name: 'home',
                    color: 'lightblue',
                    size: 40,
                  },
                },
              ],
            },
          },
        },
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
  // data: [
  //   {
  //     type: 'view',
  //     style: {backgroundColor: 'red', width: '100%', height: '100%'},
  //     childrens: [
  //       {
  //         type: 'header',
  //         properties: {
  //           containerStyle: {
  //             backgroundColor: 'yellow',
  //           },
  //           centerComponent: {
  //             childrens: [
  //               {
  //                 type: 'text',
  //                 properties: {
  //                   title: 'Account',
  //                   style: {color: 'black', fontSize: 20},
  //                 },
  //               },
  //             ],
  //           },
  //         },
  //       },
  //       {
  //         type: 'header',
  //         properties: {
  //           containerStyle: {
  //             height: 150,
  //             backgroundColor: 'blue',
  //           },
  //           leftComponent: {
  //             childrens: [
  //               {
  //                 type: 'icon',
  //                 properties: {
  //                   name: 'add',
  //                   color: 'red',
  //                   size: 20,
  //                 },
  //               },
  //             ],
  //           },
  //           centerComponent: {
  //             childrens: [
  //               {
  //                 type: 'text',
  //                 properties: {
  //                   title: 'Medipick',
  //                   style: {color: 'white', fontSize: 45},
  //                 },
  //               },
  //             ],
  //           },
  //         },
  //       },
  //       {
  //         type: 'header',
  //         properties: {
  //           containerStyle: {
  //             height: 60,
  //           },
  //           leftComponent: {
  //             childrens: [
  //               {
  //                 type: 'text',
  //                 properties: {
  //                   title: 'Welcome',
  //                   style: {color: 'white', fontSize: 14},
  //                 },
  //               },
  //             ],
  //           },
  //           // leftContainerStyle: {
  //           //   width: 100,
  //           // },
  //           centerComponent: {
  //             childrens: [
  //               {
  //                 type: 'text',
  //                 properties: {
  //                   title: 'Please login here',
  //                   style: {color: 'white', fontSize: 20},
  //                 },
  //               },
  //             ],
  //           },
  //         },
  //       },
  //       {

  //       }
  //     ],
  //   },
  // ],
};

export default class App extends React.Component {
  constructor() {
    super();
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
