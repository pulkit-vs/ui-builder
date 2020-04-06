/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Button, ThemeProvider } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import { createStyle } from "./theme";
import { customizeStyle } from "./style";
import { theme } from "../App";

export default class ButtonComponent extends React.Component {
    render() {
        const { componentData } = this.props;
        const properties = componentData.properties;

        // Update pre-defined style as per given props.
        customizeStyle(properties)

        return (
            <View>
                {/* ThemeProvider is to provide a theme for a component. */}
                <ThemeProvider theme={{ Button: createStyle(theme) }}>
                    <Button
                        title={properties.title}
                        onPress={() => properties.onPress()}
                        disabled={properties.disabled}
                        // buttonStyle={styles}
                        color={properties.color ? properties.color : null}
                        type={properties.type ? properties.type : "outline"}
                        {...properties.loading ? loading : null}
                    />
                </ThemeProvider>
            </View>
        );
    }
}