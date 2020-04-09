import {StyleSheet} from 'react-native';

// Method to make a style customized.
export const createHeaderStyle = (props) => {
  console.log('stylesheet', props);
  const {
    containerStyle,
    placement,
    leftContainerStyle,
    rightContainerStyle,
    centerContainerStyle,
  } = props;

  let customizeHeaderStyle = {
    mainContainerStyle: {
      backgroundColor: containerStyle.backgroundColor
        ? containerStyle.backgroundColor
        : 'blue',
      color: containerStyle.color ? containerStyle.color : 'black',
      height: containerStyle.height ? containerStyle.height : 70,
      width: containerStyle.width ? containerStyle.width : 310,
      borderWidth: containerStyle.borderWidth ? containerStyle.borderWidth : 0,
      borderColor: containerStyle.borderColor
        ? containerStyle.borderColor
        : 'black',
      borderBottomWidth: containerStyle.borderBottomWidth
        ? containerStyle.borderBottomWidth
        : 0,
      borderRightWidth: containerStyle.borderRightWidth
        ? containerStyle.borderRightWidth
        : 0,
      borderLeftWidth: containerStyle.borderLeftWidth
        ? containerStyle.borderLeftWidth
        : 0,
      borderLeftColor: containerStyle.borderLeftColor
        ? containerStyle.borderLeftColor
        : 'black',
      borderRightColor: containerStyle.borderRightColor
        ? containerStyle.borderRightColor
        : 'black',
      borderBottomColor: containerStyle.borderBottomColor
        ? containerStyle.borderBottomColor
        : 'black',
      marginBottom: containerStyle.marginBottom
        ? containerStyle.marginBottom
        : 10,
    },

    // leftContainerStyle: leftContainerStyle ? {
    //     color:leftContainerStyle.color ? leftContainerStyle.color : 'black'
    // }
    // rightContainerStyle: rightContainerStyle.color
    //   ? rightContainerStyle.color
    //   : 'black',
    // centerContainerStyle: centerContainerStyle.color
    //   ? centerContainerStyle.color
    //   : 'black',
  };

  return {
    containerStyle: {...customizeHeaderStyle.mainContainerStyle},
    placement: customizeHeaderStyle.placement,
  };
};
