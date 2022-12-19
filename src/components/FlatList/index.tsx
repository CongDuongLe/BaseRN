import React from 'react';
import { FlatList, RefreshControl, View } from 'react-native';
import { PropsFlatlist } from './model';
import { FlashList } from '@shopify/flash-list';

const FlashListWrapper: PropsFlatlist = props => {
  const { data, renderItem, onRefresh, onLoadMore } = props;
  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
      }}>
      <FlashList
        {...props}
        data={data}
        keyExtractor={(e, i) => i.toString()}
        extraData={data}
        keyboardShouldPersistTaps="handled"
        renderItem={renderItem}
        onEndReachedThreshold={0.5}
        onEndReached={() => onLoadMore && onLoadMore()}
        estimatedItemSize={200}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        refreshing={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {
              onRefresh && onRefresh();
            }}
          />
        }
      />
    </View>
  );
};

export default FlashListWrapper;
