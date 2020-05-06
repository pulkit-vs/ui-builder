// Sample JSON Structure
const data = {
  type: "input",
  properties: {
    label: "Email",
    style: {
      backgroundColor: "white",
      borderColor: "grey",
      borderWidth: 2,
      width: "60%",
      left: 70,
      marginTop: 40,
    },
    placeholderTextColor: "grey",
    childrens: [
      {
        type: "icon",
        properties: {
          name: "search",
          color: "red",
          size: 40,
        },
      },
      {
        type: "icon",
        properties: {
          name: "facebook",
          color: "red",
          size: 40,
        },
      },
    ],
  },
};

const data2 = {
  childrens: [
    {
      type: "view",
      properties: {
        viewStyle: {},
      },
    },
    {
      type: "input",
      properties: {
        label: "Mobile Number (10 digits)",
        placeholderTextColor: "grey",
        style: {
          backgroundColor: "white",
          borderColor: "grey",
          borderWidth: 2,
          width: "90%",
          left: 20,
          marginTop: 40,
        },
      },
      childrens: [
        {
          type: "icon",
          properties: {
            name: "search",
            color: "red",
            size: 40,
          },
        },
        {
          type: "icon",
          properties: {
            name: "facebook",
            color: "red",
            size: 40,
          },
        },
      ],
    },
    {
      type: "button",
      properties: {
        title: "FACEBOOK",
        titleStyle: { color: "blue", fontSize: 20 },
        buttonStyle: {
          backgroundColor: "white",
          width: "90%",
          left: 20,
          borderWidth: 3,
          marginTop: 20,
        },
      },
    },
  ],
};

// Sample json
const source = {
  theme: "lightTheme",
  data: [
    {
      type: "modal",
      properties: {
        style: {
          margin: 0,
          width: "100%",
          marginBottom: 200,
          marginTop: 200,
          backgroundColor: "white",
        },
        backdropColor: "grey",
        closeModal: ["onBackdropPress", "onBackButtonPress", "onSwipeComplete"],
        swipeDirection: "left",
      },
      childrens: [
        {
          type: "icon",
          properties: {
            containerStyle: {
              alignSelf: "flex-end",
              right: 20,
              marginBottom: 10,
              position: "absolute",
            },
            name: "close",
            color: "red",
            size: 40,
            onPress: "closeModal",
          },
        },
        {
          type: "text",
          properties: {
            style: {
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 10,
              color: "black",
            },
            title: "Custom Modal",
          },
        },
        {
          type: "input",
          properties: {
            label: "Email",
            style: {
              backgroundColor: "white",
              borderColor: "grey",
              borderWidth: 2,
              width: "60%",
              left: 70,
              marginTop: 40,
            },
            placeholderTextColor: "grey",
          },
        },
        {
          type: "button",
          properties: {
            title: "Close Modal",
            onPress: "closeModal",
            buttonStyle: {
              backgroundColor: "white",
              width: "60%",
              left: 70,
              borderWidth: 3,
              marginTop: 60,
            },
            titleStyle: { color: "black" },
          },
        },
      ],
    },
    {
      type: "checkbox",
      properties: {
        title: "JAVASCRIPT",
        titleStyle: {
          color: "pink",
          fontSize: 22,
          uncheckedColor: "black",
          checkedColor: "pink",
        },
        checkboxStyle: {
          color: "red",
          size: 25,
        },
        containerStyle: {
          borderColor: "#DCDCDC",
          borderRadius: 20,
          width: "80%",
        },
      },
    },
    {
      type: "icon",
      properties: {
        name: "battery",
        size: 30,
        iconType: "font-awesome",
        disabled: false,
        onPress: onIconClick,
        raised: false,
        iconStyle: {
          color: "blue",
        },
        containerStyle: {
          alignSelf: "flex-end",
        },
      },
    },

    {
      type: "view",
      style: { flexDirection: "row" },
      childrens: [
        {
          type: "image",
          properties: {
            uri: "https://picsum.photos/seed/picsum/200/300",
            style: {
              width: 180,
              height: 300,
            },
          },
        },
        {
          type: "image",
          properties: {
            uri: "https://picsum.photos/200/300/?blur=1",
            style: {
              width: 200,
              height: 300,
            },
          },
        },
      ],
    },
    {
      type: "view",
      style: {},
      childrens: [
        {
          type: "header",
          properties: {
            containerStyle: {
              borderBottomColor: "grey",
              borderBottomWidth: 1,
              backgroundColor: "white",
              height: 80,
            },
            placement: "left",
            fontSize: 30,
            width: "10%",
            leftComponent: {
              childrens: [
                {
                  type: "icon",
                  properties: {
                    name: "menu",
                    color: "grey",
                    size: 40,
                  },
                },
              ],
            },
            centerComponent: {
              childrens: [
                {
                  type: "text",
                  properties: {
                    title: "Welcome",
                    style: { color: "black", fontSize: 15 },
                  },
                },
              ],
            },
            rightComponent: {
              childrens: [
                {
                  type: "view",
                  style: {
                    flex: 1,
                    flexDirection: "row",
                  },
                },
                {
                  type: "input",
                  properties: {
                    containerStyle: {
                      width: 150,
                      height: 50,
                    },
                    inputStyle: {
                      height: 10,
                      width: 200,
                      color: "black",
                    },
                    rightIcon: {
                      name: "search",
                      color: "lightblue",
                      size: 40,
                    },
                    placeholder: "search user",
                  },
                },
                {
                  type: "icon",
                  properties: {
                    name: "home",
                    color: "lightblue",
                    size: 40,
                  },
                },
              ],
            },
          },
        },
        {
          type: "input",
          properties: {
            label: "Mobile Number (10 digits)",
            placeholderTextColor: "grey",
            style: {
              backgroundColor: "white",
              borderColor: "grey",
              borderWidth: 2,
              width: "90%",
              left: 20,
              marginTop: 40,
            },
          },
        },
        {
          type: "button",
          properties: {
            title: "FACEBOOK",
            titleStyle: { color: "blue", fontSize: 20 },
            buttonStyle: {
              backgroundColor: "white",
              width: "90%",
              left: 20,
              borderWidth: 3,
              marginTop: 20,
            },
          },
        },
      ],
    },
  ],
};
        