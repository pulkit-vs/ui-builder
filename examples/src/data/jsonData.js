const data = {
  // Low Level Component
  source: {
    screenName: 'First Screen',
    data: [
      {
        type: 'button',
        properties: {
          title: 'Click Me',
          titleStyle: {color: 'white', fontSize: 20},
          buttonStyle: {
            backgroundColor: 'blue',
            width: '90%',
            left: 20,
            marginTop: 20,
          },
        },
      },
      {
        type: 'input',
        properties: {
          label: 'Mobile Number (10 digits)',
          selectionColor: 'grey',
          containerStyle: {
            backgroundColor: 'white',
            borderColor: 'grey',
            borderWidth: 1,
            width: '90%',
            left: 20,
            marginTop: 40,
          },
          inputContainerStyle: {
            borderBottomWidth: 0,
          },
          rightIcon: {
            properties: {
              name: 'arrow-right',
              color: 'white',
              size: 20,
              type: 'font-awesome',
              rightIconContainerStyle: {
                backgroundColor: 'grey',
                borderWidth: 24,
                borderColor: 'lightgrey',
                left: 10,
              },
            },
          },
        },
      },
      {
        type: 'divider',
        properties: {
          style: {borderWidth: 1, marginTop: 50, borderColor: 'green'},
        },
      },
      {
        type: 'text',
        properties: {
          title: 'Text',
          style: {
            marginTop: 40,
            fontSize: 20,
            textAlign: 'center',
            color: 'green',
          },
        },
      },
    ],
  },

  // Add Address Screen Json
  addAdressData: {
    theme: '',
    screenName: 'Add Address',
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
                    height: 65,
                    textAlign: 'center',
                  },
                  centerComponent: {
                    childrens: [
                      {
                        type: 'view',
                        properties: {style: {flexDirection: 'row'}},
                      },
                      {
                        type: 'icon',
                        properties: {
                          name: 'long-arrow-left',
                          type: 'font-awesome',
                          color: 'white',
                          size: 30,
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
                borderBottomWidth: 0,

                height: 40,
              },
              leftComponent: {
                childrens: [
                  {
                    type: 'view',
                    properties: {
                      style: {
                        width: 500,
                        marginLeft: -10,
                        flexDirection: 'row',
                        borderBottomWidth: 2,
                        borderBottomColor: 'grey',
                        backgroundColor: 'white',
                      },
                    },
                  },
                  {
                    type: 'icon',
                    properties: {
                      name: 'plus-circle',
                      type: 'font-awesome',
                      color: 'red',
                      iconStyle: {
                        marginLeft: 4,
                      },
                    },
                  },
                  {
                    type: 'text',
                    properties: {
                      title: 'Edit Your Addresses',
                      style: {
                        color: 'red',
                        fontSize: 18,
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
            marginTop: '110%',
            backgroundColor: 'white',
            borderRadius: 0,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
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
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                color: 'black',
                alignSelf: 'flex-start',
                marginLeft: 10,
              },
              title: 'Add new address',
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
                width: '47%',
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
                width: '47%',
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
                width: '47%',
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
                marginTop: 5,
                alignSelf: 'center',
                marginRight: 140,
              },
              titleStyle: {color: 'white'},
            },
          },
        ],
      },
    ],
  },

  // Login Page Json
  loginPageData: {
    // theme: 'darkTheme',
    navigation: true,
    screenName: 'Home',
    data: [
      {
        type: 'view',
        style: {backgroundColor: 'red', width: '100%', height: '100%'},
        childrens: [
          {
            type: 'header',
            properties: {
              containerStyle: {
                backgroundColor: 'red',
                borderBottomWidth: 0,
              },
              centerComponent: {
                childrens: [
                  {
                    type: 'view',
                    properties: {style: {flexDirection: 'row'}},
                  },
                  {
                    type: 'text',
                    properties: {
                      title: 'Account',
                      style: {color: 'white', fontSize: 30, fontWeight: 'bold'},
                    },
                  },
                ],
              },
            },
          },
          {
            type: 'view',
            style: {marginLeft: 30},
            childrens: [
              {
                type: 'header',
                properties: {
                  containerStyle: {
                    height: 150,
                    backgroundColor: 'red',
                    borderBottomWidth: 0,
                  },
                  placement: 'left',
                  centerComponent: {
                    childrens: [
                      {
                        type: 'view',
                        properties: {style: {flexDirection: 'row'}},
                      },
                      {
                        type: 'icon',
                        properties: {
                          name: 'plus-circle',
                          type: 'font-awesome',
                          color: 'white',
                          size: 60,
                        },
                      },
                      {
                        type: 'text',
                        properties: {
                          title: 'Medipick',
                          style: {
                            color: 'white',
                            fontSize: 50,
                            fontFamily: 'arial',
                            marginBottom: 5,
                            paddingLeft: 5,
                            fontWeight: 'bold',
                          },
                        },
                      },
                    ],
                  },
                  centerContainerStyle: {
                    paddingLeft: 0,
                    marginLeft: 0,
                  },
                },
              },
            ],
          },

          {
            type: 'view',
            style: {flexDirection: 'row', marginTop: 30, marginLeft: 20},
            childrens: [
              {
                type: 'text',
                properties: {
                  title: 'Welcome',
                  style: {
                    color: 'white',
                    fontSize: 24,
                    fontWeight: 'bold',
                  },
                },
              },
              {
                type: 'text',
                properties: {
                  title: 'Please login here',
                  style: {
                    color: 'white',
                    fontSize: 21,
                    marginLeft: 5,
                    marginTop: 3,
                    fontWeight: 'bold',
                  },
                },
              },
            ],
          },
          {
            type: 'view',
            style: {
              width: '100%',
              height: 50,
              flexDirection: 'row',
              backgroundColor: 'red',
              marginLeft: 20,
              marginTop: 15,
            },
            childrens: [
              {
                type: 'icon',
                properties: {
                  name: 'user',
                  size: 30,
                  iconType: 'font-awesome',
                  disabled: false,
                  raised: false,
                  iconStyle: {
                    color: 'maroon',
                  },
                  containerStyle: {
                    alignSelf: 'flex-end',
                    marginTop: 12,
                  },
                },
              },
              {
                type: 'input',
                properties: {
                  label: 'User Name / Email',
                  placeholderTextColor: 'maroon',
                  style: {
                    borderBottomWidth: 2,
                    borderBottomColor: 'maroon',
                    width: 270,
                    left: 20,
                    fontSize: 16,
                  },
                },
              },
            ],
          },
          {
            type: 'view',
            style: {
              height: 50,
              flexDirection: 'row',
              backgroundColor: 'red',
              marginLeft: 20,
              marginTop: 15,
            },
            childrens: [
              {
                type: 'icon',
                properties: {
                  name: 'lock',
                  size: 30,
                  iconType: 'font-awesome',
                  disabled: false,
                  raised: false,
                  iconStyle: {
                    color: 'maroon',
                  },
                  containerStyle: {
                    alignSelf: 'flex-end',
                    marginTop: 12,
                  },
                },
              },
              {
                type: 'input',
                properties: {
                  label: 'Password',
                  placeholderTextColor: 'maroon',
                  style: {
                    borderBottomWidth: 2,
                    borderBottomColor: 'maroon',
                    width: 270,
                    left: 20,
                    fontSize: 16,
                  },
                },
              },
            ],
          },
          {
            type: 'text',
            properties: {
              title: 'Forgot Password ?',
              style: {
                color: 'white',
                fontSize: 20,
                marginLeft: 150,
                marginTop: 18,
                fontWeight: 'bold',
              },
            },
          },
          {
            type: 'button',
            properties: {
              title: 'Login',
              titleStyle: {color: 'white', fontSize: 20},
              buttonStyle: {
                backgroundColor: 'firebrick',
                width: '90%',
                left: 20,
                borderColor: 'red',
                marginTop: 30,
                borderRadius: 30,
              },
              onPress: {
                navigation: true,
                screenName: 'Add Address',
                source: {
                  data: [
                    {
                      type: 'button',
                      properties: {
                        title: 'Sign Up',
                        titleStyle: {color: 'white', fontSize: 20},
                        buttonStyle: {
                          backgroundColor: 'lightcoral',
                          width: '90%',
                          left: 20,
                          borderColor: 'red',
                          marginTop: 40,
                          borderRadius: 30,
                        },
                        onPress: {
                          navigation: true,
                          screenName: 'page3',
                          source: {
                            data: [
                              {
                                type: 'text',
                                properties: {
                                  title: 'You Are on Page3',
                                },
                              },
                            ],
                          },
                        },
                      },
                    },
                  ],
                },
              },
            },
          },
          {
            type: 'button',
            properties: {
              title: 'Sign Up',
              titleStyle: {color: 'white', fontSize: 20},
              buttonStyle: {
                backgroundColor: 'lightcoral',
                width: '90%',
                left: 20,
                borderColor: 'red',
                marginTop: 30,
                borderRadius: 30,
              },
            },
          },
        ],
      },
    ],
  },

  // Navigation Screens Json
  navigationData: {
    screenName: 'Login Page',
    data: [
      {
        type: 'text',
        properties: {
          title: 'Log In',
          style: {
            color: 'black',
            textAlign: 'center',
            marginTop: 20,
            fontSize: 40,
            fontWeight: 'bold',
          },
        },
      },
      {
        type: 'view',
        style: {
          flexDirection: 'row',
          paddingLeft: 80,
        },
        childrens: [
          {
            type: 'text',
            properties: {
              title: 'New to this site ?',
              style: {
                color: 'black',
                marginTop: 20,
                fontSize: 20,
                fontWeight: 'bold',
              },
            },
          },
          {
            type: 'text',
            properties: {
              title: ' Sign Up',
              style: {
                color: 'green',
                marginTop: 20,
                fontSize: 20,
                fontWeight: 'bold',
              },
            },
          },
        ],
      },

      {
        type: 'button',
        properties: {
          title: 'Log in with Facebook',
          titleStyle: {color: 'blue', fontSize: 20},
          buttonStyle: {
            backgroundColor: 'white',
            width: '90%',
            left: 20,
            borderWidth: 3,
            marginTop: 30,
          },
          onPress: {
            navigation: true,
            screenName: 'Checkout',
            source: {
              data: [
                {
                  type: 'header',
                  properties: {
                    containerStyle: {
                      backgroundColor: 'white',
                      borderBottomWidth: 1,
                      borderBottomColor: 'black',
                    },
                    placement: 'left',
                    centerComponent: {
                      childrens: [
                        {
                          type: 'view',
                          properties: {style: {flexDirection: 'row'}},
                        },
                        {
                          type: 'text',
                          properties: {
                            title: 'Log in With Facebook',
                            style: {
                              color: 'black',
                              fontSize: 19,
                              textAlign: 'left',
                              // fontWeight: 'bold',
                            },
                          },
                        },
                      ],
                    },
                    rightComponent: {
                      childrens: [
                        {
                          type: 'view',
                          properties: {style: {flexDirection: 'row'}},
                        },
                        {
                          type: 'icon',
                          properties: {
                            name: 'close',
                            color: 'black',
                            size: 30,
                            onPress: {
                              navigation: true,
                              screenName: 'Login Page',
                            },
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  type: 'input',
                  properties: {
                    label: 'Mobile Number (10 digits)',
                    placeholderTextColor: 'grey',
                    style: {
                      backgroundColor: 'white',
                      borderColor: 'grey',
                      borderWidth: 2,
                      width: '90%',
                      left: 20,
                      marginTop: 40,
                    },
                  },
                  childrens: [
                    {
                      type: 'icon',
                      properties: {
                        name: 'search',
                        color: 'red',
                        size: 40,
                      },
                    },
                    {
                      type: 'icon',
                      properties: {
                        name: 'facebook',
                        color: 'red',
                        size: 40,
                      },
                    },
                  ],
                },
                {
                  type: 'button',
                  properties: {
                    title: 'FACEBOOK',
                    titleStyle: {color: 'blue', fontSize: 20},
                    buttonStyle: {
                      backgroundColor: 'white',
                      width: '90%',
                      left: 20,
                      borderWidth: 3,
                      marginTop: 20,
                    },
                    onPress: {
                      navigation: true,
                      screenName: 'faceBook HomePage',
                      source: {
                        data: [
                          {
                            type: 'text',
                            properties: {
                              title: 'Welcome to our Facebook Page!',
                              style: {
                                marginTop: 20,
                                fontSize: 20,
                                fontWeight: 'bold',
                                textAlign: 'center',
                              },
                            },
                          },
                          {
                            type: 'text',
                            properties: {
                              title: 'Back to Login Page',
                              style: {
                                // position: 'absolute',
                                left: 50,
                                top: 500,
                                fontSize: 20,
                              },
                              onPress: {
                                screenName: 'Login Page',
                              },
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              ],
            },
          },
        },
      },
      {
        type: 'button',
        properties: {
          title: 'Log in with Google',
          titleStyle: {color: 'blue', fontSize: 20},
          buttonStyle: {
            backgroundColor: 'white',
            width: '90%',
            left: 20,
            borderWidth: 3,
            marginTop: 30,
          },
        },
      },
    ],
  },

  // Sample JSON Structure
  data1: {
    type: 'input',
    properties: {
      label: 'Email',
      style: {
        backgroundColor: 'white',
        borderColor: 'grey',
        borderWidth: 2,
        width: '60%',
        left: 70,
        marginTop: 40,
      },
      placeholderTextColor: 'grey',
      childrens: [
        {
          type: 'icon',
          properties: {
            name: 'search',
            color: 'red',
            size: 40,
          },
        },
        {
          type: 'icon',
          properties: {
            name: 'facebook',
            color: 'red',
            size: 40,
          },
        },
      ],
    },
  },

  data2: {
    childrens: [
      {
        type: 'view',
        properties: {
          viewStyle: {},
        },
      },
      {
        type: 'input',
        properties: {
          label: 'Mobile Number (10 digits)',
          placeholderTextColor: 'grey',
          style: {
            backgroundColor: 'white',
            borderColor: 'grey',
            borderWidth: 2,
            width: '90%',
            left: 20,
            marginTop: 40,
          },
        },
        childrens: [
          {
            type: 'icon',
            properties: {
              name: 'search',
              color: 'red',
              size: 40,
            },
          },
          {
            type: 'icon',
            properties: {
              name: 'facebook',
              color: 'red',
              size: 40,
            },
          },
        ],
      },
      {
        type: 'button',
        properties: {
          title: 'FACEBOOK',
          titleStyle: {color: 'blue', fontSize: 20},
          buttonStyle: {
            backgroundColor: 'white',
            width: '90%',
            left: 20,
            borderWidth: 3,
            marginTop: 20,
          },
        },
      },
    ],
  },

  // Sample json
  sample: {
    theme: 'lightTheme',
    screenName: 'sample',
    navigation: true,
    data: [
      {
        type: 'modal',
        properties: {
          style: {
            margin: 0,
            width: '100%',
            marginBottom: 200,
            marginTop: 200,
            backgroundColor: 'white',
          },
          backdropColor: 'grey',
          closeModal: [
            'onBackdropPress',
            'onBackButtonPress',
            'onSwipeComplete',
          ],
          swipeDirection: 'left',
        },
        childrens: [
          {
            type: 'icon',
            properties: {
              containerStyle: {
                alignSelf: 'flex-end',
                right: 20,
                marginBottom: 10,
                position: 'absolute',
              },
              name: 'close',
              color: 'red',
              size: 40,
              onPress: 'closeModal',
            },
          },
          {
            type: 'text',
            properties: {
              style: {
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: 10,
                color: 'black',
              },
              title: 'Custom Modal',
            },
          },
          {
            type: 'input',
            properties: {
              label: 'Email',
              style: {
                backgroundColor: 'white',
                borderColor: 'grey',
                borderWidth: 2,
                width: '60%',
                left: 70,
                marginTop: 40,
              },
              placeholderTextColor: 'grey',
            },
          },
          {
            type: 'button',
            properties: {
              title: 'Close Modal',
              onPress: 'closeModal',
              buttonStyle: {
                backgroundColor: 'white',
                width: '60%',
                left: 70,
                borderWidth: 3,
                marginTop: 60,
              },
              titleStyle: {color: 'black'},
            },
          },
        ],
      },
      {
        type: 'checkbox',
        properties: {
          title: 'JAVASCRIPT',
          titleStyle: {
            color: 'pink',
            fontSize: 22,
            uncheckedColor: 'black',
            checkedColor: 'pink',
          },
          checkboxStyle: {
            color: 'red',
            size: 25,
          },
          containerStyle: {
            borderColor: '#DCDCDC',
            borderRadius: 20,
            width: '80%',
          },
        },
      },
      {
        type: 'icon',
        properties: {
          name: 'battery',
          size: 30,
          iconType: 'font-awesome',
          disabled: false,
          //onPress: onIconClick,
          raised: false,
          iconStyle: {
            color: 'blue',
          },
          containerStyle: {
            alignSelf: 'flex-end',
          },
        },
      },

      {
        type: 'view',
        style: {flexDirection: 'row'},
        childrens: [
          {
            type: 'image',
            properties: {
              uri: 'https://picsum.photos/seed/picsum/200/300',
              style: {
                width: 180,
                height: 300,
              },
            },
          },
          {
            type: 'image',
            properties: {
              uri: 'https://picsum.photos/200/300/?blur=1',
              style: {
                width: 200,
                height: 300,
              },
            },
          },
        ],
      },

      {
        type: 'header',
        properties: {
          containerStyle: {
            borderBottomColor: 'grey',
            borderBottomWidth: 1,
            backgroundColor: 'white',
            height: 80,
          },
          placement: 'left',
          fontSize: 30,
          width: '10%',
          leftComponent: {
            childrens: [
              {
                type: 'icon',
                properties: {
                  name: 'menu',
                  color: 'grey',
                  size: 40,
                },
              },
            ],
          },
          centerComponent: {
            childrens: [
              {
                type: 'text',
                properties: {
                  title: 'Welcome',
                  style: {color: 'black', fontSize: 15},
                },
              },
            ],
          },
          rightComponent: {
            childrens: [
              {
                type: 'view',
                properties: {
                  style: {
                    flex: 1,
                    flexDirection: 'row',
                  },
                },
              },
              {
                type: 'input',
                properties: {
                  containerStyle: {
                    width: 150,
                    height: 50,
                  },
                  inputStyle: {
                    height: 10,
                    width: 200,
                    color: 'black',
                  },
                  rightIcon: {
                    name: 'search',
                    color: 'lightblue',
                    size: 40,
                  },
                  placeholder: 'search user',
                },
              },
              {
                type: 'icon',
                properties: {
                  name: 'home',
                  color: 'lightblue',
                  size: 40,
                },
              },
            ],
          },
        },
      },
      {
        type: 'input',
        properties: {
          label: 'Mobile Number (10 digits)',
          placeholderTextColor: 'grey',
          style: {
            backgroundColor: 'white',
            borderColor: 'grey',
            borderWidth: 2,
            width: '90%',
            left: 20,
            marginTop: 40,
          },
        },
      },
      {
        type: 'button',
        properties: {
          title: 'FACEBOOK',
          titleStyle: {color: 'blue', fontSize: 20},
          buttonStyle: {
            backgroundColor: 'white',
            width: '90%',
            left: 20,
            borderWidth: 3,
            marginTop: 20,
          },
        },
      },
    ],
  },

  debugNavigator: {
    theme: '',
    screenName: 'Debug Navigator',
    data: [
      {
        type: 'text',
        properties: {
          title: 'Debug Navigator',
          style: {
            color: 'black',
            fontSize: 35,
            marginTop: '10%',
            width: '100%',
            left: 30,
            fontWeight: 'bold',
          },
        },
      },
      {
        type: 'text',
        properties: {
          title: 'Select a screen to view .This\nscreen is temporary',
          style: {
            color: 'grey',
            fontSize: 18,
            width: '200%',
            left: 30,
            marginTop: '5%',
          },
        },
      },
      {
        type: 'view',
        style: {flexDirection: 'row', marginTop: '10%', left: 50},
        childrens: [
          {
            type: 'text',
            properties: {
              title: 'Add Address',
              style: {
                color: 'black',
                fontSize: 25,
              },
              onPress: {
                navigation: true,
                screenName: 'Add Address',
                source: {
                  theme: '',
                  screenName: 'Add Address',
                  data: [
                    {
                      type: 'view',
                      style: {},
                      childrens: [
                        {
                          type: 'view',
                          style: {
                            borderBottomWidth: 25,
                            borderBottomColor: 'red',
                          },
                          childrens: [
                            {
                              type: 'header',
                              properties: {
                                containerStyle: {
                                  backgroundColor: 'red',
                                  borderBottomWidth: 0,
                                  height: 65,
                                  textAlign: 'center',
                                },
                                centerComponent: {
                                  childrens: [
                                    {
                                      type: 'view',
                                      properties: {
                                        style: {flexDirection: 'row'},
                                      },
                                    },
                                    {
                                      type: 'icon',
                                      properties: {
                                        name: 'long-arrow-left',
                                        type: 'font-awesome',
                                        color: 'white',
                                        size: 30,
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
                              borderBottomWidth: 0,

                              height: 40,
                            },
                            leftComponent: {
                              childrens: [
                                {
                                  type: 'view',
                                  properties: {
                                    style: {
                                      width: 500,
                                      marginLeft: -10,
                                      flexDirection: 'row',
                                      borderBottomWidth: 2,
                                      borderBottomColor: 'grey',
                                      backgroundColor: 'white',
                                    },
                                  },
                                },
                                {
                                  type: 'icon',
                                  properties: {
                                    name: 'plus-circle',
                                    type: 'font-awesome',
                                    color: 'red',
                                    iconStyle: {
                                      marginLeft: 4,
                                    },
                                  },
                                },
                                {
                                  type: 'text',
                                  properties: {
                                    title: 'Edit Your Addresses',
                                    style: {
                                      color: 'red',
                                      fontSize: 18,
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
                          marginTop: '110%',
                          backgroundColor: 'white',
                          borderRadius: 0,
                          //height: "20%",
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
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
                              fontSize: 20,
                              fontWeight: 'bold',
                              textAlign: 'center',
                              color: 'black',
                              alignSelf: 'flex-start',
                              marginLeft: 10,
                            },
                            title: 'Add new address',
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
                              width: '47%',
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
                              width: '47%',
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
                              width: '47%',
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
                              marginTop: 5,
                              alignSelf: 'center',
                              marginRight: 140,
                            },
                            titleStyle: {color: 'white'},
                          },
                        },
                      ],
                    },
                  ],
                },
              },
            },
          },
          {
            type: 'icon',
            properties: {
              name: 'chevron-right',
              type: 'font-awesome',
              color: 'black',
              size: 35,
              iconStyle: {marginLeft: '45%', marginTop: '3%'},
            },
          },
        ],
      },
      {
        type: 'divider',
        properties: {
          style: {borderWidth: 1, borderColor: 'lightgrey', left: 30},
        },
      },
      {
        type: 'view',
        style: {flexDirection: 'row', marginTop: '10%', left: 50},
        childrens: [
          {
            type: 'text',
            properties: {
              title: 'Log-in',
              style: {
                color: 'black',
                fontSize: 25,
              },
              onPress: {
                navigation: true,
                screenName: 'Home',
                source: {
                  // theme: 'darkTheme',
                  navigation: true,
                  screenName: 'Home',
                  data: [
                    {
                      type: 'view',
                      style: {
                        backgroundColor: 'red',
                        width: '100%',
                        height: '100%',
                      },
                      childrens: [
                        {
                          type: 'header',
                          properties: {
                            containerStyle: {
                              backgroundColor: 'red',
                              borderBottomWidth: 0,
                            },
                            centerComponent: {
                              childrens: [
                                {
                                  type: 'view',
                                  properties: {style: {flexDirection: 'row'}},
                                },
                                {
                                  type: 'text',
                                  properties: {
                                    title: 'Account',
                                    style: {
                                      color: 'white',
                                      fontSize: 30,
                                      fontWeight: 'bold',
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        },
                        {
                          type: 'view',
                          style: {marginLeft: 30},
                          childrens: [
                            {
                              type: 'header',
                              properties: {
                                containerStyle: {
                                  height: 150,
                                  backgroundColor: 'red',
                                  borderBottomWidth: 0,
                                },
                                placement: 'left',
                                centerComponent: {
                                  childrens: [
                                    {
                                      type: 'view',
                                      properties: {
                                        style: {flexDirection: 'row'},
                                      },
                                    },
                                    {
                                      type: 'icon',
                                      properties: {
                                        name: 'plus-circle',
                                        type: 'font-awesome',
                                        color: 'white',
                                        size: 60,
                                      },
                                    },
                                    {
                                      type: 'text',
                                      properties: {
                                        title: 'Medipick',
                                        style: {
                                          color: 'white',
                                          fontSize: 50,
                                          fontFamily: 'arial',
                                          marginBottom: 5,
                                          paddingLeft: 5,
                                          fontWeight: 'bold',
                                        },
                                      },
                                    },
                                  ],
                                },
                                centerContainerStyle: {
                                  paddingLeft: 0,
                                  marginLeft: 0,
                                },
                              },
                            },
                          ],
                        },

                        {
                          type: 'view',
                          style: {
                            flexDirection: 'row',
                            marginTop: 30,
                            marginLeft: 20,
                          },
                          childrens: [
                            {
                              type: 'text',
                              properties: {
                                title: 'Welcome',
                                style: {
                                  color: 'white',
                                  fontSize: 24,
                                  fontWeight: 'bold',
                                },
                              },
                            },
                            {
                              type: 'text',
                              properties: {
                                title: 'Please login here',
                                style: {
                                  color: 'white',
                                  fontSize: 21,
                                  marginLeft: 5,
                                  marginTop: 3,
                                  fontWeight: 'bold',
                                },
                              },
                            },
                          ],
                        },
                        {
                          type: 'view',
                          style: {
                            height: 50,
                            marginLeft: 10,
                            marginTop: 15,
                          },
                          childrens: [
                            {
                              type: 'input',
                              properties: {
                                leftIcon: {
                                  properties: {
                                    type: 'font-awesome',
                                    name: 'user',
                                    color: 'maroon',
                                  },
                                },
                                label: '  User Name / Email',
                                inputContainerStyle: {
                                  borderBottomWidth: 2,
                                  borderBottomColor: 'maroon',
                                  width: 300,
                                  fontSize: 20,
                                },
                                containerStyle: {},
                              },
                            },
                          ],
                        },
                        {
                          type: 'view',
                          style: {
                            height: 50,
                            marginLeft: 10,
                            marginTop: 15,
                          },
                          childrens: [
                            {
                              type: 'input',
                              properties: {
                                leftIcon: {
                                  properties: {
                                    type: 'font-awesome',
                                    name: 'lock',
                                    color: 'maroon',
                                  },
                                },
                                label: '  Password',
                                inputContainerStyle: {
                                  borderBottomWidth: 2,
                                  borderBottomColor: 'maroon',
                                  width: 300,
                                  fontSize: 20,
                                },
                                containerStyle: {},
                              },
                            },
                          ],
                        },
                        {
                          type: 'text',
                          properties: {
                            title: 'Forgot Password ?',
                            style: {
                              color: 'white',
                              fontSize: 20,
                              marginLeft: 150,
                              marginTop: 18,
                              fontWeight: 'bold',
                            },
                          },
                        },
                        {
                          type: 'button',
                          properties: {
                            title: 'Login',
                            titleStyle: {color: 'white', fontSize: 20},
                            buttonStyle: {
                              backgroundColor: 'firebrick',
                              width: '90%',
                              left: 20,
                              borderColor: 'red',
                              marginTop: 30,
                              borderRadius: 30,
                            },
                            onPress: {
                              navigation: true,
                              screenName: 'Add Address',
                              source: {
                                data: [
                                  {
                                    type: 'button',
                                    properties: {
                                      title: 'Sign Up',
                                      titleStyle: {
                                        color: 'white',
                                        fontSize: 20,
                                      },
                                      buttonStyle: {
                                        backgroundColor: 'lightcoral',
                                        width: '90%',
                                        left: 20,
                                        borderColor: 'red',
                                        marginTop: 40,
                                        borderRadius: 30,
                                      },
                                      onPress: {
                                        navigation: true,
                                        screenName: 'page3',
                                        source: {
                                          data: [
                                            {
                                              type: 'text',
                                              properties: {
                                                title: 'You Are on Page3',
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                ],
                              },
                            },
                          },
                        },
                        {
                          type: 'button',
                          properties: {
                            title: 'Sign Up',
                            titleStyle: {color: 'white', fontSize: 20},
                            buttonStyle: {
                              backgroundColor: 'lightcoral',
                              width: '90%',
                              left: 20,
                              borderColor: 'red',
                              marginTop: 30,
                              borderRadius: 30,
                            },
                          },
                        },
                      ],
                    },
                  ],
                },
              },
            },
          },
          {
            type: 'icon',
            properties: {
              name: 'chevron-right',
              type: 'font-awesome',
              color: 'black',
              size: 35,
              iconStyle: {marginLeft: '62%', marginTop: '3%'},
            },
          },
        ],
      },
      {
        type: 'divider',
        properties: {
          style: {borderWidth: 1, borderColor: 'lightgrey', left: 30},
        },
      },
      {
        type: 'view',
        style: {flexDirection: 'row', marginTop: '10%', left: 50},
        childrens: [
          {
            type: 'text',
            properties: {
              title: 'Login with Facebook',
              style: {
                color: 'black',
                fontSize: 25,
              },
              onPress: {
                screenName: 'Login Page',
                navigation: true,
                source: {
                  screenName: 'Login Page',
                  data: [
                    {
                      type: 'text',
                      properties: {
                        title: 'Log In',
                        style: {
                          color: 'black',
                          textAlign: 'center',
                          marginTop: 20,
                          fontSize: 40,
                          fontWeight: 'bold',
                        },
                      },
                    },
                    {
                      type: 'view',
                      style: {
                        flexDirection: 'row',
                        paddingLeft: 80,
                      },
                      childrens: [
                        {
                          type: 'text',
                          properties: {
                            title: 'New to this site ?',
                            style: {
                              color: 'black',
                              marginTop: 20,
                              fontSize: 20,
                              fontWeight: 'bold',
                            },
                          },
                        },
                        {
                          type: 'text',
                          properties: {
                            title: ' Sign Up',
                            style: {
                              color: 'green',
                              marginTop: 20,
                              fontSize: 20,
                              fontWeight: 'bold',
                            },
                          },
                        },
                      ],
                    },

                    {
                      type: 'button',
                      properties: {
                        title: 'Log in with Facebook',
                        titleStyle: {color: 'blue', fontSize: 20},
                        buttonStyle: {
                          backgroundColor: 'white',
                          width: '90%',
                          left: 20,
                          borderWidth: 3,
                          marginTop: 30,
                        },
                        onPress: {
                          navigation: true,
                          screenName: 'Checkout',
                          source: {
                            data: [
                              {
                                type: 'header',
                                properties: {
                                  containerStyle: {
                                    backgroundColor: 'white',
                                    borderBottomWidth: 1,
                                    borderBottomColor: 'black',
                                  },
                                  placement: 'left',
                                  centerComponent: {
                                    childrens: [
                                      {
                                        type: 'view',
                                        properties: {
                                          style: {flexDirection: 'row'},
                                        },
                                      },
                                      {
                                        type: 'text',
                                        properties: {
                                          title: 'Log in With Facebook',
                                          style: {
                                            color: 'black',
                                            fontSize: 19,
                                            textAlign: 'left',
                                            // fontWeight: 'bold',
                                          },
                                        },
                                      },
                                    ],
                                  },
                                  rightComponent: {
                                    childrens: [
                                      {
                                        type: 'view',
                                        properties: {
                                          style: {flexDirection: 'row'},
                                        },
                                      },
                                      {
                                        type: 'icon',
                                        properties: {
                                          name: 'close',
                                          color: 'black',
                                          size: 30,
                                          onPress: {
                                            navigation: true,
                                            screenName: 'Login Page',
                                          },
                                        },
                                      },
                                    ],
                                  },
                                },
                              },
                              {
                                type: 'input',
                                properties: {
                                  label: 'Mobile Number (10 digits)',
                                  selectionColor: 'grey',
                                  containerStyle: {
                                    backgroundColor: 'white',
                                    borderColor: 'grey',
                                    borderWidth: 1,
                                    width: '90%',
                                    left: 20,
                                    marginTop: 40,
                                  },
                                  inputContainerStyle: {
                                    borderBottomWidth: 0,
                                  },
                                  rightIcon: {
                                    properties: {
                                      name: 'arrow-right',
                                      color: 'white',
                                      size: 20,
                                      type: 'font-awesome',
                                      rightIconContainerStyle: {
                                        backgroundColor: 'grey',
                                        borderWidth: 24,
                                        borderColor: 'lightgrey',
                                        left: 10,
                                      },
                                    },
                                  },
                                },
                              },
                              {
                                type: 'button',
                                properties: {
                                  title: 'FACEBOOK',
                                  titleStyle: {color: 'blue', fontSize: 20},
                                  buttonStyle: {
                                    backgroundColor: 'white',
                                    width: '90%',
                                    left: 20,
                                    borderWidth: 3,
                                    marginTop: 20,
                                  },
                                  onPress: {
                                    navigation: true,
                                    screenName: 'faceBook HomePage',
                                    source: {
                                      data: [
                                        {
                                          type: 'text',
                                          properties: {
                                            title:
                                              'Welcome to our Facebook Page!',
                                            style: {
                                              marginTop: 20,
                                              fontSize: 20,
                                              fontWeight: 'bold',
                                              textAlign: 'center',
                                            },
                                          },
                                        },
                                        {
                                          type: 'text',
                                          properties: {
                                            title: 'Back to Login Page',
                                            style: {
                                              // position: 'absolute',
                                              left: 50,
                                              top: 500,
                                              fontSize: 20,
                                            },
                                            onPress: {
                                              screenName: 'Login Page',
                                            },
                                          },
                                        },
                                      ],
                                    },
                                  },
                                },
                              },
                            ],
                          },
                        },
                      },
                    },
                    {
                      type: 'button',
                      properties: {
                        title: 'Log in with Google',
                        titleStyle: {color: 'blue', fontSize: 20},
                        buttonStyle: {
                          backgroundColor: 'white',
                          width: '90%',
                          left: 20,
                          borderWidth: 3,
                          marginTop: 30,
                        },
                      },
                    },
                  ],
                },
              },
            },
          },
          {
            type: 'icon',
            properties: {
              name: 'chevron-right',
              type: 'font-awesome',
              color: 'black',
              size: 35,
              iconStyle: {marginLeft: '21%', marginTop: '3%'},
            },
          },
        ],
      },
      {
        type: 'divider',
        properties: {
          style: {borderWidth: 1, borderColor: 'lightgrey', left: 30},
        },
      },
      {
        type: 'view',
        style: {flexDirection: 'row', marginTop: '10%', left: 50},
        childrens: [
          {
            type: 'text',
            properties: {
              title: 'Open Modal',
              style: {
                color: 'black',
                fontSize: 25,
              },
              onPress: {
                navigation: true,
                screenName: 'Modal Screen',
                source: {
                  screenName: 'Modal Screen',
                  data: [
                    {
                      type: 'modal',
                      properties: {
                        style: {
                          margin: 0,
                          width: '100%',
                          marginTop: '140%',
                          maxHeight: 200,
                          backgroundColor: 'white',
                          borderRadius: 0,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        },
                        backdropColor: 'grey',
                        closeModal: ['onSwipeComplete'],
                        swipeDirection: 'left',
                        onBackButtonPress: {
                          navigation: true,
                          screenName: 'Debug Navigator',
                        },
                      },
                      childrens: [
                        {
                          type: 'button',
                          properties: {
                            title: 'OPTION 1',
                            buttonStyle: {
                              backgroundColor: 'white',
                              borderColor: 'black',
                              width: '98%',
                              left: 70,
                              borderWidth: 3,
                              marginTop: 5,
                              alignSelf: 'center',
                              marginRight: 140,
                            },
                            titleStyle: {color: 'black'},
                            onPress: {
                              screenName: 'Home',
                              navigation: true,
                              source: {
                                data: [
                                  {
                                    type: 'view',
                                    style: {
                                      backgroundColor: 'red',
                                      width: '100%',
                                      height: '100%',
                                    },
                                    childrens: [
                                      {
                                        type: 'header',
                                        properties: {
                                          containerStyle: {
                                            backgroundColor: 'red',
                                            borderBottomWidth: 0,
                                          },
                                          centerComponent: {
                                            childrens: [
                                              {
                                                type: 'view',
                                                properties: {
                                                  style: {flexDirection: 'row'},
                                                },
                                              },
                                              {
                                                type: 'text',
                                                properties: {
                                                  title: 'Account',
                                                  style: {
                                                    color: 'white',
                                                    fontSize: 30,
                                                    fontWeight: 'bold',
                                                  },
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      },
                                      {
                                        type: 'view',
                                        style: {marginLeft: 30},
                                        childrens: [
                                          {
                                            type: 'header',
                                            properties: {
                                              containerStyle: {
                                                height: 150,
                                                backgroundColor: 'red',
                                                borderBottomWidth: 0,
                                              },
                                              placement: 'left',
                                              centerComponent: {
                                                childrens: [
                                                  {
                                                    type: 'view',
                                                    properties: {
                                                      style: {
                                                        flexDirection: 'row',
                                                      },
                                                    },
                                                  },
                                                  {
                                                    type: 'icon',
                                                    properties: {
                                                      name: 'plus-circle',
                                                      type: 'font-awesome',
                                                      color: 'white',
                                                      size: 60,
                                                    },
                                                  },
                                                  {
                                                    type: 'text',
                                                    properties: {
                                                      title: 'Medipick',
                                                      style: {
                                                        color: 'white',
                                                        fontSize: 50,
                                                        fontFamily: 'arial',
                                                        marginBottom: 5,
                                                        paddingLeft: 5,
                                                        fontWeight: 'bold',
                                                      },
                                                    },
                                                  },
                                                ],
                                              },
                                              centerContainerStyle: {
                                                paddingLeft: 0,
                                                marginLeft: 0,
                                              },
                                            },
                                          },
                                        ],
                                      },

                                      {
                                        type: 'view',
                                        style: {
                                          flexDirection: 'row',
                                          marginTop: 30,
                                          marginLeft: 20,
                                        },
                                        childrens: [
                                          {
                                            type: 'text',
                                            properties: {
                                              title: 'Welcome',
                                              style: {
                                                color: 'white',
                                                fontSize: 24,
                                                fontWeight: 'bold',
                                              },
                                            },
                                          },
                                          {
                                            type: 'text',
                                            properties: {
                                              title: 'Please login here',
                                              style: {
                                                color: 'white',
                                                fontSize: 21,
                                                marginLeft: 5,
                                                marginTop: 3,
                                                fontWeight: 'bold',
                                              },
                                            },
                                          },
                                        ],
                                      },
                                      {
                                        type: 'view',
                                        style: {
                                          width: '100%',
                                          height: 50,
                                          flexDirection: 'row',
                                          backgroundColor: 'red',
                                          marginLeft: 20,
                                          marginTop: 15,
                                        },
                                        childrens: [
                                          {
                                            type: 'icon',
                                            properties: {
                                              name: 'user',
                                              size: 30,
                                              iconType: 'font-awesome',
                                              disabled: false,
                                              raised: false,
                                              iconStyle: {
                                                color: 'maroon',
                                              },
                                              containerStyle: {
                                                alignSelf: 'flex-end',
                                                marginTop: 12,
                                              },
                                            },
                                          },
                                          {
                                            type: 'input',
                                            properties: {
                                              label: 'User Name / Email',
                                              placeholderTextColor: 'maroon',
                                              style: {
                                                borderBottomWidth: 2,
                                                borderBottomColor: 'maroon',
                                                width: 270,
                                                left: 20,
                                                fontSize: 16,
                                              },
                                            },
                                          },
                                        ],
                                      },
                                      {
                                        type: 'view',
                                        style: {
                                          height: 50,
                                          flexDirection: 'row',
                                          backgroundColor: 'red',
                                          marginLeft: 20,
                                          marginTop: 15,
                                        },
                                        childrens: [
                                          {
                                            type: 'icon',
                                            properties: {
                                              name: 'lock',
                                              size: 30,
                                              iconType: 'font-awesome',
                                              disabled: false,
                                              raised: false,
                                              iconStyle: {
                                                color: 'maroon',
                                              },
                                              containerStyle: {
                                                alignSelf: 'flex-end',
                                                marginTop: 12,
                                              },
                                            },
                                          },
                                          {
                                            type: 'input',
                                            properties: {
                                              label: 'Password',
                                              placeholderTextColor: 'maroon',
                                              style: {
                                                borderBottomWidth: 2,
                                                borderBottomColor: 'maroon',
                                                width: 270,
                                                left: 20,
                                                fontSize: 16,
                                              },
                                            },
                                          },
                                        ],
                                      },
                                      {
                                        type: 'text',
                                        properties: {
                                          title: 'Forgot Password ?',
                                          style: {
                                            color: 'white',
                                            fontSize: 20,
                                            marginLeft: 150,
                                            marginTop: 18,
                                            fontWeight: 'bold',
                                          },
                                        },
                                      },
                                      {
                                        type: 'button',
                                        properties: {
                                          title: 'Login',
                                          titleStyle: {
                                            color: 'white',
                                            fontSize: 20,
                                          },
                                          buttonStyle: {
                                            backgroundColor: 'firebrick',
                                            width: '90%',
                                            left: 20,
                                            borderColor: 'red',
                                            marginTop: 30,
                                            borderRadius: 30,
                                          },
                                          onPress: {
                                            navigation: true,
                                            screenName: 'Add Address',
                                            source: {
                                              data: [
                                                {
                                                  type: 'button',
                                                  properties: {
                                                    title: 'Sign Up',
                                                    titleStyle: {
                                                      color: 'white',
                                                      fontSize: 20,
                                                    },
                                                    buttonStyle: {
                                                      backgroundColor:
                                                        'lightcoral',
                                                      width: '90%',
                                                      left: 20,
                                                      borderColor: 'red',
                                                      marginTop: 40,
                                                      borderRadius: 30,
                                                    },
                                                    onPress: {
                                                      navigation: true,
                                                      screenName: 'page3',
                                                      source: {
                                                        data: [
                                                          {
                                                            type: 'text',
                                                            properties: {
                                                              title:
                                                                'You Are on Page3',
                                                            },
                                                          },
                                                        ],
                                                      },
                                                    },
                                                  },
                                                },
                                              ],
                                            },
                                          },
                                        },
                                      },
                                      {
                                        type: 'button',
                                        properties: {
                                          title: 'Sign Up',
                                          titleStyle: {
                                            color: 'white',
                                            fontSize: 20,
                                          },
                                          buttonStyle: {
                                            backgroundColor: 'lightcoral',
                                            width: '90%',
                                            left: 20,
                                            borderColor: 'red',
                                            marginTop: 30,
                                            borderRadius: 30,
                                          },
                                        },
                                      },
                                    ],
                                  },
                                ],
                              },
                            },
                          },
                        },
                        {
                          type: 'button',
                          properties: {
                            title: 'OPTION 2',
                            buttonStyle: {
                              backgroundColor: 'white',
                              borderColor: 'black',
                              width: '98%',
                              left: 70,
                              borderWidth: 3,
                              marginTop: 5,
                              alignSelf: 'center',
                              marginRight: 140,
                            },
                            titleStyle: {color: 'black'},
                            onPress: {
                              screenName: 'Login Page',
                              navigation: true,
                              source: {
                                screenName: 'Login Page',
                                data: [
                                  {
                                    type: 'text',
                                    properties: {
                                      title: 'Log In',
                                      style: {
                                        color: 'black',
                                        textAlign: 'center',
                                        marginTop: 20,
                                        fontSize: 40,
                                        fontWeight: 'bold',
                                      },
                                    },
                                  },
                                  {
                                    type: 'view',
                                    style: {
                                      flexDirection: 'row',
                                      paddingLeft: 80,
                                    },
                                    childrens: [
                                      {
                                        type: 'text',
                                        properties: {
                                          title: 'New to this site ?',
                                          style: {
                                            color: 'black',
                                            marginTop: 20,
                                            fontSize: 20,
                                            fontWeight: 'bold',
                                          },
                                        },
                                      },
                                      {
                                        type: 'text',
                                        properties: {
                                          title: ' Sign Up',
                                          style: {
                                            color: 'green',
                                            marginTop: 20,
                                            fontSize: 20,
                                            fontWeight: 'bold',
                                          },
                                        },
                                      },
                                    ],
                                  },

                                  {
                                    type: 'button',
                                    properties: {
                                      title: 'Log in with Facebook',
                                      titleStyle: {color: 'blue', fontSize: 20},
                                      buttonStyle: {
                                        backgroundColor: 'white',
                                        width: '90%',
                                        left: 20,
                                        borderWidth: 3,
                                        marginTop: 30,
                                      },
                                      onPress: {
                                        navigation: true,
                                        screenName: 'Checkout',
                                        source: {
                                          data: [
                                            {
                                              type: 'header',
                                              properties: {
                                                containerStyle: {
                                                  backgroundColor: 'white',
                                                  borderBottomWidth: 1,
                                                  borderBottomColor: 'black',
                                                },
                                                placement: 'left',
                                                centerComponent: {
                                                  childrens: [
                                                    {
                                                      type: 'view',
                                                      properties: {
                                                        style: {
                                                          flexDirection: 'row',
                                                        },
                                                      },
                                                    },
                                                    {
                                                      type: 'text',
                                                      properties: {
                                                        title:
                                                          'Log in With Facebook',
                                                        style: {
                                                          color: 'black',
                                                          fontSize: 19,
                                                          textAlign: 'left',
                                                          // fontWeight: 'bold',
                                                        },
                                                      },
                                                    },
                                                  ],
                                                },
                                                rightComponent: {
                                                  childrens: [
                                                    {
                                                      type: 'view',
                                                      properties: {
                                                        style: {
                                                          flexDirection: 'row',
                                                        },
                                                      },
                                                    },
                                                    {
                                                      type: 'icon',
                                                      properties: {
                                                        name: 'close',
                                                        color: 'black',
                                                        size: 30,
                                                        onPress: {
                                                          navigation: true,
                                                          screenName:
                                                            'Login Page',
                                                        },
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            },
                                            // {
                                            //   type: 'input',
                                            //   properties: {
                                            //     label:
                                            //       'Mobile Number (10 digits)',
                                            //     placeholderTextColor: 'grey',
                                            //     style: {
                                            //       backgroundColor: 'white',
                                            //       borderColor: 'grey',
                                            //       borderWidth: 2,
                                            //       width: '90%',
                                            //       left: 20,
                                            //       marginTop: 40,
                                            //     },
                                            //   },
                                            //   childrens: [
                                            //     {
                                            //       type: 'icon',
                                            //       properties: {
                                            //         name: 'search',
                                            //         color: 'red',
                                            //         size: 40,
                                            //       },
                                            //     },
                                            //     {
                                            //       type: 'icon',
                                            //       properties: {
                                            //         name: 'facebook',
                                            //         color: 'red',
                                            //         size: 40,
                                            //       },
                                            //     },
                                            //   ],
                                            // },
                                            {
                                              type: 'button',
                                              properties: {
                                                title: 'FACEBOOK',
                                                titleStyle: {
                                                  color: 'blue',
                                                  fontSize: 20,
                                                },
                                                buttonStyle: {
                                                  backgroundColor: 'white',
                                                  width: '90%',
                                                  left: 20,
                                                  borderWidth: 3,
                                                  marginTop: 20,
                                                },
                                                onPress: {
                                                  navigation: true,
                                                  screenName:
                                                    'faceBook HomePage',
                                                  source: {
                                                    data: [
                                                      {
                                                        type: 'text',
                                                        properties: {
                                                          title:
                                                            'Welcome to our Facebook Page!',
                                                          style: {
                                                            marginTop: 20,
                                                            fontSize: 20,
                                                            fontWeight: 'bold',
                                                            textAlign: 'center',
                                                          },
                                                        },
                                                      },
                                                      {
                                                        type: 'text',
                                                        properties: {
                                                          title:
                                                            'Back to Login Page',
                                                          style: {
                                                            // position: 'absolute',
                                                            left: 50,
                                                            top: 500,
                                                            fontSize: 20,
                                                          },
                                                          onPress: {
                                                            screenName:
                                                              'Login Page',
                                                          },
                                                        },
                                                      },
                                                    ],
                                                  },
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                  {
                                    type: 'button',
                                    properties: {
                                      title: 'Log in with Google',
                                      titleStyle: {color: 'blue', fontSize: 20},
                                      buttonStyle: {
                                        backgroundColor: 'white',
                                        width: '90%',
                                        left: 20,
                                        borderWidth: 3,
                                        marginTop: 30,
                                      },
                                    },
                                  },
                                ],
                              },
                            },
                          },
                        },
                        {
                          type: 'button',
                          properties: {
                            title: 'OPTION 3',
                            buttonStyle: {
                              backgroundColor: 'white',
                              borderColor: 'black',
                              width: '98%',
                              left: 70,
                              borderWidth: 3,
                              marginTop: 5,
                              alignSelf: 'center',
                              marginRight: 140,
                            },
                            onPress: {
                              screenName: 'Add Address',
                              navigation: true,
                              source: {
                                theme: '',
                                screenName: 'Add Address',
                                data: [
                                  {
                                    type: 'view',
                                    style: {},
                                    childrens: [
                                      {
                                        type: 'view',
                                        style: {
                                          borderBottomWidth: 25,
                                          borderBottomColor: 'red',
                                        },
                                        childrens: [
                                          {
                                            type: 'header',
                                            properties: {
                                              containerStyle: {
                                                backgroundColor: 'red',
                                                borderBottomWidth: 0,
                                                height: 65,
                                                textAlign: 'center',
                                              },
                                              centerComponent: {
                                                childrens: [
                                                  {
                                                    type: 'view',
                                                    properties: {
                                                      style: {
                                                        flexDirection: 'row',
                                                      },
                                                    },
                                                  },
                                                  {
                                                    type: 'icon',
                                                    properties: {
                                                      name: 'long-arrow-left',
                                                      type: 'font-awesome',
                                                      color: 'white',
                                                      size: 30,
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
                                            borderBottomWidth: 0,

                                            height: 40,
                                          },
                                          leftComponent: {
                                            childrens: [
                                              {
                                                type: 'view',
                                                properties: {
                                                  style: {
                                                    width: 500,
                                                    marginLeft: -10,
                                                    flexDirection: 'row',
                                                    borderBottomWidth: 2,
                                                    borderBottomColor: 'grey',
                                                    backgroundColor: 'white',
                                                  },
                                                },
                                              },
                                              {
                                                type: 'icon',
                                                properties: {
                                                  name: 'plus-circle',
                                                  type: 'font-awesome',
                                                  color: 'red',
                                                  iconStyle: {
                                                    marginLeft: 4,
                                                  },
                                                },
                                              },
                                              {
                                                type: 'text',
                                                properties: {
                                                  title: 'Edit Your Addresses',
                                                  style: {
                                                    color: 'red',
                                                    fontSize: 18,
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
                                        marginTop: '110%',
                                        backgroundColor: 'white',
                                        borderRadius: 0,
                                        //height: "20%",
                                        borderTopLeftRadius: 10,
                                        borderTopRightRadius: 10,
                                      },
                                      backdropColor: 'grey',
                                      closeModal: [
                                        'onBackButtonPress',
                                        'onSwipeComplete',
                                      ],
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
                                            fontSize: 20,
                                            fontWeight: 'bold',
                                            textAlign: 'center',
                                            color: 'black',
                                            alignSelf: 'flex-start',
                                            marginLeft: 10,
                                          },
                                          title: 'Add new address',
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
                                            width: '47%',
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
                                            width: '47%',
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
                                            width: '47%',
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
                                            marginTop: 5,
                                            alignSelf: 'center',
                                            marginRight: 140,
                                          },
                                          titleStyle: {color: 'white'},
                                        },
                                      },
                                    ],
                                  },
                                ],
                              },
                            },
                            titleStyle: {color: 'black'},
                          },
                        },
                      ],
                    },
                  ],
                },
              },
            },
          },
          {
            type: 'icon',
            properties: {
              name: 'chevron-right',
              type: 'font-awesome',
              color: 'black',
              size: 35,
              iconStyle: {marginLeft: '47%', marginTop: '3%'},
            },
          },
        ],
      },
      {
        type: 'divider',
        properties: {
          style: {borderWidth: 1, borderColor: 'lightgrey', left: 30},
        },
      },
    ],
  },

  modalData: {
    screenName: 'Modal Screen',
    data: [
      {
        type: 'modal',
        properties: {
          style: {
            margin: 0,
            width: '100%',
            marginTop: 550,
            backgroundColor: 'white',
            borderRadius: 0,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          },
          backdropColor: 'grey',
          closeModal: ['onBackButtonPress', 'onSwipeComplete'],
          swipeDirection: 'left',
        },
        childrens: [
          {
            type: 'button',
            properties: {
              title: 'OPTION 1',
              buttonStyle: {
                backgroundColor: 'red',
                borderColor: 'red',
                width: '98%',
                left: 70,
                borderWidth: 3,
                marginTop: 5,
                alignSelf: 'center',
                marginRight: 140,
              },
              titleStyle: {color: 'white'},
              onPress: {
                screenName: 'Home',
                navigation: true,
                source: {
                  data: [
                    {
                      type: 'view',
                      style: {
                        backgroundColor: 'red',
                        width: '100%',
                        height: '100%',
                      },
                      childrens: [
                        {
                          type: 'header',
                          properties: {
                            containerStyle: {
                              backgroundColor: 'red',
                              borderBottomWidth: 0,
                            },
                            centerComponent: {
                              childrens: [
                                {
                                  type: 'view',
                                  properties: {style: {flexDirection: 'row'}},
                                },
                                {
                                  type: 'text',
                                  properties: {
                                    title: 'Account',
                                    style: {
                                      color: 'white',
                                      fontSize: 30,
                                      fontWeight: 'bold',
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        },
                        {
                          type: 'view',
                          style: {marginLeft: 30},
                          childrens: [
                            {
                              type: 'header',
                              properties: {
                                containerStyle: {
                                  height: 150,
                                  backgroundColor: 'red',
                                  borderBottomWidth: 0,
                                },
                                placement: 'left',
                                centerComponent: {
                                  childrens: [
                                    {
                                      type: 'view',
                                      properties: {
                                        style: {flexDirection: 'row'},
                                      },
                                    },
                                    {
                                      type: 'icon',
                                      properties: {
                                        name: 'plus-circle',
                                        type: 'font-awesome',
                                        color: 'white',
                                        size: 60,
                                      },
                                    },
                                    {
                                      type: 'text',
                                      properties: {
                                        title: 'Medipick',
                                        style: {
                                          color: 'white',
                                          fontSize: 50,
                                          fontFamily: 'arial',
                                          marginBottom: 5,
                                          paddingLeft: 5,
                                          fontWeight: 'bold',
                                        },
                                      },
                                    },
                                  ],
                                },
                                centerContainerStyle: {
                                  paddingLeft: 0,
                                  marginLeft: 0,
                                },
                              },
                            },
                          ],
                        },

                        {
                          type: 'view',
                          style: {
                            flexDirection: 'row',
                            marginTop: 30,
                            marginLeft: 20,
                          },
                          childrens: [
                            {
                              type: 'text',
                              properties: {
                                title: 'Welcome',
                                style: {
                                  color: 'white',
                                  fontSize: 24,
                                  fontWeight: 'bold',
                                },
                              },
                            },
                            {
                              type: 'text',
                              properties: {
                                title: 'Please login here',
                                style: {
                                  color: 'white',
                                  fontSize: 21,
                                  marginLeft: 5,
                                  marginTop: 3,
                                  fontWeight: 'bold',
                                },
                              },
                            },
                          ],
                        },
                        {
                          type: 'view',
                          style: {
                            width: '100%',
                            height: 50,
                            flexDirection: 'row',
                            backgroundColor: 'red',
                            marginLeft: 20,
                            marginTop: 15,
                          },
                          childrens: [
                            {
                              type: 'icon',
                              properties: {
                                name: 'user',
                                size: 30,
                                iconType: 'font-awesome',
                                disabled: false,
                                raised: false,
                                iconStyle: {
                                  color: 'maroon',
                                },
                                containerStyle: {
                                  alignSelf: 'flex-end',
                                  marginTop: 12,
                                },
                              },
                            },
                            {
                              type: 'input',
                              properties: {
                                label: 'User Name / Email',
                                placeholderTextColor: 'maroon',
                                style: {
                                  borderBottomWidth: 2,
                                  borderBottomColor: 'maroon',
                                  width: 270,
                                  left: 20,
                                  fontSize: 16,
                                },
                              },
                            },
                          ],
                        },
                        {
                          type: 'view',
                          style: {
                            height: 50,
                            flexDirection: 'row',
                            backgroundColor: 'red',
                            marginLeft: 20,
                            marginTop: 15,
                          },
                          childrens: [
                            {
                              type: 'icon',
                              properties: {
                                name: 'lock',
                                size: 30,
                                iconType: 'font-awesome',
                                disabled: false,
                                raised: false,
                                iconStyle: {
                                  color: 'maroon',
                                },
                                containerStyle: {
                                  alignSelf: 'flex-end',
                                  marginTop: 12,
                                },
                              },
                            },
                            {
                              type: 'input',
                              properties: {
                                label: 'Password',
                                placeholderTextColor: 'maroon',
                                style: {
                                  borderBottomWidth: 2,
                                  borderBottomColor: 'maroon',
                                  width: 270,
                                  left: 20,
                                  fontSize: 16,
                                },
                              },
                            },
                          ],
                        },
                        {
                          type: 'text',
                          properties: {
                            title: 'Forgot Password ?',
                            style: {
                              color: 'white',
                              fontSize: 20,
                              marginLeft: 150,
                              marginTop: 18,
                              fontWeight: 'bold',
                            },
                          },
                        },
                        {
                          type: 'button',
                          properties: {
                            title: 'Login',
                            titleStyle: {color: 'white', fontSize: 20},
                            buttonStyle: {
                              backgroundColor: 'firebrick',
                              width: '90%',
                              left: 20,
                              borderColor: 'red',
                              marginTop: 30,
                              borderRadius: 30,
                            },
                            onPress: {
                              navigation: true,
                              screenName: 'Add Address',
                              source: {
                                data: [
                                  {
                                    type: 'button',
                                    properties: {
                                      title: 'Sign Up',
                                      titleStyle: {
                                        color: 'white',
                                        fontSize: 20,
                                      },
                                      buttonStyle: {
                                        backgroundColor: 'lightcoral',
                                        width: '90%',
                                        left: 20,
                                        borderColor: 'red',
                                        marginTop: 40,
                                        borderRadius: 30,
                                      },
                                      onPress: {
                                        navigation: true,
                                        screenName: 'page3',
                                        source: {
                                          data: [
                                            {
                                              type: 'text',
                                              properties: {
                                                title: 'You Are on Page3',
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                ],
                              },
                            },
                          },
                        },
                        {
                          type: 'button',
                          properties: {
                            title: 'Sign Up',
                            titleStyle: {color: 'white', fontSize: 20},
                            buttonStyle: {
                              backgroundColor: 'lightcoral',
                              width: '90%',
                              left: 20,
                              borderColor: 'red',
                              marginTop: 30,
                              borderRadius: 30,
                            },
                          },
                        },
                      ],
                    },
                  ],
                },
              },
            },
          },
          {
            type: 'button',
            properties: {
              title: 'OPTION 2',
              buttonStyle: {
                backgroundColor: 'red',
                borderColor: 'red',
                width: '98%',
                left: 70,
                borderWidth: 3,
                marginTop: 5,
                alignSelf: 'center',
                marginRight: 140,
              },
              titleStyle: {color: 'white'},
              onPress: {
                screenName: 'Login Page',
                navigation: true,
                source: {
                  screenName: 'Login Page',
                  data: [
                    {
                      type: 'text',
                      properties: {
                        title: 'Log In',
                        style: {
                          color: 'black',
                          textAlign: 'center',
                          marginTop: 20,
                          fontSize: 40,
                          fontWeight: 'bold',
                        },
                      },
                    },
                    {
                      type: 'view',
                      style: {
                        flexDirection: 'row',
                        paddingLeft: 80,
                      },
                      childrens: [
                        {
                          type: 'text',
                          properties: {
                            title: 'New to this site ?',
                            style: {
                              color: 'black',
                              marginTop: 20,
                              fontSize: 20,
                              fontWeight: 'bold',
                            },
                          },
                        },
                        {
                          type: 'text',
                          properties: {
                            title: ' Sign Up',
                            style: {
                              color: 'green',
                              marginTop: 20,
                              fontSize: 20,
                              fontWeight: 'bold',
                            },
                          },
                        },
                      ],
                    },

                    {
                      type: 'button',
                      properties: {
                        title: 'Log in with Facebook',
                        titleStyle: {color: 'blue', fontSize: 20},
                        buttonStyle: {
                          backgroundColor: 'white',
                          width: '90%',
                          left: 20,
                          borderWidth: 3,
                          marginTop: 30,
                        },
                        onPress: {
                          navigation: true,
                          screenName: 'Checkout',
                          source: {
                            data: [
                              {
                                type: 'header',
                                properties: {
                                  containerStyle: {
                                    backgroundColor: 'white',
                                    borderBottomWidth: 1,
                                    borderBottomColor: 'black',
                                  },
                                  placement: 'left',
                                  centerComponent: {
                                    childrens: [
                                      {
                                        type: 'view',
                                        properties: {
                                          style: {flexDirection: 'row'},
                                        },
                                      },
                                      {
                                        type: 'text',
                                        properties: {
                                          title: 'Log in With Facebook',
                                          style: {
                                            color: 'black',
                                            fontSize: 19,
                                            textAlign: 'left',
                                            // fontWeight: 'bold',
                                          },
                                        },
                                      },
                                    ],
                                  },
                                  rightComponent: {
                                    childrens: [
                                      {
                                        type: 'view',
                                        properties: {
                                          style: {flexDirection: 'row'},
                                        },
                                      },
                                      {
                                        type: 'icon',
                                        properties: {
                                          name: 'close',
                                          color: 'black',
                                          size: 30,
                                          onPress: {
                                            navigation: true,
                                            screenName: 'Login Page',
                                          },
                                        },
                                      },
                                    ],
                                  },
                                },
                              },
                              {
                                type: 'input',
                                properties: {
                                  label: 'Mobile Number (10 digits)',
                                  placeholderTextColor: 'grey',
                                  style: {
                                    backgroundColor: 'white',
                                    borderColor: 'grey',
                                    borderWidth: 2,
                                    width: '90%',
                                    left: 20,
                                    marginTop: 40,
                                  },
                                },
                                childrens: [
                                  {
                                    type: 'icon',
                                    properties: {
                                      name: 'search',
                                      color: 'red',
                                      size: 40,
                                    },
                                  },
                                  {
                                    type: 'icon',
                                    properties: {
                                      name: 'facebook',
                                      color: 'red',
                                      size: 40,
                                    },
                                  },
                                ],
                              },
                              {
                                type: 'button',
                                properties: {
                                  title: 'FACEBOOK',
                                  titleStyle: {color: 'blue', fontSize: 20},
                                  buttonStyle: {
                                    backgroundColor: 'white',
                                    width: '90%',
                                    left: 20,
                                    borderWidth: 3,
                                    marginTop: 20,
                                  },
                                  onPress: {
                                    navigation: true,
                                    screenName: 'faceBook HomePage',
                                    source: {
                                      data: [
                                        {
                                          type: 'text',
                                          properties: {
                                            title:
                                              'Welcome to our Facebook Page!',
                                            style: {
                                              marginTop: 20,
                                              fontSize: 20,
                                              fontWeight: 'bold',
                                              textAlign: 'center',
                                            },
                                          },
                                        },
                                        {
                                          type: 'text',
                                          properties: {
                                            title: 'Back to Login Page',
                                            style: {
                                              // position: 'absolute',
                                              left: 50,
                                              top: 500,
                                              fontSize: 20,
                                            },
                                            onPress: {
                                              screenName: 'Login Page',
                                            },
                                          },
                                        },
                                      ],
                                    },
                                  },
                                },
                              },
                            ],
                          },
                        },
                      },
                    },
                    {
                      type: 'button',
                      properties: {
                        title: 'Log in with Google',
                        titleStyle: {color: 'blue', fontSize: 20},
                        buttonStyle: {
                          backgroundColor: 'white',
                          width: '90%',
                          left: 20,
                          borderWidth: 3,
                          marginTop: 30,
                        },
                      },
                    },
                  ],
                },
              },
            },
          },
          {
            type: 'button',
            properties: {
              title: 'OPTION 3',
              buttonStyle: {
                backgroundColor: 'red',
                borderColor: 'red',
                width: '98%',
                left: 70,
                borderWidth: 3,
                marginTop: 5,
                alignSelf: 'center',
                marginRight: 140,
              },
              onPress: {
                screenName: 'Add Address',
                navigation: true,
                source: {
                  theme: '',
                  screenName: 'Add Address',
                  data: [
                    {
                      type: 'view',
                      style: {},
                      childrens: [
                        {
                          type: 'view',
                          style: {
                            borderBottomWidth: 25,
                            borderBottomColor: 'red',
                          },
                          childrens: [
                            {
                              type: 'header',
                              properties: {
                                containerStyle: {
                                  backgroundColor: 'red',
                                  borderBottomWidth: 0,
                                  height: 65,
                                  textAlign: 'center',
                                },
                                centerComponent: {
                                  childrens: [
                                    {
                                      type: 'view',
                                      properties: {
                                        style: {flexDirection: 'row'},
                                      },
                                    },
                                    {
                                      type: 'icon',
                                      properties: {
                                        name: 'long-arrow-left',
                                        type: 'font-awesome',
                                        color: 'white',
                                        size: 30,
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
                              borderBottomWidth: 0,

                              height: 40,
                            },
                            leftComponent: {
                              childrens: [
                                {
                                  type: 'view',
                                  properties: {
                                    style: {
                                      width: 500,
                                      marginLeft: -10,
                                      flexDirection: 'row',
                                      borderBottomWidth: 2,
                                      borderBottomColor: 'grey',
                                      backgroundColor: 'white',
                                    },
                                  },
                                },
                                {
                                  type: 'icon',
                                  properties: {
                                    name: 'plus-circle',
                                    type: 'font-awesome',
                                    color: 'red',
                                    iconStyle: {
                                      marginLeft: 4,
                                    },
                                  },
                                },
                                {
                                  type: 'text',
                                  properties: {
                                    title: 'Edit Your Addresses',
                                    style: {
                                      color: 'red',
                                      fontSize: 18,
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
                          marginTop: '110%',
                          backgroundColor: 'white',
                          borderRadius: 0,
                          //height: "20%",
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
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
                              fontSize: 20,
                              fontWeight: 'bold',
                              textAlign: 'center',
                              color: 'black',
                              alignSelf: 'flex-start',
                              marginLeft: 10,
                            },
                            title: 'Add new address',
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
                              width: '47%',
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
                              width: '47%',
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
                              width: '47%',
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
                              marginTop: 5,
                              alignSelf: 'center',
                              marginRight: 140,
                            },
                            titleStyle: {color: 'white'},
                          },
                        },
                      ],
                    },
                  ],
                },
              },
              titleStyle: {color: 'white'},
            },
          },
        ],
      },
    ],
  },

  slider:  {
    data: [
      {
        type: 'slider',
        properties: {
          maximumTrackTintColor: 'grey',
          minimumTrackTintColor: "lightgrey",
          onSlidingComplete: () => { console.log('onSlidingComplete') },
          onSlidingStart: () => { console.log('onSlidingStart') },
          thumbTintColor: 'yellow',
          style: { height: 200 },
          thumbStyle: {
            width: 30,
            height: 30, borderRadius: 0, top: "50%", borderColor: 'green', borderWidth: 1
          },
          trackStyle: { height: 2 }
        }
      }
    ]
  }
};

export default data;
