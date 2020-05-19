var RNFS = require('react-native-fs');
import { PermissionsAndroid } from "react-native";
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
  let existingStyle = { ...componentStyle };
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
    granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
  } else if (permission === 'readExternalStorage') {
    granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
  }

  console.log('requestPermission: granted:', granted)
  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    console.log("Permission granted")
    return true
  }
  else {
    console.log("Permission denied")
    return false
  }
}

// Method to write in a file
export const writeInFile = (path, content) => {

  var path = RNFS.DownloadDirectoryPath + path;
  content = `${content}`
  RNFS.writeFile(path, content, 'utf8')
    .then(() => {
      console.log('FILE WRITTEN!');
    })
    .catch((err) => {
      console.log('error:', err.message);
    })
}

// Method to append in a file
export const appendInFile = (path, content) => {

  var path = RNFS.DownloadDirectoryPath + path;
  RNFS.appendFile(path, content, 'utf8')
    .then(() => {
      console.log('FILE UPDATED!');
    })
    .catch((err) => {
      console.log('error:', err.message);
    })
}

// Method to convert and append- This method will be use whenever there is a need to convert the "content" before appending into a file
export const convertAndAppend = (content, replaceWith, path) => {
  const convertJsxToString = jsxToString(content).replace(`[object Object]`, replaceWith)
  return (appendInFile(path, convertJsxToString))
}
