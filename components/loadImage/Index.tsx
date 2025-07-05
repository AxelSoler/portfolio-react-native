import React, { useState } from "react";
import {
  Image,
  View,
  ActivityIndicator,
  StyleSheet,
  ImageStyle,
  ViewStyle,
  ImageSourcePropType,
} from "react-native";

type LoadImageProps = {
  source: ImageSourcePropType;
  imageStyle?: ImageStyle;
  containerStyle?: ViewStyle;
};

const LoadImage = ({ source, imageStyle, containerStyle }: LoadImageProps) => {
  const [loading, setLoading] = useState(true);

  return (
    <View style={[styles.container, containerStyle]}>
      {loading && (
        <ActivityIndicator size="small" color="#aaa" style={styles.loader} />
      )}
      <Image
        source={source}
        style={[styles.image, imageStyle]}
        onLoadEnd={() => setLoading(false)}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  loader: {
    position: "absolute",
    zIndex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  }
});

export default LoadImage;