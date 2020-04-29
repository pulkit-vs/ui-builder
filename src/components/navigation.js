
const source = {
    screen_name: 'Home',
    data: [
        {
            type: 'text',
            properties: {
                style: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 10, color: 'black' },
                title: 'Home Page'
            }
        },
        {
            type: 'button',
            properties: {
                title: 'Login',
                titleStyle: {},
                buttonStyle: {},
                onPress: {
                    navigation: true,
                    source : 'login'
                }
            }
        }
    ]
}

const data2 = {
    screen_name: 'login',
    data: [
        {
            type: 'text',
            properties: {
                style: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 10, color: 'black' },
                title: 'Login Page'
            }
        },
    ]
}

const data3 = {
    screen_name: 'login',
    data: [
        {
            type: 'text',
            properties: {
                style: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 10, color: 'black' },
                title: 'Login Page'
            }
        },
    ]
}

navigate = (screenName) => {

   // this.props.navigator.push({ screenName });
    this.props.navigation.navigate({screenName})
}


