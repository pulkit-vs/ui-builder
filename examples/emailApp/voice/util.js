import Tts from 'react-native-tts';

export async function checkStatus(state) {
  console.log('entering function');
  const boolSend = state.sendEmail.includes('yes');
  const addMore = state.recipient.includes('yes');
  if (state.index === 0) {
    await Tts.speak(
      'Welcome to this email sending app , I can help you in sending emails .  Do you want to send emails ?',
    );
  }

  if (state.index === 1 && boolSend) {
    await Tts.speak(' Tell me the content you want to send ');
  }
  if (state.index === 2 && boolSend) {
    await Tts.speak('Now you can add subject for your mail');
  }
  if (state.index === 3 && boolSend) {
    await Tts.speak(
      'Subject and Body are successfully added now you can tell to whom you want to send this mail',
    );
  }
  if (state.index === 4 && boolSend) {
    await Tts.speak('You can add cc , if you want to');
  }
  if (state.index === 5 && boolSend) {
    await Tts.speak('you can add bcc here ');
  }
  if (state.index === 6 && boolSend) {
    await Tts.speak('Do you want to add more recipient');
  }
  if (state.index === 7 && addMore) {
    await Tts.speak(' you  can  add more  recipients here ');
  }
  if (state.index === 7 && !addMore) {
    await Tts.speak(' Are you sure you want to send this e-mail. ');
  }
  if (state.index === 8 && addMore) {
    await Tts.speak(' Are you sure you want to send this e-mail. ? ');
  }

  if (state.index === 1 && !boolSend) {
    await Tts.speak(
      'I am glad that you visited here . Wish I could help you  somehow . Do not forget to come here when you need to send emails',
    );
  }
}
