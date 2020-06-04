import React, {Component} from 'react';
import VoiceComponent from './voice';
import {checkStatus} from './util';
import ShowDetails from './ShowDetails';
import {CONSTANTS} from '../constants/constants';

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
      confirm: '',
      index: -1,
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
      confirm: '',
      index: 0,
    });
  };

  //this method will be called on click of BACK button and set to index to one smaller than previous index .
  goOneStepBack = () => {
    this.setState({
      index: this.state.index - 1,
      confirm: CONSTANTS.NO,
    });
  };

  //method used to set the all the attributes of email
  async emailInputControls(emailInputs) {
    const stateKeys = Object.keys(this.state);

    emailInputs = emailInputs.toLocaleLowerCase();

    if (emailInputs.includes('alexa') && this.state.index < 2) {
      return this.setState({
        index: this.state.index + 1,
      });
    } else {
      if (emailInputs.includes(CONSTANTS.BACK)) {
        return this.goOneStepBack();
      } else if (emailInputs.includes(CONSTANTS.REFRESH)) {
        return this.startAgain();
      } else {
        console.log('stateKeys', stateKeys);
        this.setState({
          [stateKeys[this.state.index]]: emailInputs,
        });
        this.setState(
          {
            index: this.state.index + 1,
          },
          () => console.log(this.state),
        );
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
