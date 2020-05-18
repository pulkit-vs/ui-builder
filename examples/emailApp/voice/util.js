import Tts from 'react-native-tts';

export function checkStatus(state) {
  const boolSend = state.sendEmail.includes('yes');

  const addMore = state.recipient.includes('yes');
  console.log('speak function', state.index, boolSend, addMore);
  if (state.index === 0) {
    Tts.speak(
      'Welcome to this email sending app , I can help you in sending emails .  Do you want to send emails ?',
    );
  }
  if (state.index === 1 && boolSend) {
    Tts.speak(' Then you can tell me what do you want to send');
  }
  if (state.index === 2 && boolSend) {
    Tts.speak('Now you can add subject for your mail');
  }
  if (state.index === 3 && boolSend) {
    Tts.speak(
      'Subject and Body are successfully added now you can tell to whom you want to send this mail',
    );
  }
  if (state.index === 4 && boolSend) {
    Tts.speak('You can add cc , if you want to');
  }
  if (state.index === 5 && boolSend) {
    Tts.speak('you can add bcc here ');
  }
  if (state.index === 6 && boolSend) {
    Tts.speak('Do you want to add more recipient');
  }
  if (state.index === 7 && addMore) {
    Tts.speak(' you  can  add more  recipients here ');
  }
  if (state.index === 7 && !addMore) {
    Tts.speak(' you  can  send e-mail bt clicking on send button ');
  }
  if (state.index === 1 && !boolSend) {
    Tts.speak(
      'I am glad that you visited here . Wish I could help you  somehow . Dont forget to come here when you need to send emails',
    );
  }
}
export function emailStatus(state) {
  return state.to.length !== 0 && state.body.length !== 0;
}
