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
};

const darkTheme = {
  color: 'white',
  backgroundColor: 'black',
  fontFamily: 'arial',
  placeholderTextColor: 'white',
  borderColor: 'white',
};

export const applyTheme = (componentStyle, theme) => {
  const existingStyle = {...componentStyle};
  const themeStyle = getThemeStyle(theme);

  //stores key values of theme object
  const keys = Object.keys(themeStyle);

  //iterate over every key and change the theme if style of that theme is defined by user
  for (let i = 0; i < keys.length; i++) {
    if (existingStyle.checkboxStyle && existingStyle.checkboxStyle[keys[i]]) {
      existingStyle.checkboxStyle[keys[i]] = themeStyle[keys[i]];
    }
    if (existingStyle.containerStyle && existingStyle.containerStyle[keys[i]]) {
      existingStyle.containerStyle[keys[i]] = themeStyle[keys[i]];
    }
    if (existingStyle.titleStyle && existingStyle.titleStyle[keys[i]]) {
      existingStyle.titleStyle[keys[i]] = themeStyle[keys[i]];
    }
    if (existingStyle.iconStyle && existingStyle.iconStyle[keys[i]]) {
      existingStyle.iconStyle[keys[i]] = themeStyle[keys[i]];
    }
  }
  return existingStyle;
};
