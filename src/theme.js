import { getThemeStyle } from "./utility/utils";

export const applyThemeOnTextInputStyle = (theme, textInputStyles) => {
  const style = getThemeStyle(theme);
  const customizeTextInputStyle = {
    placeholder: style.placeholder
      ? style.placeholder
      : textInputStyles.placeholder,
    selectionColor: style.selectionColor
      ? style.selectionColor
      : textInputStyles.selectionColor,
    placeholderTextColor: style.placeholderTextColor
      ? style.placeholderTextColor
      : textInputStyles.placeholderTextColor,
    style: {
      backgroundColor: style.backgroundColor
        ? style.backgroundColor
        : textInputStyles.style.backgroundColor,
      borderColor: style.borderColor
        ? style.borderColor
        : textInputStyles.style.borderColor,
      fontFamily: style.fontFamily
        ? style.fontFamily
        : textInputStyles.style.fontFamily,
      color: style.color ? style.color : textInputStyles.style.color,
      marginTop: style.marginTop
        ? style.marginTop
        : textInputStyles.style.marginTop,
      left: style.left ? style.left : textInputStyles.style.left,
      right: style.right ? style.right : textInputStyles.style.right,
      borderWidth: style.borderWidth
        ? style.borderWidth
        : textInputStyles.style.borderWidth,
      width: style.width ? style.width : textInputStyles.style.width,
    },
  };
  return customizeTextInputStyle;
};
