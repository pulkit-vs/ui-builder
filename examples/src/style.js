import { StyleSheet } from 'react-native';

// Method to make a style customized.
export const createButtonStyle = (props) => {

    const style = props.style;
    let customizeButtonStyle = StyleSheet.create({

        buttonStyle: {
            backgroundColor: style.backgroundColor ? style.backgroundColor : "pink",
            borderRadius: style.borderRadius ? style.borderRadius : 12,
            alignContent: style.alignContent ? style.alignContent : "center",
            alignItems: style.alignContent ? alignItems : "center",
            position: style.position ? style.position : "absolute",
            alignSelf: style.alignSelf ? style.alignSelf : "center",
            left: style.left ? style.left : 24,
            right: style.right ? style.right : 24,
            width: style.width ? style.width : 100,
            height: style.height ? style.height : 100,
            marginTop: style.marginTop ? style.marginTop : 20,
            borderStyle: style.borderStyle ? style.borderStyle : 'solid',
            borderLeftWidth: style.borderStyle ? style.borderLeftWidth : 0,
            borderRightWidth: style.borderStyle ? style.borderRightWidth : 0,
            borderBottomWidth: style.borderStyle ? style.borderBottomWidth : 0,
            borderLeftColor: style.borderStyle ? style.borderBottomWidth : 'transparent',
            borderRightColor: style.borderStyle ? style.borderBottomWidth : 'transparent',
            borderBottomColor: style.borderStyle ? style.borderBottomWidth : 'transparent',
        },

        titleStyle: {
            color: style.color ? style.color : 'blue',
            fontFamily: style.fontFamily ? style.fontFamily : 'arial'
        }
    })

    const shapeStyle = props.showCircle ? { ...shapeStyles.circleShapeView } :
        props.ShowSquare ? { ...shapeStyles.squareShapeView } :
            props.showRectangle ? { ...shapeStyles.rectangleShapeView } :
                props.showTriangle ? { ...shapeStyles.triangleShapeView } : null;

    return { buttonStyle: { ...customizeButtonStyle.buttonStyle, ...shapeStyle }, titleStyle: customizeButtonStyle.titleStyle }
}


//Styles for differnt shapes of button
const shapeStyles = {

    circleShapeView: {
        //To make Circle Shape
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        position: "absolute"
    },

    rectangleShapeView: {
        //To make Rectangle Shape
        marginTop: 20,
        width: 120 * 2,
        height: 120
    },

    triangleShapeView: {
        //To make Triangle Shape
        width: 0,
        height: 0,
        borderLeftWidth: 60,
        borderRightWidth: 60,
        borderBottomWidth: 120,
        borderStyle: 'solid',
        // backgroundColor: 'transparent',
        // borderLeftColor: 'transparent',
        // borderRightColor: 'transparent',
        // borderBottomColor: '#606070',
    },

    squareShapeView: {
        //To make Square Shape
        width: 100,
        height: 100,
    },
}