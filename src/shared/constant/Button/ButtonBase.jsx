import React from 'react';
import { Button } from '@components';
import { StyledComponent } from 'nativewind';
import { TouchableOpacity } from 'react-native';

export const ButtonBase = ({ children, ...props }) => {
  return (
    <StyledComponent component={Button} {...props}>
      {children}
    </StyledComponent>
  );
};

export const ApplyButton = ({ children, ...props }) => {
  return (
    <StyledComponent
      component={TouchableOpacity}
      className="bg-main-blue rounded-8 px-40 py-12 items-center justify-center rounded-lg"
      {...props}>
      {children}
    </StyledComponent>
  );
};

export const BgTransparentBtn = ({ children, ...props }) => {
  return (
    <StyledComponent
      component={TouchableOpacity}
      className="bg-transparent rounded-8 px-40 py-12 items-center justify-center rounded-lg"
      {...props}>
      {children}
    </StyledComponent>
  );
};

export const HoverBtn = ({ children, clsx, ...props }) => {
  return (
    <StyledComponent
      component={TouchableOpacity}
      className={`bg-main-blue/10 rounded-lg px-40 py-12 items-center justify-center mt-2 ${clsx}`}
      {...props}>
      {children}
    </StyledComponent>
  );
};



