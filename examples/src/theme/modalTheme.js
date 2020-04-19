import { getThemeStyle } from "../utility/utils";

export const applyThemeOnModal = (theme, modalStyle) => {
    const style = getThemeStyle(theme);
    alert(JSON.stringify(style))

    const customizeModalStyle = {

        backdropColor: style.backdropColor ? style.backdropColor : modalStyle.backdropColor,
        style: {
            margin: style.margin ? style.margin : modalStyle.style.margin,
            width: style.width ? style.width : modalStyle.style.width,
            marginBottom: style.marginBottom ? style.marginBottom : modalStyle.style.marginBottom,
            marginTop: style.marginTop ? style.marginTop : modalStyle.style.marginTop,
            backgroundColor: style.backgroundColor ? style.backgroundColor : modalStyle.style.backgroundColor
        }
    }
    return customizeModalStyle;
}
