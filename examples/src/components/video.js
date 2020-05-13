import PropTypes from 'prop-types';
import React from "react";
import Video from 'react-native-video';
import cloneDeep from 'lodash/cloneDeep';
import { View, Dimensions } from "react-native";

export default class VideoComponent extends React.Component {

    properties = cloneDeep(this.props)

    render() {
        return (
            <View>
                <Video
                    // TODO: local video is not working
                    // source can be a URL or a localfile.
                    //source={require("Vantaa_Device_State_Update.mp4")}
                    audioOnly={this.properties.audioOnly}
                    // controls prop is used to control the video(mute, formward)
                    controls={this.properties.controls}
                    fullscreen={this.properties.fullscreen}
                    ignoreSilentSwitch={this.properties.ignoreSilentSwitch}
                    muted={this.properties.muted}
                    onBuffer={this.properties.onBuffer}
                    onEnd={() => { this.properties.onEnd }}
                    onError={!this.properties.source ? alert('Please pass the source uri of a video') : this.properties.onError()}
                    onLoad={this.properties.onLoad}
                    onProgress={this.properties.onProgress}
                    paused={this.properties.paused}
                    rate={this.properties.rate}
                    // video will play again 
                    repeat={this.properties.repeat}
                    resizeMode={this.properties.resizeMode}
                    source={{ uri: this.properties.source }}
                    style={
                        this.style
                    }
                    volume={this.properties.volume}
                />
            </View>
        )
    }
}

VideoComponent.propTypes = {
    controls: PropTypes.bool,
    fullscreen: PropTypes.bool,
    ignoreSilentSwitch: PropTypes.string,
    muted: PropTypes.bool,
    onBuffer: PropTypes.func,
    onEnd: PropTypes.func,
    onError: PropTypes.func,
    onLoad: PropTypes.object,
    onProgress: PropTypes.object,
    paused: PropTypes.bool,
    rate: PropTypes.number,
    repeat: PropTypes.bool,
    resizeMode: PropTypes.string,
    style: PropTypes.object,
    volume: PropTypes.number
};

VideoComponent.defaultProps = {
    // resizeMode={"cover"}
    controls: true,
    currentTime: 0.0,
    duration: 0.0,
    fullscreen: true,
    ignoreSilentSwitch: null,
    isBuffering: false,
    muted: true,
    onError: alert('There is some error occured while playing a video'),
    paused: true,
    rate: 1,
    resizeMode: 'contain',
    skin: 'custom',
    style: {
        height: Dimensions.get("window").height
    },
    volume: 1
};