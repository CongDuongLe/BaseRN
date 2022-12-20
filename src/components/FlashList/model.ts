import React from 'react';
import {FlashListProps} from "@shopify/flash-list";

interface Props extends FlashListProps<any> {
  onRefresh?: () => void;
  onLoadMore?: () => void;
  renderItem: (item: any, index: number) => React.ReactElement;
  data: any[];
  keyExtractor?: (item: any, index: number) => string;
  onEndReachedThreshold?: number;
  refreshing?: boolean;
}

export type PropsFlashList = React.FC<Props>;
