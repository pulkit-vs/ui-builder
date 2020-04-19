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