import Tts from 'react-native-tts';
import {CONSTANTS} from '../constants/constants';
export function checkStatus(state) {
  const boolSend = state.sendEmail.includes(CONSTANTS.YES);

  const indexMappings = [
    'Welcome to this email sending app , I can help you in sending emails .  Do you want to send emails ?',
    'Tell me the content you want to send ',
    'Now you can add subject for your mail',
    'Subject and Body are successfully added now you can tell to whom you want to send this mail',
    'You can add cc , if you want to',
    'you can add bcc here ',
    'Are you sure you want to send this e-mail. ? ',
  ];

  if (!boolSend && state.index == 1) {
    return Tts.speak(
      'I am glad that you visited here . Wish I could help you  somehow . Come here when you need to send emails',
    );
  } else {
    Tts.speak(indexMappings[state.index]);
  }
}
