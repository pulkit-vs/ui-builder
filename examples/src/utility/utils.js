var RNFS = require('react-native-fs');
import {PermissionsAndroid} from 'react-native';
import jsxToString from 'jsx-to-string';

export const getThemeStyle = (theme) => {
  switch (theme) {
    case 'darkTheme':
      return darkTheme;
    case 'lightTheme':
      return lightTheme;
  }
};

// dark and light theme styles
const lightTheme = {
  color: 'black',
  backgroundColor: 'white',
  fontFamily: 'arial',
  placeholderTextColor: 'black',
  borderColor: 'black',
  borderBottomColor: 'black',
};

export const CLOSE_MODAL = {
  onBackdropPress: 'onBackdropPress',
  onBackButtonPress: 'onBackButtonPress',
  onSwipeComplete: 'onSwipeComplete',
};

const darkTheme = {
  color: 'white',
  backgroundColor: 'black',
  fontFamily: 'arial',
  placeholderTextColor: 'white',
  borderColor: 'white',
  borderBottomColor: 'white',
};

// Method will be called when user defined any theme and will apply the theme style on the component.
export const applyTheme = (componentStyle, theme) => {
  let existingStyle = {...componentStyle};
  const themeStyle = getThemeStyle(theme);

  // Iterate over each key and checks if style is defined then change the style according to theme
  Object.keys(themeStyle).forEach((key) => {
    if (existingStyle && existingStyle[key]) {
      existingStyle[key] = themeStyle[key];
    }
    if (existingStyle.checkboxStyle && existingStyle.checkboxStyle[key]) {
      existingStyle.checkboxStyle[key] = themeStyle[key];
    }
    if (existingStyle.containerStyle && existingStyle.containerStyle[key]) {
      existingStyle.containerStyle[key] = themeStyle[key];
    }
    if (existingStyle.dividerStyle && existingStyle.dividerStyle[key]) {
      existingStyle.dividerStyle[key] = themeStyle[key];
    }
    if (existingStyle.titleStyle && existingStyle.titleStyle[key]) {
      existingStyle.titleStyle[key] = themeStyle[key];
    }

    if (existingStyle.wrapperStyle && existingStyle.wrapperStyle[key]) {
      existingStyle.wrapperStyle[key] = themeStyle[key];
    }
    if (existingStyle.buttonStyle && existingStyle.buttonStyle[key]) {
      existingStyle.buttonStyle[key] = themeStyle[key];
    }
    if (existingStyle.iconStyle && existingStyle.iconStyle[key]) {
      existingStyle.iconStyle[key] = themeStyle[key];
    }
    if (existingStyle.inputStyle && existingStyle.inputStyle[key]) {
      existingStyle.inputStyle[key] = themeStyle[key];
    }

    if (existingStyle.style && existingStyle.style[key]) {
      existingStyle.style[key] = themeStyle[key];
    }
  });
  return existingStyle;
};

// Method to request for a permission
export const requestPermission = async (permission) => {
  var granted;
  if (permission === 'writeExternalStorage') {
    granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    );
  } else if (permission === 'readExternalStorage') {
    granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );
  }

  console.log('requestPermission: granted:', granted);
  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    console.log('Permission granted');
    return true;
  } else {
    console.log('Permission denied');
    return false;
  }
};

/**
 * Method to write in a file
 * @param {*} path - FILE_LOCATION
 * @param {*} content
 */
const write = (path, content, convert = true) => {
  // var path = RNFS.DownloadDirectoryPath + '/' + path;
  convert ? (content = `${content}`) : null;
  RNFS.writeFile(path, content, 'utf8')
    .then(() => {
      console.log(` ${path} FILE WRITTEN!`);
    })
    .catch((err) => {
      console.log('error:', err.message);
    });
};

/**
 * Method to append in a file
 * @param {*} path - filename
 * @param {*} content
 */
const append = (path, content, convert = true) => {
  // var path = RNFS.DownloadDirectoryPath + '/' + path;
  convert ? (content = `${content}`) : null;
  RNFS.appendFile(path, content, 'utf8')
    .then(() => {
      console.log(`${path} FILE UPDATED!`);
    })
    .catch((err) => {
      console.log('error:', err.message);
    });
};

/**
 * This method will be use when there is a need to convert the "content" before appending into a file
 * @param {*} content
 * @param {*} replaceWith
 * @param {*} path - FILE_LOCATION
 */
export const convertAndWriteInAFile = (content, replaceWith, path) => {
  var convertedJsxToString = jsxToString(content).replace(
    '[object Object]',
    replaceWith,
  );
  convertedJsxToString = convertedJsxToString + Date.now()
  console.log('convertJsxToString:', convertedJsxToString, Date.now());
  return writeInAFile(path, convertedJsxToString, false);
};

/**
 * Method to check whether a file exists or not, if file exists, append data into an existing file, if not exists, then create and write in a file.
 * @param {*} path
 * @param {*} content
 * @param {*} convert
 */
export const writeInAFile = (path, content, convert = true) => {
  
  console.log('writeInAFile:path-', path)
  var path = RNFS.DownloadDirectoryPath + '/' + path;
  console.log('writeInAFile:path1-', path)
  RNFS.readFile(path) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
    .then((result) => {
      console.log('Read File:Result->', result);
      // data exists in a file
      console.log('appending-', path)
      append(path, content, convert);
    })
    .catch((err) => {
      console.log('Read File:Error->', err.message, err.code);
      // data not exists in a file
      console.log('writing-', path)
      write(path, content, convert);
    });
};

export const unLinkFile = (path) => {

  var path = RNFS.DownloadDirectoryPath + '/' + path;
  RNFS.unlink(path)
  .then(() => {
    console.log('FILE DELETED');
  })
  // `unlink` will throw an error, if the item to unlink does not exist
  .catch((err) => {
    console.log(path + err.message);
  });
}
