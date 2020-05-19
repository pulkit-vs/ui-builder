import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
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
      index: 0,
    };
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
  emailInputControls = (val) => {
    const stateKeys = Object.keys(this.state);
    const recipientAdded = this.state.recipient.includes('yes');

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
  };

  componentDidMount() {
    checkStatus(this.state);
  }

  componentWillUpdate(nextprops, nextState) {
    if (this.state.index !== nextState.index) {
      checkStatus(nextState);
    }
  }
  render() {
    const sendEmail = this.state.confirm.includes('yes');
    return (
      <>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 27,
            fontWeight: 'bold',
            marginTop: 30,
            color: 'plum',
          }}>
          THIS IS AN EMAIL SENDING APP
        </Text>
        <Text
          style={{
            alignSelf: 'flex-end',
            fontSize: 15,
            marginTop: 15,
            color: 'indigo',
          }}>
          Don't forget to press on microphone before speaking
        </Text>
        {sendEmail ? (
          <Mailer emailDetails={this.state} />
        ) : (
          <VoiceComponent handle={this.emailInputControls} />
        )}
        <View style={{flexDirection: 'row'}}>
          <Button
            title="BACK"
            buttonStyle={{
              backgroundColor: 'white',
              borderWidth: 2,
              borderColor: 'purple',
            }}
            titleStyle={{
              color: 'purple',
              fontFamily: 'arial',
              fontSize: 20,
              fontWeight: 'bold',
            }}
            containerStyle={{
              width: '40%',
              marginLeft: '8%',
            }}
            onPress={this.goOneStepBack}
          />

          <Button
            title="REFRESH"
            buttonStyle={{
              backgroundColor: 'white',
              borderWidth: 2,
              borderColor: 'purple',
            }}
            titleStyle={{
              color: 'purple',
              fontFamily: 'arial',
              fontSize: 20,
              fontWeight: 'bold',
            }}
            containerStyle={{
              width: '40%',
              marginLeft: '5%',
            }}
            onPress={this.startAgain}
          />
        </View>
      </>
    );
  }
}
