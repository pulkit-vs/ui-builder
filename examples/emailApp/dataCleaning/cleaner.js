// checks the email validation
function validEmail(e) {
  var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
  return String(e).search(filter) != -1;
}

function fillArray(myString) {
  let array = [];
  let temp = '';
  const length = myString.length;
  if (myString) {
    let newString = myString.replace(/dot/g, '.');
    newString = newString.replace(/Dot/g, '.');
    myString = newString;
  }
  myString = myString.split(' ').join('').toLocaleLowerCase();

  for (let i = 0; i < length; i++) {
    temp = temp + myString[i];
    if (
      myString[i] === 'm' &&
      myString[i - 1] === 'o' &&
      myString[i - 2] === 'c' &&
      myString[i - 3] === '.'
    ) {
      const checkValidity = validEmail(temp);
      if (checkValidity) {
        array.push(temp);
      }
      temp = '';
    }
  }
  console.log(array);
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
  console.log(values);
  return values;
}
