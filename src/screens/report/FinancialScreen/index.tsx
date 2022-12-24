import React from 'react';
import  SafeArea  from '@core/SafeArea';
import HeaderTop from '@components/HeaderTop';
import { View } from 'react-native';
import Chart from '@core/Chart';
import dataChart from './fakeChart';
import { FlashList } from '@shopify/flash-list';
import FlashListWrapper from '@components/FlashList';

import CardChart from '@components/CardChart';


const FinancialScreen : React.FC = () => {
  return (
    <SafeArea>
      <View style={{ backgroundColor: 'white' }}>
        <HeaderTop />
      </View>
      <FlashListWrapper
        data={dataChart}
        renderItem={({ item }) => {
          return <CardChart title={item.title} data={item.data} />;
        }}
      />
    </SafeArea>
  );
}
export default FinancialScreen
