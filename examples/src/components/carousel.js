import Carousel from 'react-native-snap-carousel';
import PropTypes from 'prop-types';
import React from 'react';
import {View, Image, Dimensions, Text} from 'react-native';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

export default class MyCarousel extends React.Component {
  state = {
    index: 0,
  };

  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this);
  }

  _renderItem({item}) {
    return (
      <View>
        <Image
          source={{
            uri: item,
          }}
          style={{width: 400, height: 300, resizeMode: 'contain'}}
        />
      </View>
    );
  }

  render() {
    // console.log('value', this.props.autoplay);
    return (
      <View>
        <Carousel
          //   ref={(c) => (this.carousel = c)}
          data={this.props.images}
          renderItem={this._renderItem}
          itemWidth={this.props.itemWidth}
          sliderWidth={this.props.sliderWidth}
          itemHeight={this.props.itemHeight}
          sliderHeight={this.props.sliderHeight}
          containerCustomStyle={this.props.containerCustomStyle}
          inactiveSlideShift={0}
          onSnapToItem={(index) => this.setState({index})}
          useScrollView={true}
          autoplay={this.props.autoplay}
          autoplayInterval={this.props.autoplayInterval}
          layout={this.props.layout}
          vertical={this.props.vertical}
        />
        <Text>{this.state.index}</Text>
      </View>
    );
  }
}

MyCarousel.propTypes = {
  title: PropTypes.string,
  itemWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sliderWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  itemHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sliderHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  containerCustomStyle: PropTypes.object,
  useScrollView: PropTypes.bool,
  autoplay: PropTypes.bool,
  autoplayInterval: PropTypes.number,
  layout: PropTypes.string,
  vertical: PropTypes.bool,
};
MyCarousel.defaultProps = {
  autoplay: false,
  layout: 'default',
  vertical: false,
};
