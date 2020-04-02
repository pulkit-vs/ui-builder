import Toast from 'react-native-root-toast';

export const toastComponent = (props) => {

    const message = props && props.message ? props.message : '';
    Toast.show(message, {
        duration: props && props.duration ? props.duration : 5000,
        position: props && props.position ? props.position : 500,
        shadow: props && props.position ? props.position : true,
        animation: props && props.position ? props.position : true,
        hideOnPress: props && props.position ? props.position : false,
        delay: props && props.delay ? props.delay : 0,
        textColor: props && props.color ? props.color : null,
        onShow: () => {
            // calls on toast\`s appear animation start
        },
        onShown: () => {
            // calls on toast\`s appear animation end.
        },
        onHide: () => {
            // calls on toast\`s hide animation start.
        },
        onHidden: () => {
            // calls on toast\`s hide animation end.
        }
    })
}