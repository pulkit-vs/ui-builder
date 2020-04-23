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

// function will be called when user defined any theme and will change the style of component.
export const applyTheme = (componentStyle, theme) => {
  const existingStyle = {...componentStyle};
  const themeStyle = getThemeStyle(theme);

  // iterate over each key and checks if style is defined then change the style according to theme
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
    if (existingStyle.titleStyle && existingStyle.titleStyle[key]) {
      existingStyle.titleStyle[key] = themeStyle[key];
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
