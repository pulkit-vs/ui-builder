/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { Button } from "react-native-elements";
import { View, StyleSheet } from "react-native";

export default class ButtonComponent extends React.Component {
  render() {
    const { componentData } = this.props;
    const properties = componentData.properties;
    const style = properties.showCircle
      ? { ...styles.circleShapeView, ...properties.buttonStyle }
      : properties.ShowSquare
      ? { ...styles.squareShapeView, ...properties.buttonStyle }
      : properties.showRectangle
      ? { ...styles.rectangleShapeView, ...properties.buttonStyle }
      : properties.showTriangle
      ? { ...styles.triangleShapeView, ...properties.buttonStyle }
      : { ...styles.buttonStyle, ...properties.buttonStyle };
    return (
      <View>
        <Button
          buttonStyle={style}
          color={properties.color ? properties.color : null}
          disabled={properties.disabled}
          onPress={() => properties.onPress()}
          title={properties.title}
          type={properties.type ? properties.type : "outline"}
          {...(properties.loading ? loading : null)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#fdd7ac",
    borderRadius: 12,
    justifyContent: "center",
    left: 24,
    position: "absolute",
    right: 24
  },

  circleShapeView: {
    //To make Circle Shape
    backgroundColor: "#fdd7ac",
    borderRadius: 100 / 2,
    height: 100,
    position: "absolute",
    width: 100
  },

  rectangleShapeView: {
    //To make Rectangle Shape
    backgroundColor: "#14ff5f",
    height: 120,
    marginTop: 20,
    width: 120 * 2
  },

  triangleShapeView: {
    //To make Triangle Shape
    backgroundColor: "transparent",
    borderBottomColor: "#606070",
    borderBottomWidth: 120,
    borderLeftColor: "transparent",
    borderLeftWidth: 60,
    borderRightColor: "transparent",
    borderRightWidth: 60,
    borderStyle: "solid",
    height: 0,
    width: 0
  },

  squareShapeView: {
    //To make Square Shape
    backgroundColor: "#14ff5f",
    height: 100,
    width: 100
  }
});
