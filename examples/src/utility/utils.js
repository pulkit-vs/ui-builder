export const getThemeStyle = (theme) => {
    switch (theme) {
        case 'darkTheme':
            return darkTheme
        case 'lightTheme':
            return lightTheme;
    }
}


// dark and light theme styles
const lightTheme = {

    color: 'black',
    backgroundColor: 'white',
    fontFamily: 'arial',
    placeholderTextColor: 'black',
    borderColor: 'black'
}

const darkTheme = {
    color: 'white',
    backgroundColor: 'black',
    fontFamily: 'arial',
    placeholderTextColor: 'white',
    borderColor: 'white'
}

export const CLOSE_MODAL = {
    onBackdropPress: 'onBackdropPress',
    onBackButtonPress: 'onBackButtonPress',
    onSwipeComplete: 'onSwipeComplete'
}

// Method to handle theme style.
export const handleTheme = (theme, existingStyle) => {

    const themeStyle = getThemeStyle(theme);

    Object.keys(themeStyle).map(key => {

        if (Object.keys(existingStyle).includes(key)) {
            existingStyle[key] = themeStyle[key];
        }
    })

    existingStyle.style && Object.keys(themeStyle).map(key => {

        if (Object.keys(existingStyle.style).includes(key)) {
            existingStyle.style[key] = themeStyle[key];
        }
    })

    existingStyle.containerStyle && Object.keys(themeStyle).map(key => {

        if (Object.keys(existingStyle.containerStyle).includes(key)) {
            existingStyle.containerStyle[key] = themeStyle[key];
        }
    })

    existingStyle.buttonStyle && Object.keys(themeStyle).map(key => {

        if (Object.keys(existingStyle.buttonStyle).includes(key)) {
            existingStyle.buttonStyle[key] = themeStyle[key];
        }
    })

    existingStyle.titleStyle && Object.keys(themeStyle).map(key => {

        if (Object.keys(existingStyle.titleStyle).includes(key)) {
            existingStyle.titleStyle[key] = themeStyle[key];
        }
    })

    return existingStyle;
}
