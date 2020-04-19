
const data = {
    type: 'input',
    properties: {
        label: 'Email',
        style: { backgroundColor: 'white', borderColor: 'grey', borderWidth: 2, width: "60%", left: 70, marginTop: 40 },
        placeholderTextColor: 'grey',
        childrens: [{
            type: 'icon',
            properties: {
                name: 'search',
                color: 'red',
                size: 40
            }
        },
        {
            type: 'icon',
            properties: {
                name: 'facebook',
                color: 'red',
                size: 40
            }
        }]
    }
}


const data2 = {
    type: 'view',
    style: {},
    properties: {
        viewStyle : {
            
        }
    },
    childrens: [
        {
            type: 'input',
            properties: {
                label: 'Mobile Number (10 digits)',
                placeholderTextColor: 'grey',
                style: { backgroundColor: 'white', borderColor: 'grey', borderWidth: 2, width: "90%", left: 20, marginTop: 40 },
            },
            childrens: [{
                type: 'icon',
                properties: {
                    name: 'search',
                    color: 'red',
                    size: 40
                }
            },
            {
                type: 'icon',
                properties: {
                    name: 'facebook',
                    color: 'red',
                    size: 40
                }
            }]
        },
        {
            type: 'button',
            properties: {
                title: 'FACEBOOK',
                titleStyle: { color: 'blue', fontSize: 20 },
                buttonStyle: { backgroundColor: 'white', width: "90%", left: 20, borderWidth: 3, marginTop: 20 }
            }
        }
    ]
}


