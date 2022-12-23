import React from "react";
import { ViewComponent } from '@core/View';
import { Body16SB } from '@core/Typo';
import Chart from "@core/Chart";
interface Props{
  title: String,
  data: object
}
const CardChart : React.FC<Props> = ({title, data}) => {
  return (
    <ViewComponent clsx='bg-white mx-16 mt-16 px-20 py-12 rounded-4'>
      <Body16SB>{title}</Body16SB>
      <Chart option={data} />
    </ViewComponent>
  )
}

export default CardChart
