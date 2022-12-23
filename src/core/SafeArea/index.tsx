import React from 'react';
import { SafeAreaView } from 'react-native';
import { styles } from '@core/SafeArea/style';
interface Props{
  children: React.ReactNode
}
const SafeArea : React.FC<Props> = ({children}) => {
  return <SafeAreaView style = {styles.container}>
    {children}
  </SafeAreaView>
}
export default SafeArea
