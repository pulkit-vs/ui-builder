/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import Modal from "react-native-modal";
import PropTypes from "prop-types";
import React from "react";
import { Button, Icon } from "react-native-elements";
import { NavigationContext } from "@react-navigation/native";
import { View, Text, TextInput, KeyboardAvoidingView } from "react-native";

import { CLOSE_MODAL } from "../utility/utils";
import { applyTheme } from "../utility/utils";
import { theme } from "../../index";

export default class ModalComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalVisible: true,
      values: [],
    };
    if (theme) {
      // Applying theme on components.
      props.properties = applyTheme(props.properties, theme);

      props.childrens.forEach((children) => {
        children.properties = applyTheme(children.properties, theme);
      });
    }
  }

  static contextType = NavigationContext;

  inVisibleModal() {
    this.setState({isModalVisible: !this.state.isModalVisible});
  }

  onChangeText(event, index) {
    let updateState = this.state.values;
    if (
      this.state.values.length === 0 ||
      this.state.values.findIndex((val) => val.key === index) === -1
    ) {
      updateState.push({key: index, value: event});
    } else {
      const activeIndex = this.state.values.findIndex(
        (val) => val.key === index,
      );
      updateState[activeIndex].value = event;
    }
    this.setState({values: updateState});
  }

  getChildrenData(index, children) {
    const navigation = this.context;
    return (
      <View>
        {(() => {
          if (children.type === 'text') {
            return (
              <Text
                style={children.properties.style}
                onPress={
                  this.props.onPress && this.props.onPress.navigation
                    ? () => {
                        this.setState({
                          isModalVisible: !this.state.isModalVisible,
                        });
                        navigation.navigate(this.props.onPress.screenName);
                      }
                    : () => this.props.onPress
                }
                key={index}>
                {children.properties.title}
              </Text>
            );
          }
        })()}

        {/* TODO: We will make a common method to handle onPress for Modal. */}

        {(() => {
          if (children.type === 'icon') {
            return (
              <Icon
                containerStyle={children.properties.containerStyle}
                name={children.properties.name}
                color={children.properties.color}
                size={children.properties.size}
                onPress={
                  children.properties.onPress === 'closeModal'
                    ? () => this.inVisibleModal()
                    : children.properties.onPress &&
                      children.properties.onPress.navigation
                    ? () => {
                        this.setState({
                          isModalVisible: !this.state.isModalVisible,
                        });
                        navigation.navigate(
                          children.properties.onPress.screenName,
                        );
                      }
                    : children.properties.onPress
                }
                key={index}
              />
            );
          }
        })()}

        {(() => {
          if (children.type === 'input') {
            return (
              <TextInput
                onChangeText={(event) => this.onChangeText(event, index)}
                placeholder={children.properties.label}
                selectionColor={children.properties.style.selectionColor}
                style={children.properties.style}
                value={
                  this.state.values.find((val) => val.key === index)
                    ? this.state.values.find((val) => val.key === index).value
                    : ''
                }
                placeholderTextColor={children.properties.placeholderTextColor}
                key={index}
              />
            );
          }
        })()}

        {(() => {
          if (children.type === 'button') {
            return (
              <Button
                title={children.properties.title}
                onPress={
                  children.properties.onPress &&
                  children.properties.onPress.navigation
                    ? () => {
                        this.setState({
                          isModalVisible: !this.state.isModalVisible,
                        });
                        navigation.navigate(
                          children.properties.onPress.screenName,
                        );
                      }
                    : children.properties.onPress === 'closeModal'
                    ? () => this.inVisibleModal()
                    : children.properties.onPress()
                }
                disabled={children.properties.disabled}
                buttonStyle={children.properties.buttonStyle}
                titleStyle={children.properties.titleStyle}
                type={children.properties.buttonType}
                loading={children.properties.loading}
                key={index}
              />
            );
          }
        })()}
      </View>
    );
  }

  render() {
    const navigation = this.context;
    const closeModal = this.props.properties.closeModal;
    return (
      <Modal
        isVisible={this.state.isModalVisible}
        {...this.props.properties}
        style={this.props.properties.style}
        backdropColor={this.props.properties.backdropColor}
        onBackdropPress={
          closeModal.includes(CLOSE_MODAL.onBackdropPress)
            ? () => this.inVisibleModal()
            : null
        }
        onBackButtonPress={
          closeModal.includes(CLOSE_MODAL.onBackButtonPress)
            ? () => this.inVisibleModal()
            : this.props.properties.onBackButtonPress &&
              this.props.properties.onBackButtonPress.navigation
            ? () => {
                this.setState({isModalVisible: !this.state.isModalVisible});
                navigation.navigate(
                  this.props.properties.onBackButtonPress.screenName,
                );
              }
            : null
        }
        onSwipeComplete={
          closeModal.includes(CLOSE_MODAL.onSwipeComplete)
            ? () => this.inVisibleModal()
            : null
        }
        swipeDirection={
          closeModal.includes(CLOSE_MODAL.onSwipeComplete)
            ? this.props.properties.swipeDirection
            : null
        }>
        <KeyboardAvoidingView behavior="position" enabled>
          {this.props.childrens.map((children, index) => {
            return this.getChildrenData(index, children);
          })}
        </KeyboardAvoidingView>
      </Modal>
    );
  }
}

// To run typechecking on the props for a component, for validating a props
ModalComponent.propTypes = {
  properties: PropTypes.shape({
    style: PropTypes.shape({
      backgroundColor: PropTypes.string,
      margin: PropTypes.number,
      marginBottom: PropTypes.number,
      marginTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      width: PropTypes.string,
    }),
    backdropColor: PropTypes.string,
    closeModal: PropTypes.array,
    swipeDirection: PropTypes.string,
  }),

  childrens: PropTypes.array,
};

// Defaultprops is to set the default props for the class.
ModalComponent.defaultProps = {
  properties: {
    style: {
      margin: 0,
      width: '100%',
      marginBottom: 200,
      marginTop: 200,
      backgroundColor: 'yellow',
    },
    closeModal: ['onBackdropPress', 'onBackButtonPress', 'onSwipeComplete'],
    swipeDirection: 'left',
  },
  childrens: [
    {
      type: 'text',
      properties: {
        style: {
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: 10,
          color: 'black',
        },
        title: 'Please add components in a modal',
      },
    },
  ],
};
