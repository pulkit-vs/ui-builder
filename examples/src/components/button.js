// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

import PropTypes from 'prop-types';
import React from 'react';
import {Button} from 'react-native-elements';
import {View} from 'react-native';
import {applyThemeOnButtonStyle} from '../theme/buttonTheme';
import {shapeStyles} from '../style/buttonStyle';
import {theme} from '../../App';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ButtonComponent extends React.Component {
  componentWillMount() {
    // Customize button style
    const shapeStyle = this.props.showCircle
      ? {...shapeStyles.circleShapeView}
      : this.props.ShowSquare
      ? {...shapeStyles.squareShapeView}
      : this.props.showRectangle
      ? {...shapeStyles.rectangleShapeView}
      : this.props.showTriangle
      ? {...shapeStyles.triangleShapeView}
      : null;

    if (shapeStyle) {
      this.props.buttonStyle = {...this.props.buttonStyle, ...shapeStyle};
    }
    // Applying theme on button style
    if (theme) {
      this.props = applyThemeOnButtonStyle(theme, this.props);
    }
  }

  render() {
    const props = this.props;
    return (
      <View>
        <Button
          title={props.title}
          onPress={props.onPress()}
          disabled={props.disabled}
          buttonStyle={props.buttonStyle}
          titleStyle={props.titleStyle}
          type={props.buttonType}
          loading={props.loading}
          icon={<Icon {...props.icon} />}
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
