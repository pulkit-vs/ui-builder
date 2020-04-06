
// TODO: will use colors later.
// import { colors } from "./colors";
import { StyleSheet } from 'react-native';
import { styles } from "./style";

export const createStyle = (themeType) => {

    let style = { ...styles };
    let themeStyle = {};

    themeType ? themeStyle = setTheme(themeType) : null;

    // make a style for a component and return
    themeType && (
        style = {
            titleStyle: { ...styles.titleStyle, ...themeStyle.titleStyle },
            buttonStyle: { ...styles.buttonStyle, ...themeStyle.buttonStyle }
        }
    )
    return style;
}

const setTheme = (themeType) => {

    return StyleSheet.create({
        titleStyle: {
            color: themeType === 'darkTheme' ? 'white' : themeType === 'lightTheme' ? 'black' : 'blue',
            fontFamily: 'arial'
        },
        // imageStyle: {},
        buttonStyle: {
            backgroundColor: themeType === 'darkTheme' ? 'black' : themeType === 'lightTheme' ? 'white' : 'pink'
        },
        // headerStyle: {},
        // borderStyle: {borderColor: colors.errorRed}
    })
}