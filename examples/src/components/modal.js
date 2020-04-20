/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Icon } from 'react-native-elements';
import { CLOSE_MODAL } from "../utility/utils";
import { View, Text, TextInput } from 'react-native';
import { applyThemeOnButtonStyle } from "../theme/buttonTheme";
import { applyThemeOnModal } from "../theme/modalTheme";
import { applyThemeOnText } from "../theme/textTheme";
import { applyThemeOnTextInputStyle } from "../theme/textInputTheme";
import { theme } from "../../App";

export default class ModalComponent extends React.Component {

    state = {
        isModalVisible: true,
        value: ''
    };

    inVisibleModal() {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    }

    onChangeText(event) {
        this.setState({ value: event });
    }

    getChildrenData(children) {
        return (
            <View>
                {(() => {
                    if (children.type === 'text') {

                        // Applying theme on text
                        const properties = theme ? applyThemeOnText(theme, children.properties) : children.properties

                        console.log('text Properties:', JSON.stringify(properties));
                        return (<Text
                            style={properties.style}
                        >
                            {properties.title}
                        </Text>
                        )
                    }
                })()}

                {(() => {
                    if (children.type === 'icon') {

                        // Will apply theme on icon
                        //    const properties = theme ? applyThemeOnIcon(theme, children.properties) : children.properties  

                        return (<Icon
                            containerStyle={children.properties.containerStyle}
                            name={children.properties.name}
                            color={children.properties.color}
                            size={children.properties.size}
                            onPress={children.properties.onPress === 'closeModal' ? () => this.inVisibleModal() : children.properties.onPress}
                        />)
                    }
                })()}

                {(() => {
                    if (children.type === 'input') {

                        // Applying theme on text input
                        const properties = theme ? applyThemeOnTextInputStyle(theme, children.properties) : children.properties

                        return (<TextInput

                            onChangeText={() => this.onChangeText()}
                            placeholder={properties.label}
                            selectionColor={properties.style.selectionColor}
                            style={properties.style}
                            value={this.state.value}
                            placeholderTextColor={properties.placeholderTextColor}
                        />)
                    }
                })()}

                {(() => {
                    if (children.type === 'button') {

                        // Applying theme on button style
                        const properties = theme ? applyThemeOnButtonStyle(theme, children.properties) : children.properties

                        return (<Button
                            title={properties.title}
                            onPress={() => this.inVisibleModal()}
                            disabled={properties.disabled}
                            buttonStyle={properties.buttonStyle}
                            titleStyle={properties.titleStyle}
                            type={properties.buttonType}
                            loading={properties.loading}
                        />)
                    }
                })()}
            </View>
        );
    }

    render() {

        const closeModal = this.props.properties.closeModal;
        const properties = theme ? applyThemeOnModal(theme, this.props.properties) : this.props.properties;

        return (
            <Modal
                isVisible={this.state.isModalVisible}
                {...properties}
                style={properties.style}
                backdropColor={properties.backdropColor}
                onBackdropPress={closeModal.includes(CLOSE_MODAL.onBackdropPress) ? () => this.inVisibleModal() : null}
                onBackButtonPress={closeModal.includes(CLOSE_MODAL.onBackButtonPress) ? () => this.inVisibleModal() : null}
                onSwipeComplete={closeModal.includes(CLOSE_MODAL.onSwipeComplete) ? () => this.inVisibleModal() : null}
                swipeDirection={closeModal.includes(CLOSE_MODAL.onSwipeComplete) ? this.props.properties.swipeDirection : null}
            >

                {this.props.childrens.map(children => {
                    return this.getChildrenData(children)
                })}
            </Modal>
        )
    }
}

// To run typechecking on the props for a component, for validating a props
ModalComponent.propTypes = {

}

// Defaultprops is to set the default props for the class.
ModalComponent.defaultProps = {

}

