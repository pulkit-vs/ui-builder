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
    Tts.speak('Click on the microphone to send e-mail');
  }
  render() {
    return (
      <>
        <Icon
          raised
          name="microphone"
          type="font-awesome"
          size={50}
          color="#CC6699"
          onPress={() => this.sendEmail(this.props.emailDetails)}
          underlayColor="#99CCFF"
          containerStyle={{margin: '30%', alignSelf: 'center'}}
        />
      </>
    );
  }
}
