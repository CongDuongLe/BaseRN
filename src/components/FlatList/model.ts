import React from 'react';
import { FlatListProps } from 'react-native';

interface Props extends FlatListProps<any> {
  onRefresh?: () => void;
  onLoadMore?: () => void;
  renderItem: (item: any, index: number) => React.ReactElement;
  data: any[];
  keyExtractor?: (item: any, index: number) => string;
  onEndReachedThreshold?: number;
  refreshing?: boolean;
}

export type PropsFlatlist = React.FC<Props>;
