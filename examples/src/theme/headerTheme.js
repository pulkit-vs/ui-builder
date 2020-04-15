import {getThemeStyle} from '../utility/utils';

export const applyThemeOnHeaderStyle = (headerStyles, theme) => {
  const style = getThemeStyle(theme);

  let customizeHeaderStyle = {
    
    ...headerStyles,
    containerStyle: {
      ...headerStyles.containerStyle,
      backgroundColor: style.backgroundColor
        ? style.backgroundColor
        : headerStyles.backgroundColor,
      borderWidth: style.borderWidth
        ? style.borderWidth
        : headerStyles.containerStyle.borderWidth,

      borderColor: style.borderColor
        ? style.borderColor
        : headerStyles.containerStyle.borderColor,

      marginTop: style.marginTop
        ? style.marginTop
        : headerStyles.containerStyle.marginTop,

      width: style.width ? style.width : headerStyles.containerStyle.width,
      height: style.height ? style.height : headerStyles.containerStyle.height,
    },

    centerComponent: {
      ...headerStyles.centerComponent,
      style: {
        color: style.color
          ? style.color
          : headerStyles.centerComponent.style.color,
      },
    },
  };
  return customizeHeaderStyle;
};
