export const sourceData = {
  theme: '',
  data: [
    {
      type: 'view',
      style: {},
      childrens: [
        {
          type: 'view',
          style: {borderBottomWidth: 25, borderBottomColor: 'red'},
          childrens: [
            {
              type: 'header',
              properties: {
                containerStyle: {
                  backgroundColor: 'red',
                  borderBottomWidth: 0,
                  height: 30,
                  textAlign: 'center',
                },
                centerComponent: {
                  childrens: [
                    {
                      type: 'view',
                      style: {flexDirection: 'row'},
                    },
                    {
                      type: 'icon',
                      properties: {
                        name: 'long-arrow-left',
                        color: 'white',
                        size: 30,
                        style: {
                          marginTop: 3,
                        },
                      },
                    },
                    {
                      type: 'text',
                      properties: {
                        title: 'Your Adresses',
                        style: {
                          color: 'white',
                          fontSize: 23,
                          marginLeft: 7,
                        },
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
        {
          type: 'header',
          properties: {
            containerStyle: {
              backgroundColor: 'white',
              borderBottomWidth: 2,
              borderBottomColor: 'grey',

              height: 45,
            },
            leftComponent: {
              childrens: [
                {
                  type: 'view',
                  style: {flexDirection: 'row'},
                },
                {
                  type: 'icon',
                  properties: {
                    name: 'plus-circle',
                    color: 'red',
                    size: 22,
                    style: {
                      marginTop: -2,
                    },
                  },
                },
                {
                  type: 'text',
                  properties: {
                    title: ' ADD NEW ADDRESSES',
                    style: {
                      color: 'red',
                      fontSize: 12,
                      width: 200,
                      marginBottom: 10,
                      marginLeft: 7,
                    },
                  },
                },
              ],
            },
          },
        },
      ],
    },
    {
      type: 'modal',
      properties: {
        style: {
          margin: 0,
          width: '100%',
          height: 500,
          marginTop: 350,
          backgroundColor: 'white',

          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        },
        backdropColor: 'grey',
        closeModal: ['onBackButtonPress', 'onSwipeComplete'],
        swipeDirection: 'left',
      },
      childrens: [
        {
          type: 'icon',
          properties: {
            containerStyle: {
              alignSelf: 'flex-end',
              right: 20,

              position: 'absolute',
            },
            name: 'close',
            color: 'grey',
            size: 20,
            onPress: 'closeModal',
          },
        },
        {
          type: 'text',
          properties: {
            style: {
              fontSize: 16,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'black',
              alignSelf: 'flex-start',
              marginLeft: 10,
            },
            title: 'Add new Address',
          },
        },

        {
          type: 'input',
          properties: {
            label: 'First Name',
            style: {
              backgroundColor: 'white',
              borderColor: '#D3D3D3',
              borderWidth: 2,
              width: '47.8%',
              left: 5,
              position: 'absolute',
              height: 40,
              marginTop: 10,
            },
            placeholderTextColor: 'grey',
          },
        },
        {
          type: 'input',
          properties: {
            label: 'Last Name',
            style: {
              backgroundColor: 'white',
              borderColor: '#D3D3D3',
              borderWidth: 2,
              width: '48%',
              marginRight: 5,
              left: 207,

              height: 40,
              marginTop: 10,
            },
            placeholderTextColor: 'grey',
          },
        },
        {
          type: 'input',
          properties: {
            label: 'Address',
            style: {
              backgroundColor: 'white',
              borderColor: '#D3D3D3',
              borderWidth: 2,
              width: '97.5%',
              height: 65,
              marginLeft: 5,
              marginTop: 4,
            },
            placeholderTextColor: 'grey',
          },
        },
        {
          type: 'input',
          properties: {
            label: 'City',
            style: {
              backgroundColor: 'white',
              borderColor: '#D3D3D3',
              borderWidth: 2,
              width: '47.8%',
              left: 5,
              position: 'absolute',
              height: 40,
              marginTop: 4,
            },
            placeholderTextColor: 'grey',
          },
        },
        {
          type: 'input',
          properties: {
            label: 'Select State',
            style: {
              backgroundColor: 'white',
              borderColor: '#D3D3D3',
              borderWidth: 2,
              width: '48%',
              marginRight: 5,
              left: 207,

              height: 40,
              marginTop: 4,
            },
            placeholderTextColor: 'grey',
          },
        },
        {
          type: 'input',
          properties: {
            label: 'Pin Code(6 digit)',
            style: {
              backgroundColor: 'white',
              borderColor: '#D3D3D3',
              borderWidth: 2,
              width: '47.8%',
              left: 5,
              position: 'absolute',
              height: 40,
              marginTop: 4,
            },
            placeholderTextColor: 'grey',
          },
        },
        {
          type: 'input',
          properties: {
            label: 'Mobile Number',
            style: {
              backgroundColor: 'white',
              borderColor: '#D3D3D3',
              borderWidth: 2,
              width: '48%',
              marginRight: 5,
              left: 207,

              height: 40,
              marginTop: 4,
            },
            placeholderTextColor: 'grey',
          },
        },
        {
          type: 'button',
          properties: {
            title: 'SAVE ADDRESS',
            onPress: 'closeModal',
            buttonStyle: {
              backgroundColor: 'red',
              borderColor: 'red',
              width: '98%',
              left: 70,
              borderWidth: 3,
              marginTop: 7,
              alignSelf: 'center',
              marginRight: 137,
            },
            titleStyle: {color: 'white'},
          },
        },
      ],
    },
  ],
};
