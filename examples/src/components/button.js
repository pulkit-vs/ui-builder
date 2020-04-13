/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import PropTypes from 'prop-types';
import React from 'react';
import {Button} from 'react-native-elements';
import {View} from 'react-native';
import {applyThemeOnButtonStyle} from '../buttonTheme';
import {theme} from '../../App';
import {shapeStyles} from '../style/buttonStyle';

export default class ButtonComponent extends React.Component {
  state = {
    props: {},
  };

  componentWillMount() {
    // Customize button style
    this.state.props = {...this.props};
    const shapeStyle = this.props.showCircle
      ? {...shapeStyles.circleShapeView}
      : this.props.ShowSquare
      ? {...shapeStyles.squareShapeView}
      : this.props.showRectangle
      ? {...shapeStyles.rectangleShapeView}
      : this.props.showTriangle
      ? {...shapeStyles.triangleShapeView}
      : null;

    this.state.props.buttonStyle = shapeStyle
      ? {...this.state.props.buttonStyle, ...shapeStyle}
      : this.state.props.buttonStyle;

    // Applying theme on button style
    this.state.props = theme
      ? applyThemeOnButtonStyle(theme, this.state.props)
      : this.state.props;
  }

  render() {
    const props = this.props;
    // alert(`button: ${JSON.stringify(this.state.props)}`)
    return (
      <View>
        <Button
          title={props.title}
          onPress={props.onPress()}
          disabled={props.disabled}
          buttonStyle={this.state.props.buttonStyle}
          titleStyle={this.state.props.titleStyle}
          type={props.buttonType}
          loading={props.loading}
        />
      </View>
    );
  }
}

// To run typechecking on the props for a component, for validating a props
ButtonComponent.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  buttonStyle: PropTypes.shape({
    backgroundColor: PropTypes.string,
    left: PropTypes.number,
    right: PropTypes.number,
    width: PropTypes.string,
    borderColor: PropTypes.string,
    borderWidth: PropTypes.number,
    marginTop: PropTypes.number,
  }),
};

// Defaultprops is to set the default props for the class.
ButtonComponent.defaultProps = {
  title: 'Button',
  onPress: () => console.log('Please attach a method to this component'),
  disabled: false,
  buttonStyle: {
    backgroundColor: 'yellow',
    borderColor: 'yellow',
  },
  titleStyle: {
    color: 'blue',
    fontFamily: 'arial',
    fontSize: 40,
  },
  type: 'solid',
  loading: false,
};
