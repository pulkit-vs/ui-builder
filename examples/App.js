/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import UiBuilder from 'react-native-ui-builder';
import UiBuilder from "./src/index";
import React from 'react';

const source = {
  // theme: 'lightTheme',
  data: [
    {
      type: 'modal',
      properties: {
        style: {
          margin: 0,
          top: '15%',
          maxHeight: 400,
          backgroundColor: 'white',
          borderRadius: 15
        },
        backdropColor: 'grey',
        closeModal: ['onBackButtonPress', 'onSwipeComplete'],
        swipeDirection: 'left'
      },
      childrens: [
        {
          type: 'icon',
          properties: {
            containerStyle: {
              alignSelf: 'flex-end',
              right: 20,
              //  marginBottom: 20,
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
              marginRight: 137,
            },
            titleStyle: { color: 'white' },
          },
        }
      ]
    }
  ]
}

export default class App extends React.Component {
  render() {
    return (
      <>
        <UiBuilder source={source} />
      </>
    );
  }
}
