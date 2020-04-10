/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Button} from 'react-native-elements';
import {View} from 'react-native';
import {applyThemeOnButtonStyle} from '../theme';
import {createButtonStyle} from '../style/buttonStyle';
import {theme} from '../../App';

export default class ButtonComponent extends React.Component {
  render() {
    const {componentData} = this.props;
    const properties = componentData.properties;

    // Update pre-defined style as per given props.
    let style = createButtonStyle(properties);

    // Applying theme on button style
    style = theme ? applyThemeOnButtonStyle(style, theme) : style;
    const textstyle = {
      color: 'black',
    };
    return (
      <View>
        {/* ThemeProvider is to provide a theme for a component. */}
        {/* <ThemeProvider theme={{ Button: createStyle(theme) }}> */}
        <Button
          title={properties.title}
          onPress={() => properties.onPress()}
          disabled={properties.disabled}
          buttonStyle={style.buttonStyle}
          titleStyle={textstyle.color}
          type={properties.type ? properties.type : 'outline'}
          {...(properties.loading ? loading : null)}
        />
        {/* </ThemeProvider> */}
      </View>
    );
  }
}
