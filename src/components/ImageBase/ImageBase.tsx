import React from 'react';
import { View, Text, TouchlableOpacity } from 'react-native';
import { StyleSheet } from 'react-native-size-scaling';
import FastImage from 'react-native-fast-image';

interface ImageBaseProps {
  source: string;
  style?: any;
  onPress?: () => void;
  resizeMode?: any;
  borderRadius?: number;
  width?: number;
  height?: number;
  priorityType?: string | 'normal';
}

const ImageBase = (props: ImageBaseProps) => {
  const { source, style, resizeMode, priorityType } = props;
  return (
    <FastImage
      style={[styles.image, style]}
      source={{
        uri: source,
        priority: FastImage.priority.priorityType,
      }}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
};

export default ImageBase;
export const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});
