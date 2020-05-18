function validEmail(e) {
  var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
  return String(e).search(filter) != -1;
}
function fillArray(myString) {
  let array = [];
  let temp = '';
  const length = myString.length;
  for (let i = 0; i < length; i++) {
    temp = temp + myString[i];
    if (
      myString[i] === 'm' &&
      myString[i - 1] === 'o' &&
      myString[i - 2] === 'c' &&
      myString[i - 3] === '.'
    ) {
      temp = temp.split(' ').join('').toLocaleLowerCase();

      const checkValidity = validEmail(temp);
      console.log('temp', temp);
      if (checkValidity) {
        array.push(temp);
      }
      temp = '';
    }
  }
  console.log('array values', array);
  return array;
}

export function emailDataCleaning(values) {
  console.log('entering function', values);
  const keys = Object.keys(values);
  keys.forEach((itr) => {
    if (itr === 'to' || itr === 'cc' || itr === 'bcc') {
      const array = fillArray(values[itr]);
      values[itr] = array;
    }
  });
  console.log('final update email data', values);
  return values;
}
