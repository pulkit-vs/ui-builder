import React from 'react'
import { View, Text } from "react-native";
import { Button } from 'react-native-elements';
import Toast from 'react-native-root-toast';
import { toastComponent } from "./toastComponent";

export class ExampleComponent extends React.Component {

    render() {
        const props = this.props.data.properties;
        switch (this.props.data.type) {
            case 'button':
                return (
                    <View>
                        <Button
                            title={props.title}
                            onPress={props.onPress}
                            disabled={props.disabled}
                            buttonStyle={buttonStyle}
                            color={props.color ? props.color : null}
                            type={props.type ? props.type : "outline"}
                            {...props.icon ? icon = props.icon : null}
                            {...props.loading ? loading : null}
                        />
                    </View>
                )
            case 'toast':
                toastComponent(props)
                return null
        }
    }
}

const buttonStyle = {

    backgroundColor: "#fdd7ac",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    alignSelf: "center",
    left: 24,
    right: 24
};