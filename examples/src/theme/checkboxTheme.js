import {getThemeStyle} from '../utility/utils';

// function to change old style without theme to stylw with theme
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
