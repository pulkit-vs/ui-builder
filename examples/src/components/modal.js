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
import { StyleSheet } from 'react-native';
import { View, Text, TextInput } from 'react-native';

export default class ModalComponent extends React.Component {

    state = {
        isModalVisible: true
    };

    inVisibleModal() {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    }

    render() {

        return (
            <Modal isVisible={this.state.isModalVisible}
                backdropColor={"grey"}
                style={{ marginBottom: 0, margin: 15 }}
                onSwipeComplete={() => this.inVisibleModal()}
                swipeDirection="left"
                onBackdropPress={() => this.inVisibleModal()}
                onBackButtonPress={() => this.inVisibleModal()}
            >
                <View style={{ flex: 1, position: 'absolute', width: "100%", backgroundColor: 'yellow' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 40 }} > Custom Modal </Text>

                    <Icon
                        containerStyle={{ alignSelf: 'flex-end', right: 20, marginTop: 20, position: 'absolute' }}
                        name={'close'}
                        color={'red'}
                        size={40}
                        onPress={() => this.inVisibleModal()}
                    />
                    <TextInput
                        // onChangeText={this.onChangeText}
                        placeholder={'Email'}
                        style={{ backgroundColor: 'white', borderColor: 'grey', borderWidth: 2, width: "60%", left: 70, marginTop: 40 }}
                        value={''}
                        placeholderTextColor={'grey'}
                    />

                    <Button
                        title={"Close Modal"}
                        onPress={() => this.inVisibleModal()}
                        buttonStyle={{ backgroundColor: 'white', width: "60%", left: 70, borderWidth: 3, marginTop: 40, marginBottom: 10 }}
                        titleStyle={{ color: 'black' }}
                    />
                </View>

            </Modal>
        );
    }
}


// To run typechecking on the props for a component, for validating a props
ModalComponent.propTypes = {

}

// Defaultprops is to set the default props for the class.
ModalComponent.defaultProps = {

}

