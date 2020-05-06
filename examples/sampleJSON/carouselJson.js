export const source = {
  navigation: true,
  screenName: 'Home',

  data: [
    {
      type: 'text',
      properties: {
        title: 'Carousel',
        style: {
          textAlign: 'center',
          fontSize: 30,
        },
      },
    },
    {
      type: 'carousel',
      properties: {
        data: [
          {
            type: 'image',
            properties: {
              uri:
                'https://images.pexels.com/photos/1769369/pexels-photo-1769369.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              style: {
                height: 200,
                width: '100%',
              },
            },
          },
          {
            type: 'image',
            properties: {
              uri:
                'https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
              style: {
                height: 200,
                width: '100%',
              },
            },
          },
          {
            type: 'image',
            properties: {
              uri:
                'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              style: {
                height: 200,
                width: '100%',
              },
            },
          },
          {
            type: 'image',
            properties: {
              uri:
                'https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              style: {
                height: 200,
                width: '100%',
              },
            },
          },
          {
            type: 'card',
            properties: {
              containerStyle: {
                height: 320,
                width: 250,
                borderRadius: 20,
                borderWidth: 0,
                borderColor: 'red',
                padding: 0,
                alignSelf: 'center',
              },
              titleStyle: {
                fontWeight: 'bold',
                color: 'red',
              },
            },
            childrens: [
              {
                type: 'image',
                properties: {
                  uri:
                    'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                  style: {
                    width: '100%',
                    height: 260,
                    borderRadius: 20,
                    position: 'relative',
                  },
                },
              },
              {
                type: 'view',
                style: {
                  height: 30,
                  width: 80,
                  backgroundColor: 'white',
                  borderRadius: 40,
                  position: 'absolute',
                  right: 5,
                  bottom: 55,
                  flexDirection: 'row',
                },
                childrens: [
                  {
                    type: 'icon',
                    properties: {
                      name: 'euro-symbol',
                      type: 'material',
                      color: 'black',
                      size: 25,
                      iconStyle: {color: 'black', marginTop: 1},
                    },
                  },
                  {
                    type: 'text',
                    properties: {
                      title: '899',
                    },
                  },
                ],
              },
              {
                type: 'text',
                properties: {
                  title: 'Title of image \nSubtitle',
                  style: {
                    alignSelf: 'flex-start',
                    marginLeft: 10,
                    fontWeight: 'bold',
                    fontSize: 20,
                  },
                },
              },
            ],
          },
          {
            type: 'card',
            properties: {
              containerStyle: {
                height: 320,
                width: 250,
                borderRadius: 20,
                borderWidth: 0,
                borderColor: 'red',
                padding: 0,
                alignSelf: 'center',
              },
              titleStyle: {
                fontWeight: 'bold',
                color: 'red',
              },
            },
            childrens: [
              {
                type: 'image',
                properties: {
                  uri:
                    'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                  style: {
                    width: '100%',
                    height: 260,
                    borderRadius: 20,
                    position: 'relative',
                  },
                },
              },
              {
                type: 'view',
                style: {
                  height: 30,
                  width: 80,
                  backgroundColor: 'white',
                  borderRadius: 40,
                  position: 'absolute',
                  right: 5,
                  bottom: 55,
                  flexDirection: 'row',
                },
                childrens: [
                  {
                    type: 'icon',
                    properties: {
                      name: 'euro-symbol',
                      type: 'material',
                      color: 'black',
                      size: 25,
                      iconStyle: {color: 'black', marginTop: 1},
                    },
                  },
                  {
                    type: 'text',
                    properties: {
                      title: '899',
                    },
                  },
                ],
              },
              {
                type: 'text',
                properties: {
                  title: 'Title of image \nSubtitle',
                  style: {
                    alignSelf: 'flex-start',
                    marginLeft: 10,
                    fontWeight: 'bold',
                    fontSize: 20,
                  },
                },
              },
            ],
          },
          {
            type: 'card',
            properties: {
              containerStyle: {
                height: 320,
                width: 250,
                borderRadius: 20,
                borderWidth: 0,
                borderColor: 'red',
                padding: 0,
                alignSelf: 'center',
              },
              titleStyle: {
                fontWeight: 'bold',
                color: 'red',
              },
            },
            childrens: [
              {
                type: 'image',
                properties: {
                  uri:
                    'https://images.pexels.com/photos/594610/pexels-photo-594610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                  style: {
                    width: '100%',
                    height: 260,
                    borderRadius: 20,
                    position: 'relative',
                  },
                },
              },
              {
                type: 'view',
                style: {
                  height: 30,
                  width: 80,
                  backgroundColor: 'white',
                  borderRadius: 40,
                  position: 'absolute',
                  right: 5,
                  bottom: 55,
                  flexDirection: 'row',
                },
                childrens: [
                  {
                    type: 'icon',
                    properties: {
                      name: 'euro-symbol',
                      type: 'material',
                      color: 'black',
                      size: 25,
                      iconStyle: {color: 'black', marginTop: 1},
                    },
                  },
                  {
                    type: 'text',
                    properties: {
                      title: '899',
                    },
                  },
                ],
              },
              {
                type: 'text',
                properties: {
                  title: 'Title of image \nSubtitle',
                  style: {
                    alignSelf: 'flex-start',
                    marginLeft: 10,
                    fontWeight: 'bold',
                    fontSize: 20,
                  },
                },
              },
            ],
          },
        ],
        // vertical: true,
        itemWidth: 400,
        sliderWidth: 400,
        autoplay: true,
        autoplayInterval: 1000,
        loop: true,
        pagination: {
          containerStyle: {backgroundColor: 'white', height: 70},
          dotStyle: {
            width: 15,
            height: 15,
            borderRadius: 60,
            marginHorizontal: 4,
            backgroundColor: 'green',
          },
          inactiveDotStyle: {
            backgroundColor: 'red',
          },
          inactiveDotOpacity: 0.8,
          inactiveDotScale: 0.6,
        },
      },
    },
  ],
};
