import React from 'react';
import {Icon} from 'react-native-elements';
import Tts from 'react-native-tts';
import {emailDataCleaning} from '../dataCleaning/cleaner';

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
  componentDidMount() {
    Tts.speak('Now we are sending this mail ');
    this.sendEmail(this.props.emailDetails);
  }
  render() {
    return <></>;
  }
}
