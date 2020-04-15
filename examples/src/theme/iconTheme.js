import {getThemeStyle} from '../utility/utils';

// function to change old style without theme to stylw with theme

export const applyThemeOnIconStyle = (styleWithouthTheme, theme) => {
  const iconStyleCopy = {...styleWithouthTheme.iconStyle};
  const containerStyleCopy = {...styleWithouthTheme.containerStyle};
  const newProps = {...styleWithouthTheme};
  const style = getThemeStyle(theme);

  console.log('themeStyle', style);
  const keys = Object.keys(style);
  console.log(keys.length);
  for (let i = 0; i < keys.length; i++) {
    newProps.iconStyle[keys[i]] = style[keys[i]];
  }
  //   for (let i = 0; i < keys.length; i++) {
  //     newProps.containerStyle[keys[i]] = style[keys[i]];
  //   }

  console.log(newProps);
  return styleWithouthTheme;
};
