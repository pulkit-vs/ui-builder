import React, {Component} from 'react';
import Tts from 'react-native-tts';

import {KEYS} from '../keys/keys';
import {
  METHOD_NAMES,
  GMAIL_URL,
  DRAFT_PATH,
  SEND_PATH,
} from '../constants/constants';
const fetch = require('node-fetch');

export default class MailSendingAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
    };
  }
  async emailControls(url, headers, body) {
    await fetch(url, {
      method: METHOD_NAMES.POST,
      headers: headers,
      body: JSON.stringify(body),
    }).then((res) => {
      return res.json();
    });
  }

  async getDraftID(url, headers) {
    await fetch(url, {
      method: METHOD_NAMES.GET,
      headers: headers,
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => this.setState({id: result.drafts[0].id}));
  }

  async componentDidMount() {
    Tts.speak(' We have started sending your email');

    const {base64Message} = this.props;

    // Authentication Header
    const token = `Bearer ${KEYS.access_TOKEN}`;

    const url = GMAIL_URL + KEYS.EMAIL + DRAFT_PATH;
    const headers = {
      Authorization: token,
      'Content-Type': 'application/json',
    };
    const draftBody = {
      message: {
        raw: base64Message,
      },
    };

    // for creating draft
    await this.emailControls(url, headers, draftBody);
    await this.getDraftID(url, headers);
    const mailSendURL = url + SEND_PATH;
    const sendBody = {
      id: this.state.id,
    };

    //for sending draft message
    await this.emailControls(mailSendURL, headers, sendBody);
  }

  render() {
    return <></>;
  }
}
