import { View } from 'react-native';
import { StyledComponent } from 'nativewind';
import React from 'react';

export const ViewContainer = ({ children, clsx }) => {
  return (
    <StyledComponent
      component={View}
      className={`flex flex-col w-full h-full px-24 ${clsx} `}>
      {children}
    </StyledComponent>
  );
};

export const Row = ({ children, clsx }) => {
  return (
    <StyledComponent
      component={View}
      className={`flex flex-row gap-x-4 px-2 w-screen ${clsx ? clsx : ''}`}>
      {children}
    </StyledComponent>
  );
};

export const Col = ({ children, clsx }) => {
  return (
    <StyledComponent
      component={View}
      className={`flex flex-col gap-y-4 py-2 w-screen ${clsx ? clsx : ''}`}>
      {children}
    </StyledComponent>
  );
};

export const Card = ({ children, clsx }) => {
  return (
    <StyledComponent
      component={View}
      className={`bg-white rounded-lg shadow-lg p-4 ${clsx ? clsx : ''}`}>
      {children}
    </StyledComponent>
  );
};

export const CardHeader = ({ children, clsx }) => {
  return (
    <StyledComponent
      component={View}
      className={`flex flex-row justify-between items-center ${
        clsx ? clsx : ''
      }`}>
      {children}
    </StyledComponent>
  );
};

export const CardBody = ({ children, clsx }) => {
  return (
    <StyledComponent
      component={View}
      className={`flex flex-col gap-y-4 ${clsx ? clsx : ''}`}>
      {children}
    </StyledComponent>
  );
};

export const CardFooter = ({ children, clsx }) => {
  return (
    <StyledComponent
      component={View}
      className={`flex flex-row justify-between items-center ${
        clsx ? clsx : ''
      }`}>
      {children}
    </StyledComponent>
  );
};
