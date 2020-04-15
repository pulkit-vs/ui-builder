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

    leftComponent: {
      ...headerStyles.leftComponent,
      style: {
        ...headerStyles.leftComponent.style,
        color: style.color
          ? style.color
          : headerStyles.leftComponent.style.color,
      },
    },
    centerComponent: {
      ...headerStyles.centerComponent,
      style: {
        ...headerStyles.centerComponent.style,
        color: style.color
          ? style.color
          : headerStyles.centerComponent.style.color,
      },
    },
    rightComponent: {
      ...headerStyles.rightComponent,
      style: {
        ...headerStyles.rightComponent.style,
        color: style.color
          ? style.color
          : headerStyles.rightComponent.style.color,
      },
    },
  };
  return customizeHeaderStyle;
};
