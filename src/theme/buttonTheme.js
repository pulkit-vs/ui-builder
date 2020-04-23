import { getThemeStyle } from "../utility/utils";

export const applyThemeOnButtonStyle = (theme, customStyle) => {

    const style = getThemeStyle(theme);
    const buttonStyle = customStyle.buttonStyle;
    const titleStyle = customStyle.titleStyle;

    const customizeButtonStyle = {

        ...customStyle,

        buttonStyle: {
            backgroundColor: style.backgroundColor ? style.backgroundColor : buttonStyle.backgroundColor,
            borderRadius: style.borderRadius ? style.borderRadius : buttonStyle.borderRadius,
            alignContent: style.alignContent ? style.alignContent : buttonStyle.alignContent,
            alignItems: style.alignContent ? alignItems : buttonStyle.alignItems,
            position: style.position ? style.position : buttonStyle.position,
            alignSelf: style.alignSelf ? style.alignSelf : buttonStyle.alignSelf,
            left: style.left ? style.left : buttonStyle.left,
            right: style.right ? style.right : buttonStyle.right,
            width: style.width ? style.width : buttonStyle.width,
            height: style.height ? style.height : buttonStyle.height,
            marginTop: style.marginTop ? style.marginTop : buttonStyle.marginTop,
            borderStyle: style.borderStyle ? style.borderStyle : buttonStyle.borderStyle,
            borderLeftWidth: style.borderLeftWidth ? style.borderLeftWidth : buttonStyle.borderLeftWidth,
            borderRightWidth: style.borderRightWidth ? style.borderRightWidth : buttonStyle.borderRightWidth,
            borderBottomWidth: style.borderBottomWidth ? style.borderBottomWidth : buttonStyle.borderBottomWidth,
            borderLeftColor: style.borderLeftColor ? style.borderBottomWidth : buttonStyle.borderLeftColor,
            borderRightColor: style.borderRightColor ? style.borderBottomWidth : buttonStyle.borderRightColor,
            borderBottomColor: style.borderBottomColor ? style.borderBottomWidth : buttonStyle.borderBottomColor,
            borderColor: style.borderColor ? style.borderColor : buttonStyle.borderColor,
            borderWidth: style.borderWidth ? style.borderWidth : buttonStyle.borderWidth
        },

        titleStyle: {
            color: style.color ? style.color : titleStyle.color,
            fontFamily: style.fontFamily ? style.fontFamily : titleStyle.fontFamily,
            fontSize: style.fontSize ? style.fontSize : titleStyle.fontSize
        }
    }
    return customizeButtonStyle;
}
