import React from 'react';
import {Button} from 'react-native';
import {emailDataCleaning} from '../dataCleaning/cleaner';
import Tts from 'react-native-tts';

const Email = require('../smtp/smtp');
const keys = require('../keys/keys');

export default class Mailer extends React.Component {
  sendEmail = (emailAttributes) => {
    emailAttributes = emailDataCleaning(emailAttributes);
    emailAttributes.to
      ? Email.send({
          Host: 'smtp.gmail.com',
          Username: keys.emailID,
          Password: keys.password,
          To: emailAttributes.to,
          From: keys.emailID,
          Subject: emailAttributes.subject,
          Body: emailAttributes.body,
          Bcc: emailAttributes.bcc,
          Cc: emailAttributes.cc,
        }).then(() =>
          Tts.speak('Your Mail has been successfully sent via this app'),
        )
      : Tts.speak(
          'We cannot further process your Email . Maybe the email address provided is not valid',
        );
  };
  render() {
    return (
      <Button
        title=" Click To Send Mail"
        onPress={() => this.sendEmail(this.props.emailDetails)}></Button>
    );
  }
}
