import React, {Component} from 'react';
import VoiceComponent from './voice';
import {checkStatus, emailStatus} from './util';
import Mailer from '../sendMail/mail';

export default class TakeInput extends Component {
  constructor() {
    super();
    this.state = {
      sendEmail: '',
      body: 'Body',
      subject: 'Subject',
      to: 'saksham 695 @gmail.com',
      cc: '',
      bcc: '',
      recipient: '',
      index: 0,
    };
  }
  handleBody = (val) => {
    const stateKeys = Object.keys(this.state);

    if (this.state.index === 6) {
      this.setState({
        recipient: val,
      });
    }
    if (this.state.index === 7) {
      let newVal = this.state.to + ' ' + val;
      console.log('added recepients ', newVal);
      this.setState({
        to: newVal,
      });
    } else {
      this.setState({
        [stateKeys[this.state.index]]: val,
      });
    }

    this.setState({
      index: this.state.index + 1,
    });
  };

  componentDidMount() {
    newIndex = checkStatus(this.state);
  }

  componentWillUpdate(nextprops, nextState) {
    if (this.state.index !== nextState.index) {
      console.log('componentWillUpdate', nextState);
      newIndex = checkStatus(nextState);
    }
  }
  render() {
    const emailVal = emailStatus(this.state);
    return (
      <>
        <VoiceComponent handle={this.handleBody} />
        {emailVal ? <Mailer emailDetails={this.state} /> : null}
      </>
    );
  }
}
