export const source = {
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
