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
import { applyTheme } from "../utility/utils";
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
                        let properties = theme ? applyTheme(children.properties, theme) : children.properties

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

                        // Apply theme on icon
                        let properties = theme ? applyTheme(children.properties, theme) : children.properties

                        return (<Icon
                            containerStyle={properties.containerStyle}
                            name={properties.name}
                            color={properties.color}
                            size={properties.size}
                            onPress={children.properties.onPress === 'closeModal' ? () => this.inVisibleModal() : children.properties.onPress}
                        />)
                    }
                })()}

                {(() => {
                    if (children.type === 'input') {

                        // Applying theme on text input
                        let properties = theme ? applyTheme(children.properties, theme) : children.properties

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
                        let properties = theme ? applyTheme(children.properties, theme) : children.properties

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
        const properties = theme ? applyTheme(this.props.properties, theme) : this.props.properties;
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

// TODO: Will add propTypes and defaultProps
// To run typechecking on the props for a component, for validating a props
ModalComponent.propTypes = {

}

// Defaultprops is to set the default props for the class.
ModalComponent.defaultProps = {

}

