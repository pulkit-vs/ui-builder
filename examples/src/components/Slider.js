/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import PropTypes from 'prop-types';
import React from 'react';
import { Slider } from 'react-native-elements';
import { View } from 'react-native';

import { applyTheme } from '../utility/utils';
import { theme } from '../index';

export default class SliderComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            properties: { ...this.props },
            value: 0
        }

        // Applying theme on slider style
        if (theme) {
            this.setState({ properties: applyTheme(this.state.properties, theme) })
        }
    }

    render() {
        return (
            <View>
                <Slider
                    value={this.state.value}
                    onValueChange={value => this.setState({ value })}
                    // sets the slider front/right color
                    maximumTrackTintColor={this.state.properties.maximumTrackTintColor}
                    // sets the slider back/left color
                    minimumTrackTintColor={this.state.properties.minimumTrackTintColor}
                    onSlidingComplete={this.state.properties.onSlidingComplete}
                    onSlidingStart={this.state.properties.onSlidingStart}
                    // for setting teh thumb's color
                    thumbTintColor={this.state.properties.thumbTintColor}

                    // for setting the width and height of slider component
                    style={this.state.properties.style}

                    // for setting the thumb's size, top.
                    thumbStyle={this.state.properties.thumbStyle}

                    // for setting the height and width of a slider
                    trackStyle={this.state.properties.trackStyle}

                />
            </View>
        );
    }
}

SliderComponent.propTypes = {
    maximumTrackTintColor: PropTypes.string,
    minimumTrackTintColor: PropTypes.string,
    onSlidingComplete: PropTypes.func,
    onSlidingStart: PropTypes.func,
    onValueChange: PropTypes.func,
    style: PropTypes.object,
    thumbStyle: PropTypes.shape({
        width: PropTypes.number,
        height: PropTypes.number,
        borderRadius: PropTypes.number,
        top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        borderColor: PropTypes.string,
        borderWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }),
    thumbTintColor: PropTypes.string,
    trackStyle: PropTypes.object,
    value: PropTypes.number
}

SliderComponent.defaultProps = {

    maximumTrackTintColor: 'lightgrey',
    minimumTrackTintColor: 'lightgrey',
    onSlidingComplete: () => { console.log('Please attach a method on slide complete') },
    onSlidingStart: () => { console.log('Please attach a method on slide starts') },
    thumbStyle: {
        borderColor: 'green', borderWidth: 1, height: 40, width: 40, borderRadius: 20
    },
    thumbTintColor: 'white',
    trackStyle: {
        height: 2
    }
}
