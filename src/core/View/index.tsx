import { View } from 'react-native';
import { StyledComponent } from 'nativewind';
import React from 'react';

interface ViewCoreProps {
  clsx?: string;
  children?: React.ReactNode;
}

export const ViewContainer = ({ children, clsx }: ViewCoreProps) => {
  return (
    <StyledComponent
      component={View}
      className={`flex flex-col  h-full mx-16 ${clsx} `}>
      {children}
    </StyledComponent>
  );
};

export const ViewComponent = ({ children, clsx }: ViewCoreProps) => {
  return (
    <StyledComponent
      component={View}
      className={clsx}>
      {children}
    </StyledComponent>
  );
};
export const Row = ({ children, clsx }: ViewCoreProps) => {
  return (
    <StyledComponent
      component={View}
      className={`flex flex-row gap-x-4 px-2 w-screen ${clsx ? clsx : ''}`}>
      {children}
    </StyledComponent>
  );
};

export const Col = ({ children, clsx }: ViewCoreProps) => {
  return (
    <StyledComponent
      component={View}
      className={`flex flex-col gap-y-4 py-2 w-screen ${clsx ? clsx : ''}`}>
      {children}
    </StyledComponent>
  );
};

export const Card = ({ children, clsx }: ViewCoreProps) => {
  return (
    <StyledComponent
      component={View}
      className={`bg-white rounded-lg shadow-lg p-4 ${clsx ? clsx : ''}`}>
      {children}
    </StyledComponent>
  );
};

export const CardHeader = ({ children, clsx }: ViewCoreProps) => {
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

export const CardBody = ({ children, clsx }: ViewCoreProps) => {
  return (
    <StyledComponent
      component={View}
      className={`flex flex-col gap-y-4 ${clsx ? clsx : ''}`}>
      {children}
    </StyledComponent>
  );
};

export const CardFooter = ({ children, clsx }: ViewCoreProps) => {
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
