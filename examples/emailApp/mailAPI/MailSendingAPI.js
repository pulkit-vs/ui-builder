import React, {Component} from 'react';
import {KEYS} from '../keys/keys';

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
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => console.log(result));
  }
  async getDraftID(url, headers) {
    await fetch(url, {
      method: 'GET',
      headers: headers,
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => this.setState({id: result.drafts[0].id}));
  }

  async componentDidMount() {
    const {base64Message} = this.props;
    console.log(base64Message);
    const token = `Bearer ${KEYS.access_TOKEN}`;

    const url =
      'https://www.googleapis.com/gmail/v1/users/' + KEYS.EMAIL + '/drafts';
    const headers = {
      Authorization: token,
      'Content-Type': 'application/json',
    };
    const draftBODY = {
      message: {
        raw: base64Message,
      },
    };

    // for creating draft
    await this.emailControls(url, headers, draftBODY);
    await this.getDraftID(url, headers);

    const newUrl = url + `/send`;
    const sendBODY = {
      id: this.state.id,
    };
    //for sending draft message
    await this.emailControls(newUrl, headers, sendBODY);
  }

  render() {
    return <></>;
  }
}
