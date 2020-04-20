import {getThemeStyle} from '../utility/utils';

export const applyThemeOnHeaderStyle = (headerStyles, theme) => {
  const style = getThemeStyle(theme);

  const customizeHeaderStyle = {
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

      borderBottomWidth: style.borderBottomWidth
        ? style.borderBottomWidth
        : headerStyles.containerStyle.borderBottomWidth,

      borderBottomColor: style.borderBottomColor
        ? style.borderBottomColor
        : headerStyles.containerStyle.borderBottomColor,

      marginTop: style.marginTop
        ? style.marginTop
        : headerStyles.containerStyle.marginTop,

      width: style.width ? style.width : headerStyles.containerStyle.width,
      height: style.height ? style.height : headerStyles.containerStyle.height,
    },
  };
  return customizeHeaderStyle;
};

export const applyThemeOnIcon = (iconStyles, theme) => {
  const style = getThemeStyle(theme);

  const customizeIconStyle = {
    ...iconStyles,
    color: style.color ? style.color : iconStyles.color,
    size: style.size ? style.size : iconStyles.size,
  };

  return customizeIconStyle;
};

export const applyThemeOnText = (textStyles, theme) => {
  const style = getThemeStyle(theme);
  console.log('themesty', style);
  console.log('textstyle', textStyles);
  const customizeTextStyle = {
    ...textStyles,
    style: {
      ...textStyles.style,
      color: style.color ? style.color : textStyles,
      size: style.size ? style.size : textStyles.size,
    },
  };

  return customizeTextStyle;
};

export const applyThemeOnInput = (inputStyles, theme) => {
  const style = getThemeStyle(theme);

  const customizeInputStyle = {
    ...inputStyles,
    inputStyle: {
      ...inputStyles.inputStyle,
      color: style.color ? style.color : inputStyles.inputStyle.color,
      fontSize: style.size ? style.size : inputStyles.inputStyle.fontSize,
    },
  };

  return customizeInputStyle;
};
