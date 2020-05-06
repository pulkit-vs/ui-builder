import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';

import TextComponent from './text';
import ButtonComponent from './button';
import CheckboxComponent from './Checkbox';
import IconComponent from './icon';
import ImageComponent from './image';
import {theme} from '../index';
import {applyTheme} from '../utility/utils';

export default class CardComponent extends Component {
  selectComponent(component, index) {
    switch (component.type) {
      // case 'text':
      //   return <TextComponent {...component.properties} key={index} />;
      case 'button':
        return (
          <ButtonComponent
            {...component.properties}
            key={index}
            createScreen={this.props.createScreen}
          />
        );
      case 'icon':
        return <IconComponent {...component.properties} key={index} />;
      case 'checkbox':
        return <CheckboxComponent {...component.properties} key={index} />;

      case 'image':
        return <ImageComponent {...component.properties} key={index} />;
      case 'view': {
        return (
          <View style={component.style} key={index}>
            {component.childrens.map((componentData, i) => {
              return this.selectComponent(componentData, i);
            })}
          </View>
        );
      }
    }
  }

  render() {
    this.props = theme ? applyTheme(this.props, theme) : this.props;
    return (
      <Card
        title={this.props.title}
        titleStyle={this.props.properties.titleStyle}
        wrapperStyle={this.props.properties.wrapperStyle}
        containerStyle={this.props.properties.containerStyle}
        dividerStyle={this.props.properties.dividerStyle}>
        <ScrollView>
          {this.props.childrens.map((component, index) => {
            return this.selectComponent(component, index);
          })}
        </ScrollView>
      </Card>
    );
  }
}

CardComponent.propTypes = {
  title: PropTypes.string,
  containerStyle: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number,
    marginTop: PropTypes.number,
    textAlign: PropTypes.string,
    padding: PropTypes.number,
  }),
  wrapperStyle: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number,
    marginTop: PropTypes.number,
    textAlign: PropTypes.string,
    padding: PropTypes.number,
  }),
  dividerStyle: PropTypes.shape({
    borderColor: PropTypes.string,
    padding: PropTypes.number,
    borderWidth: PropTypes.number,
  }),
};

// CardComponent.defaultProps = {
//   title: 'Heading',
//   containerStyle: {
//     backgroundColor: 'blue',
//     padding: 0,
//     height: 200,
//     width: 100,
//   },
//   titleStyle: {
//     fontSize: 20,
//   },
// };
