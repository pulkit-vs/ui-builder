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
    fontSize: 10,
    placeholderTextColor: 'green'
}

const darkTheme = {
    color: 'white',
    backgroundColor: 'black',
    fontFamily: 'arial',
    fontSize: 12
}
