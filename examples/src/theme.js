import {StyleSheet} from 'react-native';
import {getThemeStyle} from './utility/utils';

export const applyThemeOnButtonStyle = (buttonStyles, theme) => {
  const style = getThemeStyle(theme);
  let customizeButtonStyle = StyleSheet.create({
    buttonStyle: {
      backgroundColor: style.backgroundColor
        ? style.backgroundColor
        : buttonStyles.buttonStyle.backgroundColor,
      borderRadius: style.borderRadius
        ? style.borderRadius
        : buttonStyles.buttonStyle.borderRadius,
      alignContent: style.alignContent
        ? style.alignContent
        : buttonStyles.buttonStyle.alignContent,
      alignItems: style.alignContent
        ? alignItems
        : buttonStyles.buttonStyle.alignItems,
      position: style.position
        ? style.position
        : buttonStyles.buttonStyle.position,
      alignSelf: style.alignSelf
        ? style.alignSelf
        : buttonStyles.buttonStyle.alignSelf,
      left: style.left ? style.left : buttonStyles.buttonStyle.left,
      right: style.right ? style.right : buttonStyles.buttonStyle.right,
      width: style.width ? style.width : buttonStyles.buttonStyle.width,
      height: style.height ? style.height : buttonStyles.buttonStyle.height,
      marginTop: style.marginTop
        ? style.marginTop
        : buttonStyles.buttonStyle.marginTop,
      borderStyle: style.borderStyle
        ? style.borderStyle
        : buttonStyles.buttonStyle.borderStyle,
      borderLeftWidth: style.borderStyle
        ? style.borderLeftWidth
        : buttonStyles.buttonStyle.borderLeftWidth,
      borderRightWidth: style.borderStyle
        ? style.borderRightWidth
        : buttonStyles.buttonStyle.borderRightWidth,
      borderBottomWidth: style.borderStyle
        ? style.borderBottomWidth
        : buttonStyles.buttonStyle.borderBottomWidth,
      borderLeftColor: style.borderStyle
        ? style.borderBottomWidth
        : buttonStyles.buttonStyle.borderLeftColor,
      borderRightColor: style.borderStyle
        ? style.borderBottomWidth
        : buttonStyles.buttonStyle.borderRightColor,
      borderBottomColor: style.borderStyle
        ? style.borderBottomWidth
        : buttonStyles.buttonStyle.borderBottomColor,
    },

    titleStyle: {
      color: style.color ? style.color : buttonStyles.titleStyle.color,
      fontFamily: style.fontFamily
        ? style.fontFamily
        : buttonStyles.titleStyle.fontFamily,
    },
  });
  return customizeButtonStyle;
};

export const applyThemeOnTextInputStyle = (textInputStyles, theme) => {
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
    },
  };
  return customizeTextInputStyle;
};

// function to change oll style without theme to stylw with theme
const changeStyleContainer = (oldStyle, style) => {
  oldStyle = {
    color: style.color ? style.color : oldStyle.color,
    backgroundColor: style.backgroundColor
      ? style.backgroundColor
      : oldStyle.backgroundColor,
    borderRadius: style.borderRadius
      ? style.borderRadius
      : oldStyle.borderRadius,
    alignContent: style.alignContent
      ? style.alignContent
      : oldStyle.alignContent,
    alignItems: style.alignContent ? alignItems : oldStyle.alignItems,
    position: style.position ? style.position : oldStyle.position,
    alignSelf: style.alignSelf ? style.alignSelf : oldStyle.alignSelf,
    left: style.left ? style.left : oldStyle.left,
    right: style.right ? style.right : oldStyle.right,
    width: style.width ? style.width : oldStyle.width,
    height: style.height ? style.height : oldStyle.height,
    marginTop: style.marginTop ? style.marginTop : oldStyle.marginTop,
    borderStyle: style.borderStyle ? style.borderStyle : oldStyle.borderStyle,
    borderLeftWidth: style.borderStyle
      ? style.borderLeftWidth
      : oldStyle.borderLeftWidth,
    borderRightWidth: style.borderStyle
      ? style.borderRightWidth
      : oldStyle.borderRightWidth,
    borderBottomWidth: style.borderStyle
      ? style.borderBottomWidth
      : oldStyle.borderBottomWidth,
    borderLeftColor: style.borderStyle
      ? style.borderBottomWidth
      : oldStyle.borderLeftColor,
    borderRightColor: style.borderStyle
      ? style.borderBottomWidth
      : oldStyle.borderRightColor,
    borderBottomColor: style.borderStyle
      ? style.borderBottomWidth
      : oldStyle.borderBottomColor,
    fontFamily: style.fontFamily ? style.fontFamily : oldStyle.fontFamily,
  };
  return oldStyle;
};

export const applyThemeOnCheckboxStyle = (styleWithouthTheme, theme) => {
  const newProps = {...styleWithouthTheme};
  const style = getThemeStyle(theme);
  // get changes according to theme in three objects
  let containerStyle = changeStyleContainer(newProps.containerStyle, style);
  let checkboxStyle = changeStyleContainer(newProps.checkboxStyle, style);
  let titleStyle = changeStyleContainer(newProps.titleStyle, style);
  newProps.containerStyle = containerStyle;
  newProps.checkboxStyle = checkboxStyle;
  newProps.titleStyle = titleStyle;

  return newProps;
};
