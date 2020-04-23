import {getThemeStyle} from '../utility/utils';

export const applyThemeOnImageStyle = (imageStyles, theme) => {
  const style = getThemeStyle(theme);

  const customizeImageStyle = {
    ...imageStyles,
    style: {
      ...imageStyles.style,
      backgroundColor: style.backgroundColor
        ? style.backgroundColor
        : imageStyles.style.backgroundColor,
      borderWidth: style.borderWidth
        ? style.borderWidth
        : imageStyles.style.borderWidth,

      borderColor: style.borderColor
        ? style.borderColor
        : imageStyles.style.borderColor,

      borderBottomWidth: style.borderBottomWidth
        ? style.borderBottomWidth
        : imageStyles.style.borderBottomWidth,

      marginTop: style.marginTop
        ? style.marginTop
        : imageStyles.style.marginTop,

      width: style.width ? style.width : imageStyles.style.width,
      height: style.height ? style.height : imageStyles.style.height,
    },
  };
  return customizeImageStyle;
};
