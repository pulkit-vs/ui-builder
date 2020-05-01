import {sourceData2} from '../sampleJSON/jsonForAddAddress';
export const source = {
  navigation: true,
  screenName: 'Login Page',
  data: [
    {
      type: 'text',
      properties: {
        title: 'Log In',
        style: {
          color: 'black',
          textAlign: 'center',
          marginTop: '10%',
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
        marginTop: 20,
      },
      childrens: [
        {
          type: 'text',
          properties: {
            title: 'New to this site ?',
            style: {
              color: 'black',
              fontSize: 15,
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
              fontSize: 15,
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
          marginTop: 20,
        },
        onPress: {
          navigation: true,
          screenName: 'Check Out',
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
                            style: {
                              marginTop: 20,
                              marginLeft: 110,
                              fontSize: 20,
                              fontWeight: 'bold',
                            },
                          },
                        },
                        {
                          type: 'text',
                          properties: {
                            title: 'Back to Login Page',
                            style: {
                              position: 'absolute',
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
          marginTop: 20,
        },
      },
    },
  ],
};
