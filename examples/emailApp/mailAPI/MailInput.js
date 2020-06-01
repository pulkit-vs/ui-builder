import React, {Component} from 'react';
import base64 from 'react-native-base64';
import MailSendingAPI from './MailSendingAPI';

export default class MailInput extends Component {
  render() {
    const {details} = this.props;
    const emailMessage = `To:${details.to}\ncc:${details.cc}\nbcc:${details.bcc}\nSubject:${details.subject}\n\n${details.body}`;
    const encodedMessage = base64.encode(emailMessage);
    return <>{<MailSendingAPI base64Message={encodedMessage} />}</>;
  }
}
