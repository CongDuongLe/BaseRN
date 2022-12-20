import React from 'react';
import { ImageProps } from 'react-native';

interface Props extends ImageProps {
  source: string;
  style?: any;
  resize?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
  width?: number;
  height?: number;
  priorityType?: 'low' | 'normal' | 'high';
  className?: string;
}

export type PropsImage = React.FC<Props>;
