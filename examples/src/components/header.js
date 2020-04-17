import PropTypes from 'prop-types';
import React from 'react';
import {Header, Icon, Input} from 'react-native-elements';
import {View, Text} from 'react-native';
import {applyThemeOnHeaderStyle} from '../theme/headerTheme';
import {theme} from '../../App';

export default class HeaderComponent extends React.Component {
  valueOfComponent = ['leftComponent', 'centerComponent', 'rightComponent'];

  render() {
    this.valueOfComponent = this.valueOfComponent.map((component) =>
      this.props[component].properties ? (
        <View style={this.props[component].properties.style}>
          {this.props[component].properties.childrens.map((item) =>
            item.type == 'icon' ? (
              <Icon
                name={item.properties.name}
                color={item.properties.color}
                size={item.properties.size}
              />
            ) : item.type == 'text' ? (
              <Text style={item.properties.style}>{item.properties.title}</Text>
            ) : item.type == 'input' ? (
              <Input
                containerStyle={item.properties.containerStyle}
                inputStyle={item.properties.inputStyle}
                placeholder={item.properties.placeholder}
                leftIcon={
                  item.properties.leftIcon ? (
                    <Icon
                      name={item.properties.leftIcon.name}
                      size={item.properties.leftIcon.size}
                      color={item.properties.leftIcon.color}></Icon>
                  ) : null
                }
                rightIcon={
                  item.properties.rightIcon ? (
                    <Icon
                      name={item.properties.rightIcon.name}
                      size={item.properties.rightIcon.size}
                      color={item.properties.rightIcon.color}></Icon>
                  ) : null
                }></Input>
            ) : null,
          )}
        </View>
      ) : null,
    );
    console.log(this.valueOfComponent);

    let style = theme ? applyThemeOnHeaderStyle(this.props, theme) : this.props;

    return (
      <View>
        <Header
          containerStyle={style.containerStyle}
          placement={style.placement}
          leftComponent={
            this.valueOfComponent[0]
              ? this.valueOfComponent[0]
              : {
                  ...style.leftComponent,
                  ...style.leftComponent.icon,
                }
          }
          centerComponent={
            this.valueOfComponent[1]
              ? this.valueOfComponent[1]
              : {
                  ...style.centerComponent,
                  ...style.centerComponent.icon,
                }
          }
          rightComponent={
            this.valueOfComponent[2]
              ? this.valueOfComponent[2]
              : {
                  ...style.rightComponent,
                  ...style.rightComponent.icon,
                }
          }
          leftContainerStyle={style.leftContainerStyle}
          centerContainerStyle={style.centerContainerStyle}
          rightContainerStyle={style.rightContainerStyle}
        />
      </View>
    );
  }
}

HeaderComponent.propTypes = {
  leftComponent: PropTypes.shape({
    icon: PropTypes.shape({
      icon: PropTypes.string,
      type: PropTypes.string,
      size: PropTypes.number,
      color: PropTypes.string,
    }),
    text: PropTypes.string,
    style: PropTypes.shape({
      color: PropTypes.string,
      fontSize: PropTypes.number,
    }),
  }),
  rightComponent: PropTypes.shape({
    icon: PropTypes.shape({
      icon: PropTypes.string,
      type: PropTypes.string,
      size: PropTypes.number,
      color: PropTypes.string,
    }),
    text: PropTypes.string,
    style: PropTypes.shape({
      color: PropTypes.string,
      fontSize: PropTypes.number,
    }),
  }),
  centerComponent: PropTypes.shape({
    icon: PropTypes.shape({
      icon: PropTypes.string,
      type: PropTypes.string,
      size: PropTypes.number,
      color: PropTypes.string,
    }),
    text: PropTypes.string,
    style: PropTypes.shape({
      color: PropTypes.string,
      fontSize: PropTypes.number,
    }),
  }),
  placement: PropTypes.string,
  containerStyle: PropTypes.shape({
    color: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    backgroundColor: PropTypes.string,
    borderWidth: PropTypes.number,
    borderColor: PropTypes.string,
    borderBottomWidth: PropTypes.number,
    borderBottomColor: PropTypes.string,
  }),
};

HeaderComponent.defaultProps = {
  placement: 'center',

  leftComponent: {style: {color: 'red'}},
  centerComponent: {style: {color: 'red'}},
  rightComponent: {style: {color: 'red'}},
  containerStyle: {
    backgroundColor: 'blue',
    justifyContent: 'space-around',
    borderColor: 'black',
    borderWidth: 0,
    height: 70,
  },
};
