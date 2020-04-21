export const source = {
  date: [
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
                  style: {flexDirection: 'row'},
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
                      style: {flexDirection: 'row'},
                    },
                    {
                      type: 'icon',
                      properties: {
                        name: 'plus-circle',
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

// theme: 'darkTheme',
// data: [
//   {
//     type: 'icon',
//     properties: {
//       name: 'battery',
//       size: 30,
//       iconType: 'font-awesome',
//       disabled: false,
//       onPress: onIconClick,
//       raised: false,
//       iconStyle: {
//         color: 'blue',
//       },
//       containerStyle: {
//         alignSelf: 'flex-end',
//       },
//     },
//   },
//   {
//     type: 'view',
//     style: {flexDirection: 'row'},
//     childrens: [
//       {
//         type: 'image',
//         properties: {
//           uri: 'https://picsum.photos/seed/picsum/200/300',
//           style: {
//             width: 180,
//             height: 300,
//           },
//         },
//       },
//       {
//         type: 'image',
//         properties: {
//           uri: 'https://picsum.photos/200/300/?blur=1',
//           style: {
//             width: 200,
//             height: 300,
//           },
//         },
//       },
//     ],
//   },
//   {
//     type: 'view',
//     style: {},
//     childrens: [
//       {
//         type: 'header',
//         properties: {
//           containerStyle: {
//             borderBottomColor: 'grey',
//             borderBottomWidth: 1,
//             backgroundColor: 'white',
//             height: 80,
//           },
//           placement: 'left',
//           fontSize: 30,
//           width: '10%',
//           leftComponent: {
//             childrens: [
//               {
//                 type: 'icon',
//                 properties: {
//                   name: 'menu',
//                   color: 'grey',
//                   size: 40,
//                 },
//               },
//             ],
//           },
//           centerComponent: {
//             childrens: [
//               {
//                 type: 'text',
//                 properties: {
//                   title: 'Welcome',
//                   style: {color: 'black', fontSize: 15},
//                 },
//               },
//             ],
//           },
//           rightComponent: {
//             childrens: [
//               {
//                 type: 'view',
//                 style: {
//                   flex: 1,
//                   flexDirection: 'row',
//                 },
//               },
//               {
//                 type: 'input',
//                 properties: {
//                   containerStyle: {
//                     width: 150,
//                     height: 50,
//                   },
//                   inputStyle: {
//                     height: 10,
//                     width: 200,
//                     color: 'black',
//                   },
//                   rightIcon: {
//                     name: 'search',
//                     color: 'lightblue',
//                     size: 40,
//                   },
//                   placeholder: 'search user',
//                 },
//               },
//               {
//                 type: 'icon',
//                 properties: {
//                   name: 'home',
//                   color: 'lightblue',
//                   size: 40,
//                 },
//               },
//             ],
//           },
//         },
//       },
//       {
//         type: 'input',
//         properties: {
//           label: 'Mobile Number (10 digits)',
//           placeholderTextColor: 'grey',
//           style: {
//             backgroundColor: 'white',
//             borderColor: 'grey',
//             borderWidth: 2,
//             width: '90%',
//             left: 20,
//             marginTop: 40,
//           },
//         },
//       },
//       {
//         type: 'button',
//         properties: {
//           title: 'FACEBOOK',
//           titleStyle: {color: 'blue', fontSize: 20},
//           buttonStyle: {
//             backgroundColor: 'white',
//             width: '90%',
//             left: 20,
//             borderWidth: 3,
//             marginTop: 20,
//           },
//         },
//       },
//     ],
//   },
//   {
//     type: 'checkbox',
//     properties: {
//       title: 'JAVASCRIPT',
//       titleStyle: {
//         color: 'pink',
//         fontSize: 22,
//         uncheckedColor: 'black',
//         checkedColor: 'pink',
//       },
//       checkboxStyle: {
//         color: 'red',
//         size: 25,
//       },
//       containerStyle: {
//         borderColor: '#DCDCDC',
//         borderRadius: 20,
//         width: '80%',
//       },
//     },
//   },
// ],
