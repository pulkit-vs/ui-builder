import Carousel, { Pagination } from "react-native-snap-carousel";
import PropTypes from "prop-types";
import React from "react";

export default class CarouselComponent extends React.Component {
  state = {
    index: 0,
  };

  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this);
  }

  _renderItem({ item }) {
    return <>{item}</>;
  }
  // for adding Pagination on carousel
  get pagination() {
    const style = this.props.pagination;
    return (
      <Pagination
        activeDotIndex={this.state.index}
        containerStyle={style.containerStyle}
        dotsLength={this.props.data.length}
        dotStyle={style.dotStyle}
        inactiveDotStyle={style.inactiveDotStyle}
        inactiveDotOpacity={style.inactiveDotOpacity}
        inactiveDotScale={style.inactiveDotScale}
      />
    );
  }

  render() {
    return (
      <>
        <Carousel
          autoplay={this.props.autoplay}
          autoplayInterval={this.props.autoplayInterval}
          containerCustomStyle={this.props.containerCustomStyle}
          data={this.props.data}
          itemHeight={this.props.itemHeight}
          itemWidth={this.props.itemWidth}
          layout={this.props.layout}
          loop={this.props.loop}
          onSnapToItem={(index) => this.setState({ index })}
          ref={(c) => (this.carousel = c)}
          renderItem={this._renderItem}
          sliderWidth={this.props.sliderWidth}
          sliderHeight={this.props.sliderHeight}
          useScrollView={true}
          vertical={this.props.vertical}
        />
        {this.props.pagination ? this.pagination : null}
      </>
    );
  }
}

CarouselComponent.propTypes = {
  autoplay: PropTypes.bool,
  autoplayInterval: PropTypes.number,
  containerCustomStyle: PropTypes.object,
  itemHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  itemWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  layout: PropTypes.string,
  loop: PropTypes.bool,
  pagination: PropTypes.object,
  sliderWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sliderHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  useScrollView: PropTypes.bool,
  vertical: PropTypes.bool,
};
CarouselComponent.defaultProps = {
  autoplay: false,
  itemHeight: 400,
  itemWidth: 400,
  layout: "default",
  loop: false,
  sliderHeight: 400,
  sliderWidth: 400,
  vertical: false,
};
