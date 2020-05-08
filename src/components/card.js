import PropTypes from "prop-types";
import React, { Component } from "react";
import { Card } from "react-native-elements";
import { ScrollView, Text, View } from "react-native";

import { applyTheme } from "../utility/utils";
import { theme } from "../../index";

export default class CardComponent extends Component {
  constructor() {
    if (theme) {
      this.props = theme ? applyTheme(this.props, theme) : this.props;
    }
  }
  render() {
    return (
      <Card
        containerStyle={this.props.containerStyle}
        dividerStyle={this.props.dividerStyle}
        title={this.props.title}
        titleStyle={this.props.titleStyle}
        wrapperStyle={this.props.wrapperStyle}
      >
        <ScrollView>
          {this.props.childrens.length === 0 ? (
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                marginTop: 100,
                marginLeft: 30,
              }}
            >
              Please Add Your Component Inside Card
            </Text>
          ) : (
            this.props.childrens
          )}
        </ScrollView>
      </Card>
    );
  }
}

CardComponent.propTypes = {
  title: PropTypes.string,
  containerStyle: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number,
    marginTop: PropTypes.number,
    padding: PropTypes.number,
    textAlign: PropTypes.string,
  }),
  wrapperStyle: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number,
    marginTop: PropTypes.number,
    padding: PropTypes.number,
    textAlign: PropTypes.string,
  }),
  dividerStyle: PropTypes.shape({
    borderColor: PropTypes.string,
    borderWidth: PropTypes.number,
    padding: PropTypes.number,
  }),
};

CardComponent.defaultProps = {
  containerStyle: {
    backgroundColor: "white",

    height: 300,
    width: 200,
  },
  titleStyle: {
    fontSize: 20,
  },
};