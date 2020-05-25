import React, {Component} from 'react';
import Mailer from '../sendMail/mail';
import VoiceComponent from './voice';
import {checkStatus} from './util';

export default class TakeInput extends Component {
  constructor() {
    super();
    this.state = {
      sendEmail: '',
      body: '',
      subject: '',
      to: ' ',
      cc: '',
      bcc: '',
      recipient: '',
      confirm: '',
      index: -1,
    };
    this.emailInputControls = this.emailInputControls.bind(this);
  }

  // this method will be called on click of refresh button and will set the index value to 1.
  startAgain = () => {
    this.setState({
      index: 1,
      body: '',
      subject: '',
      to: ' ',
      cc: '',
      bcc: '',
      recipient: '',
      confirm: '',
    });
  };

  //this method will be called on click of BACK button and set to index to one smaller than previous index .
  goOneStepBack = () => {
    this.setState({
      index: this.state.index - 1,
      confirm: 'no',
    });
  };

  //method used to set the all the attributes of email
  emailInputControls(val) {
    const stateKeys = Object.keys(this.state);
    const recipientAdded = this.state.recipient.includes('yes');
    val = val.toLocaleLowerCase();
    console.log(val);
    if (val.includes('email')) {
      return this.setState({
        index: this.state.index + 1,
      });
    }
    if (val.includes('back')) {
      return this.goOneStepBack();
    }
    if (val.includes('refresh')) {
      return this.startAgain();
    }
    if (this.state.index === 6) {
      this.setState({
        recipient: val,
      });
    }
    if (this.state.index === 7 && recipientAdded) {
      let newVal = this.state.to + ' ' + val;
      this.setState({
        to: newVal,
      });
    }
    if (this.state.index === 7 && !recipientAdded) {
      this.setState({
        confirm: val,
      });
    }
    if (this.state.index === 8 && recipientAdded) {
      val = val.toLocaleLowerCase();
      this.setState({
        confirm: val,
      });
    } else {
      this.setState({
        [stateKeys[this.state.index]]: val,
      });
    }

    this.setState({
      index: this.state.index + 1,
    });
  }

  UNSAFE_componentWillUpdate(nextprops, nextState) {
    if (this.state.index !== nextState.index) {
      const time = checkStatus(nextState);
    }
  }
  render() {
    const sendEmail = this.state.confirm.includes('yes');
    return (
      <>
        {sendEmail ? (
          <Mailer emailDetails={this.state} />
        ) : (
          <VoiceComponent handle={this.emailInputControls} />
        )}
      </>
    );
  }
}
