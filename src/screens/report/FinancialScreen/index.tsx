import React from 'react';
import  SafeArea  from '@core/SafeArea';
import HeaderTop from '@components/HeaderTop';
import { View } from 'react-native';
import Chart from '@core/Chart';

const FinancialScreen : React.FC = () => {
  return(
    <SafeArea>
      <View style = {{backgroundColor: 'white'}}>
        <HeaderTop />
      </View>
      <Chart />
    </SafeArea>
  )
}
export default FinancialScreen
