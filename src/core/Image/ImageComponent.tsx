import React from 'react';
import { View, Text, TouchlableOpacity } from 'react-native';
import { StyleSheet } from 'react-native-size-scaling';
import { PropsImage } from '@core/Image/model';
import FastImage from 'react-native-fast-image';

const ImageComponent = (props: PropsImage) => {
  const { source, style, resize, priorityType, className } = props;
  return (
    <FastImage
      style={[styles.image, style]}
      className={className}
      source={{
        uri: source,
        priority: FastImage.priority.priorityType,
      }}
      resizeMode={FastImage.resizeMode.resize}
    />
  );
};

export default ImageComponent;
export const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});
