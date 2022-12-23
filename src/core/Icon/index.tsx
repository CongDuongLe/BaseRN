import React from 'react';

import Ionicons  from 'react-native-vector-icons/Ionicons';

interface Props {
  name : string,
  size? : number,
  color? : string
}
const IconComponent : React.FC<Props> = ({ name, size, color}) => {
  return <Ionicons name= {name} size = {size} color = {color} />

}
export default IconComponent
