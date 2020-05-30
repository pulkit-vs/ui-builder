import React, {Component} from 'react';
import VoiceComponent from './voice';
import {checkStatus} from './util';
import ShowDetails from './ShowDetails';

export default class TakeInput extends Component {
  constructor() {
    super();
    this.state = {
      sendEmail: '',
      body: '',
      subject: '',
      to: '',
      cc: '',
      bcc: '',
      recipient: '',
      confirm: '',
      index: 0,
    };
    this.emailInputControls = this.emailInputControls.bind(this);
  }

  // this method will be called on click of refresh button and will set the index value to 1.
  startAgain = () => {
    this.setState({
      sendEmail: '',
      body: '',
      subject: '',
      to: '',
      cc: '',
      bcc: '',
      recipient: '',
      confirm: '',
      index: -1,
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
    const position = this.state.index / 2 - 1;
    val = val.toLocaleLowerCase();
    console.log(val);
    if (val.includes('email') && this.state.index < 2) {
      return this.setState({
        index: this.state.index + 1,
      });
    } else {
      if (val.includes('back')) {
        return this.goOneStepBack();
      }
      if (val.includes('refresh')) {
        return this.startAgain();
      }
      if (this.state.index === 13) {
        return this.setState({
          index: this.state.index + 1,
          recipient: val,
        });
      }
      if (this.state.index === 15 && recipientAdded) {
        let newVal = this.state.to + ' ' + val;
        return this.setState({
          index: this.state.index + 1,
          to: newVal,
        });
      }
      if (this.state.index === 15 && !recipientAdded) {
        return this.setState({
          index: this.state.index + 1,
          confirm: val,
        });
      }
      if (this.state.index === 17 && recipientAdded) {
        val = val.toLocaleLowerCase();
        return this.setState({
          index: this.state.index + 1,
          confirm: val,
        });
      } else {
        return this.setState({
          index: this.state.index + 1,
          [stateKeys[position]]: val,
        });
      }
    }
  }

  UNSAFE_componentWillUpdate(nextprops, nextState) {
    if (this.state.index !== nextState.index) {
      checkStatus(nextState);
    }
  }
  render() {
    return (
      <>
        <ShowDetails input={this.state} />
        <VoiceComponent handle={this.emailInputControls} />
      </>
    );
  }
}
