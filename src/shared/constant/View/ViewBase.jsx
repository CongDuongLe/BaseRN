import {View} from 'react-native'
import { StyledComponent } from 'nativewind';
import React from 'react';

export const ViewContainer = ({ children }) => {
  return (
    <StyledComponent
      component={View}
      className="flex flex-col w-full h-full px-24 ">
      {children}
    </StyledComponent>
  );
}

export const Row = ({ children }) => {
  return (
    <StyledComponent
      component={View}
      className="flex flex-row gap-x-4 justify-center items-center">
      {children}
    </StyledComponent>
  );
}
