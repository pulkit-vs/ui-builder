import React, {Component} from 'react';
import base64 from 'react-native-base64';

export default class MailInput extends Component {
  render() {
    const {details} = this.props;

    const emailMessage = `To:${details.to}\nFrom:${'abcd'}\nSubject:${
      details.subject
    }\n\n${details.body}`;
    console.log(emailMessage);
    const encodedMessage = base64.encode(emailMessage);
    console.log(encodedMessage);

    return <></>;
  }
}
