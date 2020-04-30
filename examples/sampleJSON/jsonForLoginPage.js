import {sourceData2} from './jsonForAddAddress';
export const sourceData = {
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
                    style: {color: 'white', fontSize: 23, fontWeight: 'bold'},
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
                          fontSize: 46,
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
                  fontSize: 20,
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
                  fontSize: 18,
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
              fontSize: 16,
              marginLeft: 180,
              marginTop: 18,
              fontWeight: 'bold',
            },
            onPress: {
              navigation: true,
              screenName: 'Add Add',
              source: {...sourceData2},
              // data: [
              //   {
              //     type: 'text',
              //     properties: {
              //       title: 'Your Adresses',
              //       style: {
              //         color: 'white',
              //         fontSize: 23,
              //         marginLeft: 7,
              //       },
              //     },
              //   },
              //   {
              //     type: 'button',
              //     properties: {
              //       title: 'Sign Up',
              //       titleStyle: {color: 'white', fontSize: 20},
              //       buttonStyle: {
              //         backgroundColor: 'lightcoral',
              //         width: '90%',
              //         left: 20,
              //         borderColor: 'red',
              //         marginTop: 30,
              //         borderRadius: 30,
              //       },
              //     },
              //   },
              // ],
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
};

export const data2 = {
  navigation: true,
  screenName: 'Login Page',
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
          marginTop: 30,
          borderRadius: 30,
        },
        onPress: {
          navigation: true,
          screenName: 'CheckOut',
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
                          title: 'Create an account to checkout',
                          style: {
                            color: 'black',
                            fontSize: 19,
                            fontWeight: 'bold',
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
                            source: {
                              data: [],
                            },
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
                            title: 'Welcome Back',
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
  ],
};
