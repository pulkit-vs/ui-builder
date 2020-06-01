import {CONSTANTS} from '../constants/constants';
// checks the email validation
function validEmail(e) {
  const filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
  return String(e).search(filter) != -1;
}

// seperate 2 emails and comma between them
function seperateEmails(emailIDs) {
  let updatedEmail = '';
  let temporaryEmail = '';
  if (emailIDs) {
    let filteredEmailIDs = emailIDs.replace(/dot/g, '.');
    filteredEmailIDs = filteredEmailIDs.replace(/Dot/g, '.');
    emailIDs = filteredEmailIDs;
  }
  emailIDs = emailIDs.split(' ').join('').toLocaleLowerCase();

  for (let i = 0; i < emailIDs.length; i++) {
    temporaryEmail = temporaryEmail + emailIDs[i];
    if (
      emailIDs[i] === CONSTANTS.M &&
      emailIDs[i - 1] === CONSTANTS.O &&
      emailIDs[i - 2] === CONSTANTS.C &&
      emailIDs[i - 3] === '.'
    ) {
      const checkValidity = validEmail(temporaryEmail);
      if (checkValidity) {
        if (updatedEmail.length > 0) {
          updatedEmail = updatedEmail + ',' + temporaryEmail;
        } else {
          updatedEmail = updatedEmail + temporaryEmail;
        }
      }
      temporaryEmail = '';
    }
  }
  return updatedEmail;
}

export function emailDataCleaning(EmailInputs) {
  const keys = Object.keys(EmailInputs);
  keys.forEach((itr) => {
    if (itr === CONSTANTS.TO || itr === CONSTANTS.BCC || itr === CONSTANTS.CC) {
      const filteredEmailInputs = seperateEmails(EmailInputs[itr]);
      EmailInputs[itr] = filteredEmailInputs;
    }
  });
  return EmailInputs;
}
