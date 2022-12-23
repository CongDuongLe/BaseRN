import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyledComponent } from 'nativewind';

const Button = ({
  onPress,
  color,
  size,
  children,
  type,
  clsx,
  disable,
  ...props
}) => {
  return (
    <StyledComponent
      component={TouchableOpacity}
      onPress={onPress}
      className={`border-solid 
        border
        ${bg[color || 'primary']} 
        ${sizeBtn[size || 'middle']} 
        ${typeBorder[type || 'default']}
        ${clsx || ''}
        ${disable ? 'opacity-50' : ''}
        rounded-4
        items-center 
        justify-center`}
      {...props}>
      {children}
    </StyledComponent>
  );
};
export default Button;
const bg = {
  success: 'bg-main-green border-main-green',
  primary: 'bg-main-blue border-main-blue',
  danger: 'bg-main-red border-main-red',
  disabled: 'bg-disabled border-disabled',
  gray: 'bg-gray7 border-gray-400',
};
const sizeBtn = {
  small: 'py-4 px-8',
  middle: 'py-12 px-16',
  large: 'py-16 px-24',
};
const typeBorder = {
  default: '',
  dashed: 'bg-transparent border-dashed ',
  ghost: 'bg-transparent',
  text: 'border-0 bg-transparent',
};
