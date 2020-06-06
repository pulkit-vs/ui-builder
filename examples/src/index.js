import React from 'react';
import {get} from 'lodash';
import {View, KeyboardAvoidingView, ScrollView} from 'react-native';

export default class Components extends React.Component {

  render() {
    return (
      <KeyboardAvoidingView
        enabled
        behavior={'position'}
        keyboardVerticalOffset={-200}>
        <ScrollView>
          <View>
           
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
