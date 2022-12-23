import React from "react";
import RNEChartsPro from "react-native-echarts-pro";

interface Props{
  option : object,
  height? : number,
  width? : number,
  backgroundColor? : string,

}
const Chart: React.FC<Props> = ({option = {}, height, width, backgroundColor}) => {
  return (
    <RNEChartsPro
      option = {option}
      height = {height}
      width = {width}
      backgroundColor = {backgroundColor}
    />
  )
}
export default Chart
