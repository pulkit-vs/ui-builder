import React from 'react';
import {Text} from 'react-native';

import MailInput from '../mailAPI/MailInput';

import {emailDataCleaning} from '../dataCleaning/cleaner';

export default function ShowDetails(props) {
  const emailAttributes = emailDataCleaning(props.input);
  console.log(emailAttributes);
  const sendEmail = emailAttributes.confirm.includes('yes');
  return (
    <>
      <Text>To:{emailAttributes.to}</Text>
      <Text>Cc:{emailAttributes.cc}</Text>
      <Text>Bcc:{emailAttributes.bcc}</Text>
      <Text>Subject:{emailAttributes.subject}</Text>
      <Text>Body:{emailAttributes.body}</Text>
      {/* {sendEmail ? <MailInput details={emailAttributes} /> : null} */}
    </>
  );
}
