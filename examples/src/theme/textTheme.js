import { getThemeStyle } from "../utility/utils";

// Not required as created a generic method to handle theme, will remove.
export const applyThemeOnText = (theme, textStyles) => {

    const style = getThemeStyle(theme);
    const customizeTextStyle = {

        title: textStyles.title,
        style: {
            fontSize: style.fontSize ? style.fontSize : textStyles.style.fontSize,
            fontWeight: style.fontWeight ? style.fontWeight : textStyles.style.fontWeight,
            textAlign: style.textAlign ? style.textAlign : textStyles.style.textAlign,
            color: style.color ? style.color : textStyles.style.color,
        }
    }
    return customizeTextStyle;
}
