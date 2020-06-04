import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

import MailInput from '../mailAPI/MailInput';

import {emailDataCleaning} from '../dataCleaning/cleaner';
import {CONSTANTS} from '../constants/constants';

export default class ShowDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmation: props.input.confirm,
    };
  }
  sendingEmailProcess = () => {
    this.setState({confirmation: 'yes'});
  };
  render() {
    const emailAttributes = emailDataCleaning(this.props.input);
    const sendEmail = this.state.confirmation.includes(CONSTANTS.YES);
    console.log(emailAttributes);
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.text}>
            To:{'\n'}
            {emailAttributes.to}
          </Text>
          <Text style={styles.text}>
            Cc:{'\n'}
            {emailAttributes.cc}
          </Text>
          <Text style={styles.text}>
            Bcc:{'\n'}
            {emailAttributes.bcc}
          </Text>
          <Text style={styles.text}>
            Subject:{'\n'}
            {emailAttributes.subject}
          </Text>
          <Text style={styles.text}>
            Body:{'\n'}
            {emailAttributes.body}
          </Text>
        </View>
        {sendEmail ? <MailInput details={emailAttributes} /> : null}
        <Button title="SEND EMAIL" onPress={this.sendingEmailProcess} />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '90%',
    width: '90%',
    paddingLeft: 5,
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    marginTop: 15,
  },
});
