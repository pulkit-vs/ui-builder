// Method to make a style customized.
export const createTextInputStyle = (props) => {

    const style = { ...props.style };
    let customizeTextInputStyle = {

        placeholder: props.label ? props.label : 'name',
        selectionColor: style.selectionColor ? style.selectionColor : 'green',
        placeholderTextColor: style.placeholderTextColor ? style.placeholderTextColor : 'yellow',
        style: {
            backgroundColor: style.backgroundColor ? style.backgroundColor : 'pink',
            borderColor: style.borderColor ? style.borderColor : 'black',
            fontFamily: style.fontFamily ? style.fontFamily : 'arial',
            color: style.color ? style.color : "white"
            // borderWidth: style.borderWidth ? style.borderWidth : null,
            // width: style.width ? style.width : "90%",
            // height: style.height ? style.height : "50",
        }
    }
    return customizeTextInputStyle;
}
