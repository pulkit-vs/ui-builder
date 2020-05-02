/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import UiBuilder from 'react-native-ui-builder';
import React from 'react';
import UiBuilder from './src/navigation/navigation';

const source = {
  navigation: true,
  screenName: 'Home',

  data: [
    {
      type: 'text',
      properties: {
        title: 'Carousel',
        style: {
          textAlign: 'center',
          fontSize: 30,
        },
      },
    },
    {
      type: 'carousel',
      properties: {
        images: [
          'https://images.pexels.com/photos/1769369/pexels-photo-1769369.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          'https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
          'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          'https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        ],
        itemWidth: 500,
        sliderWidth: 500,
        autoplay: true,
        autoplayInterval: 1000,
      },
    },
  ],
};

export default class App extends React.Component {
  render() {
    return <UiBuilder source={source} />;
  }
}
