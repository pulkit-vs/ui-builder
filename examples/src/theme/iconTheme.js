import {getThemeStyle} from '../utility/utils';

// function to change old style without theme to stylw with theme

export const applyThemeOnIconStyle = (styleWithouthTheme, theme) => {
  const newProps = {...styleWithouthTheme};
  const style = getThemeStyle(theme);

  const keys = Object.keys(style);

  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === 'backgroundColor') {
      newProps.iconStyle.color = style[keys[i]];
      continue;
    }
    if (newProps.iconStyle[keys[i]] && keys[i] !== 'color') {
      newProps.iconStyle[keys[i]] = style[keys[i]];
    }
  }
  return newProps;
};
// Button
