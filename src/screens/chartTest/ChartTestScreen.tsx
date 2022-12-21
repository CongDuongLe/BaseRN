import React, { useState } from "react";
import { StyleSheet } from 'react-native-size-scaling';
import RNEChartsPro from "react-native-echarts-pro";
import { View } from 'react-native';
const ChartTestScreen : React.FC = () => {
  const pieOption = {
    series: [
      {
        name: "Source",
        type: "pie",
        legendHoverLink: true,
        hoverAnimation: true,
        avoidLabelOverlap: true,
        showEmptyCircle: true,
        top: 20,
        startAngle: 180,
        radius: ['35%', '70%'],
        center: ["50%", "35%"],
        data: [
          { value: 233, name: "android" },
          { value: 310, name: "iOS" },
          { value: 234, name: "web" },
          { value: 234, name: "s" },
          { value: 234, name: "sfd" },
        ],
        
        label: {
          normal: {
            show: true,
            textStyle: {
              fontSize: 12,
              color: "#23273C",
            },
          },
        },
      },
    ],
    legend: {
      left: "center",
      bottom: "0",
    },
  };
  const  option = {
    tooltip: {},
    legend: {},
    xAxis: {
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
    yAxis: {},
    series: [{
      name: "Sale",
      type: "bar",
      data: [5, 20, 36, 10, 10, 20, 4]
    },
    {
      name: "Salea",
      type: "bar",
      data: [6, 22, 33, 30, 9, 20, 4]
    }
  ]
  }
  return (
          <View style={{flex: 1, justifyContent: 'center'}} >
            <View style = {{flex : 0.5}}>

            <RNEChartsPro  option={pieOption} />
            </View>
          </View>
  );
};
export default ChartTestScreen
