/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import UiBuilder from 'react-native-ui-builder';
import UiBuilder from './src/index';
import React from 'react';
import UiBuilder from '../index';

// Add Address Screen Json
const addAdressData = {
  theme: '',
  screenName: 'Add Address',
  data: [
    {
      type: 'view',
      style: {},
      childrens: [
        {
          type: 'view',
          style: {borderBottomWidth: 25, borderBottomColor: 'red'},
          childrens: [
            {
              type: 'header',
              properties: {
                containerStyle: {
                  backgroundColor: 'red',
                  borderBottomWidth: 0,
                  height: 65,
                  textAlign: 'center',
                },
                centerComponent: {
                  childrens: [
                    {
                      type: 'view',
                      properties: {style: {flexDirection: 'row'}},
                    },
                    {
                      type: 'icon',
                      properties: {
                        name: 'long-arrow-left',
                        type: 'font-awesome',
                        color: 'white',
                        size: 30,
                      },
                    },
                    {
                      type: 'text',
                      properties: {
                        title: 'Your Adresses',
                        style: {
                          color: 'white',
                          fontSize: 23,
                          marginLeft: 7,
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
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
                  properties: {
                    style: {
                      width: 500,
                      marginLeft: -10,
                      flexDirection: 'row',
                      borderBottomWidth: 2,
                      borderBottomColor: 'grey',
                      backgroundColor: 'white',
                    },
                  },
                },
                {
                  type: 'icon',
                  properties: {
                    name: 'plus-circle',
                    type: 'font-awesome',
                    color: 'red',
                    iconStyle: {
                      marginLeft: 4,
                    },
                  },
                },
                {
                  type: 'text',
                  properties: {
                    title: 'Edit Your Addresses',
                    style: {
                      color: 'red',
                      fontSize: 18,
                      width: 200,
                      marginBottom: 10,
                      marginLeft: 7,
                    },
                  },
                },
              ],
            },
          },
        },
      ],
    },
    {
      type: 'modal',
      properties: {
        style: {
          margin: 0,
          width: '100%',
          marginTop: '110%',
          backgroundColor: 'white',
          borderRadius: 0,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
        backdropColor: 'grey',
        closeModal: ['onBackButtonPress', 'onSwipeComplete'],
        swipeDirection: 'left',
      },
      childrens: [
        {
          type: 'icon',
          properties: {
            containerStyle: {
              alignSelf: 'flex-end',
              right: 20,
              position: 'absolute',
            },
            name: 'close',
            color: 'grey',
            size: 20,
            onPress: 'closeModal',
          },
        },
        {
          type: 'text',
          properties: {
            style: {
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'black',
              alignSelf: 'flex-start',
              marginLeft: 10,
            },
            title: 'Add new address',
          },
        },

        {
          type: 'input',
          properties: {
            label: 'First Name',
            style: {
              backgroundColor: 'white',
              borderColor: '#D3D3D3',
              borderWidth: 2,
              width: '47%',
              left: 5,
              position: 'absolute',
              height: 40,
              marginTop: 10,
            },
            placeholderTextColor: 'grey',
          },
        },
        {
          type: 'input',
          properties: {
            label: 'Last Name',
            style: {
              backgroundColor: 'white',
              borderColor: '#D3D3D3',
              borderWidth: 2,
              width: '48%',
              marginRight: 5,
              left: 207,

              height: 40,
              marginTop: 10,
            },
            placeholderTextColor: 'grey',
          },
        },
        {
          type: 'input',
          properties: {
            label: 'Address',
            style: {
              backgroundColor: 'white',
              borderColor: '#D3D3D3',
              borderWidth: 2,
              width: '97.5%',
              height: 65,
              marginLeft: 5,
              marginTop: 4,
            },
            placeholderTextColor: 'grey',
          },
        },
        {
          type: 'input',
          properties: {
            label: 'City',
            style: {
              backgroundColor: 'white',
              borderColor: '#D3D3D3',
              borderWidth: 2,
              width: '47%',
              left: 5,
              position: 'absolute',
              height: 40,
              marginTop: 4,
            },
            placeholderTextColor: 'grey',
          },
        },
        {
          type: 'input',
          properties: {
            label: 'Select State',
            style: {
              backgroundColor: 'white',
              borderColor: '#D3D3D3',
              borderWidth: 2,
              width: '48%',
              marginRight: 5,
              left: 207,

              height: 40,
              marginTop: 4,
            },
            placeholderTextColor: 'grey',
          },
        },
        {
          type: 'input',
          properties: {
            label: 'Pin Code(6 digit)',
            style: {
              backgroundColor: 'white',
              borderColor: '#D3D3D3',
              borderWidth: 2,
              width: '47%',
              left: 5,
              position: 'absolute',
              height: 40,
              marginTop: 4,
            },
            placeholderTextColor: 'grey',
          },
        },
        {
          type: 'input',
          properties: {
            label: 'Mobile Number',
            style: {
              backgroundColor: 'white',
              borderColor: '#D3D3D3',
              borderWidth: 2,
              width: '48%',
              marginRight: 5,
              left: 207,

              height: 40,
              marginTop: 4,
            },
            placeholderTextColor: 'grey',
          },
        },
        {
          type: 'button',
          properties: {
            title: 'SAVE ADDRESS',
            onPress: 'closeModal',
            buttonStyle: {
              backgroundColor: 'red',
              borderColor: 'red',
              width: '98%',
              left: 70,
              borderWidth: 3,
              marginTop: 5,
              alignSelf: 'center',
              marginRight: 140,
            },
            titleStyle: {color: 'white'},
          },
        },
      ],
    },
  ],
};

export default class App extends React.Component {
  render() {
    return (
      <>
        <UiBuilder source={addAdressData} />
      </>
    );
  }
}
