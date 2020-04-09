import React from 'react';
import {View, RecyclerViewBackedScrollViewComponent} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {createHeaderStyle} from '../style/headerStyle';
import {applyThemeOnHeaderStyle} from '../theme';
import {theme} from '../../App';

export default class HeaderComponent extends React.Component {
  render() {
    const {componentData} = this.props;
    const properties = componentData.properties;
    const middlePartText = properties.middlePartText;

    // Update pre-defined style as per given props.
    let style = createHeaderStyle(properties);
    //   ? createHeaderStyle(properties)
    //   : null;

    // Applying theme on header style
    style = theme ? applyThemeOnHeaderStyle(style, theme) : style;

    return (
      <View>
        <Header
          containerStyle={style.containerStyle}
          placement={style.placement}
          leftComponent={properties.leftComponent}
          centerComponent={properties.centerComponent}
          rightComponent={properties.rightComponent}
        />
      </View>
    );
  }
}
