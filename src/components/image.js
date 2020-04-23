import PropTypes from "prop-types";
import React from "react";

import { View, Image } from "react-native";
import { applyThemeOnImageStyle } from "../theme/imageTheme";
import { theme } from "../../App";

export default class ImageComponent extends React.Component {
  render() {
    const styles = theme
      ? applyThemeOnImageStyle(this.props, theme)
      : this.props;

    return (
      <View>
        <Image
          style={styles.style}
          source={{
            uri: styles.uri,
          }}
          blurRadius={styles.blurRadius}
          accessibilityLabel={styles.accessibilityLabel}
          capInsets={styles.capInsets}
          fadeDuration={styles.fadeDuration}
          resizeMethod={styles.resizeMethod}
          resizeMode={styles.resizeMode}
        />
      </View>
    );
  }
}
ImageComponent.propTypes = {
  blurRadius: PropTypes.number,
  style: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
    borderColor: PropTypes.string,
    borderRadius: PropTypes.number,
    borderWidth: PropTypes.number,
    opacity: PropTypes.number,
    overflow: PropTypes.strig,
  }),
  fadeDuration: PropTypes.number,
  resizeMethod: PropTypes.string,
  resizeMode: PropTypes.string,
};
ImageComponent.defaultProps = {
  blurRadius: 0,
  style: { height: 100, width: 100, borderColor: "red" },
  fadeDuration: 0,
  capInsets: {},
  resizeMethod: "auto",
  resizeMode: "cover",
};
