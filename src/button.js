/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default class Button extends React.Component {

    render() {
        const { componentData } = this.props;
        const properties = componentData.properties;
        const style = properties.showCircle ? { ...styles.circleShapeView, ...properties.buttonStyle } :
            properties.ShowSquare ? { ...styles.squareShapeView, ...properties.buttonStyle } :
                properties.showRectangle ? { ...styles.rectangleShapeView, ...properties.buttonStyle } :
                    properties.showTriangle ? { ...styles.triangleShapeView, ...properties.buttonStyle } :
                        { ...styles.buttonStyle, ...properties.buttonStyle }
        return (
            <View>
                <Button
                    title={properties.title}
                    onPress={() => properties.onPress()}
                    disabled={properties.disabled}
                    buttonStyle={style}
                    color={properties.color ? properties.color : null}
                    type={properties.type ? properties.type : "outline"}
                    {...properties.loading ? loading : null}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    buttonStyle: {
        backgroundColor: "#fdd7ac",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        alignSelf: "center",
        left: 24,
        right: 24
    },

    circleShapeView: {
        //To make Circle Shape
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: '#fdd7ac',
        position: "absolute"
    },

    rectangleShapeView: {
        //To make Rectangle Shape
        marginTop: 20,
        width: 120 * 2,
        height: 120,
        backgroundColor: '#14ff5f',
    },

    triangleShapeView: {
        //To make Triangle Shape
        width: 0,
        height: 0,
        borderLeftWidth: 60,
        borderRightWidth: 60,
        borderBottomWidth: 120,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#606070',
    },

    squareShapeView: {
        //To make Square Shape
        width: 100,
        height: 100,
        backgroundColor: '#14ff5f',
    },
})