// In styles file, will keep all components styles for now.
export let styles = {

    buttonStyle: {
        backgroundColor: "pink",
        borderRadius: 12,
        alignContent: "center",
        alignItems: "center",
        position: "absolute",
        alignSelf: "center",
        left: 24,
        right: 24
    },

    titleStyle: {
        color: 'blue',
        fontFamily: 'arial'
    }

}

// Method to make a style customized 
export const customizeStyle = (props) => {

    const style = props.showCircle ? { ...shapeStyles.circleShapeView } :
        props.ShowSquare ? { ...shapeStyles.squareShapeView } :
            props.showRectangle ? { ...shapeStyles.rectangleShapeView } :
                props.showTriangle ? { ...shapeStyles.triangleShapeView } : null;

    styles = {
        buttonStyle: { ...styles.buttonStyle, ...props.buttonStyle, ...style }
        // titleStyle: { ...props.titleStyle, ...styles.titleStyle }
    }
}

// Styles for differnt shapes of button
const shapeStyles = {

    circleShapeView: {
        //To make Circle Shape
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: '#fdd7ac',
        position: "absolute"
    },

    rectangleShapeView: {
        //To make Rectangle Shape
        marginTop: 20,
        width: 120 * 2,
        height: 120,
        backgroundColor: '#14ff5f',
    },

    triangleShapeView: {
        //To make Triangle Shape
        width: 0,
        height: 0,
        borderLeftWidth: 60,
        borderRightWidth: 60,
        borderBottomWidth: 120,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#606070',
    },

    squareShapeView: {
        //To make Square Shape
        width: 100,
        height: 100,
        backgroundColor: '#14ff5f',
    },
}