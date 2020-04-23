import {getThemeStyle} from '../utility/utils';

// function to change old style without theme to style with theme

export const applyThemeOnCheckboxStyle = (styleWithouthTheme, theme) => {
  const newProps = {...styleWithouthTheme};
  const style = getThemeStyle(theme);
  // get changes according to theme in three objects
  const keys = Object.keys[i];

  for (let i = 0; i < keys.length; i++) {
    if (newProps.checkboxStyle[keys[i]]) {
      newProps.checkboxStyle[keys[i]] = style[keys[i]];
    }
    if (newProps.containerStyle[keys[i]]) {
      newProps.containerStyle[keys[i]] = style[keys[i]];
    }
    if (newProps.titleStyle[keys[i]]) {
      newProps.titleStyle[keys[i]] = style[keys[i]];
    }
  }
  return newProps;
};
