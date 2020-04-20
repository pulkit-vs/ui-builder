import {getThemeStyle} from '../utility/utils';

// function to change old style without theme to style with theme

export const applyThemeOnIconStyle = (styleWithouthTheme, theme) => {
  const newProps = {...styleWithouthTheme};

  const style = getThemeStyle(theme);
  // keys will consist all the keys from theme object.
  const keys = Object.keys(style);

  // iterarte over keys of theme.
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === 'backgroundColor') {
      newProps.iconStyle.color = style[keys[i]];
      continue;
    }

    // if user has propvided style of component then this will change style according to component .
    if (newProps.iconStyle[keys[i]] && keys[i] !== 'color') {
      newProps.iconStyle[keys[i]] = style[keys[i]];
    }
  }
  return newProps;
};
