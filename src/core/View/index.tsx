import { View } from 'react-native';
import { StyledComponent } from 'nativewind';
import React from 'react';

interface ViewCoreProps {
  clsx?: string;
  children?: React.ReactNode;
}

export const ViewContainer = ({ children, clsx, ...props }: ViewCoreProps) => {
  return (
    <StyledComponent
      component={View}
      className={`flex flex-col w-full h-full px-24 ${clsx} `}
      {...props}>
      {children}
    </StyledComponent>
  );
};

export const Row = ({ children, clsx, ...props }: ViewCoreProps) => {
  return (
    <StyledComponent
      component={View}
      className={`flex flex-row gap-x-4 px-2 w-screen ${clsx ? clsx : ''}`}
      {...props}
    >
      {children}
    </StyledComponent>
  );
};

export const Col = ({ children, clsx, ...props }: ViewCoreProps) => {
  return (
    <StyledComponent
      component={View}
      className={`flex flex-col gap-y-4 py-2 w-screen ${clsx ? clsx : ''}`}
      {...props}>

      {children}
    </StyledComponent>
  );
};

export const Card = ({ children, clsx, ...props }: ViewCoreProps) => {
  return (
    <StyledComponent
      component={View}
      className={`bg-white rounded-lg shadow-lg p-4 ${clsx ? clsx : ''}`}
      {...props}>
      {children}
    </StyledComponent>
  );
};

export const CardHeader = ({ children, clsx, ...props }: ViewCoreProps) => {
  return (
    <StyledComponent
      component={View}
      className={`flex flex-row justify-between items-center ${clsx ? clsx : ''
        }`}
      {...props}
    >
      {children}
    </StyledComponent>
  );
};

export const CardBody = ({ children, clsx, ...props }: ViewCoreProps) => {
  return (
    <StyledComponent
      component={View}
      className={`flex flex-col gap-y-4 ${clsx ? clsx : ''}`}
      {...props}>
      {children}
    </StyledComponent>
  );
};

export const CardFooter = ({ children, clsx, ...props }: ViewCoreProps) => {
  return (
    <StyledComponent
      component={View}
      className={`flex flex-row justify-between items-center ${clsx ? clsx : ''
        }`}
      {...props}
    >
      {children}
    </StyledComponent>
  );
};

export const OneLineView = ({ children, clsx, ...props }: ViewCoreProps) => {
  return (
    <StyledComponent
      component={View}
      className={`flex flex-row items-center ${clsx ? clsx : ''}`}
      {...props}>
      {children}
    </StyledComponent>
  );
};
