import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Alert,
} from 'react-native';
import React from 'react';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import { PageTitle } from '@shared/constant/Text/TextBase';

const { width } = Dimensions.get('window');

const ChartScreen = () => {
  const MyBezierLineChart = () => {
    return (
      <>
        <PageTitle>Bezier Line Chart</PageTitle>
        <LineChart
          data={{
            labels: [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
            ],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get('window').width - 16}
          height={width * 0.9}
          yAxisLabel={'$'}
          yAxisSuffix={'k'}
          // yLabelsOffset={16}
          xLabelsOffset={6}
          // xAxisLabel={'Month'}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '4',
              strokeWidth: '2',
              stroke: '#fff',
            },
          }}
          bezier
          style={{
            paddingVertical: 8,
            borderRadius: 16,
          }}
          onDataPointClick={data => {
            Alert.alert('data', JSON.stringify(data));
          }}
          getDotColor={(dataPoint, data) => {
            if (dataPoint.index === 0) {
              return 'red';
            }
            return 'white';
          }}
          segments={8}
        />
      </>
    );
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View className="flex-1 justify-center items-center text-center p-10">
        {MyBezierLineChart()}
      </View>
    </SafeAreaView>
  );
};

export default ChartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  header: {
    textAlign: 'center',
    fontSize: 18,
    padding: 16,
    marginTop: 16,
  },
  safeAreaView: {
    flex: 1,
  },
});
