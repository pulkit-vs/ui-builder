import { StyleSheet } from 'react-native';

// dark and light theme
export const lightTheme = {

    color: 'black',
    backgroundColor: 'white',
    fontFamily: 'arial',
    fontSize: 10
}

export const darkTheme = {
    color: 'white',
    backgroundColor: 'black',
    fontFamily: 'arial',
    fontSize: 12
}


export const applyThemeOnButtonStyle = (buttonStyles, theme) => {

    let style = {};
    switch (theme) {
        case 'darkTheme':
            style = darkTheme
            break;
        case 'lightTheme':
            style = lightTheme;
    }

    let customizeButtonStyle = StyleSheet.create({

        buttonStyle: {
            backgroundColor: style.backgroundColor ? style.backgroundColor : buttonStyles.buttonStyle.backgroundColor,
            borderRadius: style.borderRadius ? style.borderRadius : buttonStyles.buttonStyle.borderRadius,
            alignContent: style.alignContent ? style.alignContent : buttonStyles.buttonStyle.alignContent,
            alignItems: style.alignContent ? alignItems : buttonStyles.buttonStyle.alignItems,
            position: style.position ? style.position : buttonStyles.buttonStyle.position,
            alignSelf: style.alignSelf ? style.alignSelf : buttonStyles.buttonStyle.alignSelf,
            left: style.left ? style.left : buttonStyles.buttonStyle.left,
            right: style.right ? style.right : buttonStyles.buttonStyle.right,
            width: style.width ? style.width : buttonStyles.buttonStyle.width,
            height: style.height ? style.height : buttonStyles.buttonStyle.height,
            marginTop: style.marginTop ? style.marginTop : buttonStyles.buttonStyle.marginTop,
            borderStyle: style.borderStyle ? style.borderStyle : buttonStyles.buttonStyle.borderStyle,
            borderLeftWidth: style.borderStyle ? style.borderLeftWidth : buttonStyles.buttonStyle.borderLeftWidth,
            borderRightWidth: style.borderStyle ? style.borderRightWidth : buttonStyles.buttonStyle.borderRightWidth,
            borderBottomWidth: style.borderStyle ? style.borderBottomWidth : buttonStyles.buttonStyle.borderBottomWidth,
            borderLeftColor: style.borderStyle ? style.borderBottomWidth : buttonStyles.buttonStyle.borderLeftColor,
            borderRightColor: style.borderStyle ? style.borderBottomWidth : buttonStyles.buttonStyle.borderRightColor,
            borderBottomColor: style.borderStyle ? style.borderBottomWidth : buttonStyles.buttonStyle.borderBottomColor,
        },

        titleStyle: {
            color: style.color ? style.color : buttonStyles.titleStyle.color,
            fontFamily: style.fontFamily ? style.fontFamily : buttonStyles.titleStyle.fontFamily
        }
    })

    return customizeButtonStyle;
}