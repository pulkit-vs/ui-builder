import { StyleSheet } from 'react-native';

// TODO: will use colors later.
import { colors } from "./colors";

export const setTheme = (themeType) => {

    const theme = themeType === 'darkTheme' ?
        StyleSheet.create({
            titleStyle: {
                color: 'red',
                fontSize: 30,
            }

        })
        : themeType === 'lightTheme' ?
            StyleSheet.create({

                titleStyle: {
                    color: 'white',
                }
            }) : null;
    return theme;
}
