import { StyledComponent } from 'nativewind';
import React from 'react';
import { Text } from '@components';


export const PageTitle = ({ children, clsx }) => {
  return (
    <StyledComponent
      component={Text}
      className={`font-i-bold text-20 text-bubble-gum leading-28 ${
        clsx ? clsx : ''
      } `}>
      {children}
    </StyledComponent>
  );
};

export const Body16R = ({ children, clsx }) => {
  return (
    <StyledComponent
      component={Text}
      className={`font-i-regular text-16 text-gray1 ${
        clsx ? clsx : ''
      }  leading-24`}>
      {children}
    </StyledComponent>
  );
};

export const Body16SB = ({ children, clsx }) => {
  return (
    <StyledComponent
      component={Text}
      className={`font-i-semibold text-16 text-gray1 ${
        clsx ? clsx : ''
      }  leading-24`}>
      {children}
    </StyledComponent>
  );
};


export const Body14R = ({ children, clsx }) => {
  return (
    <StyledComponent
      component={Text}
      className={`font-i-regular text-14 text-black leading-22 ${
        clsx ? clsx : ''
      }`}>
      {children}
    </StyledComponent>
  );
};

export const IContent = ({ children, clsx }) => {
  return (
    <StyledComponent
      component={Text}
      className={`font-i-regular text-12 text-black leading-22 ${
        clsx ? clsx : ''
      }  `}>
      {children}
    </StyledComponent>
  );
};

export const BodyB = ({ children, clsx }) => {
  return (
    <StyledComponent
      component={Text}
      className={`font-i-bold text-14 text-gray2 leading-22 ${
        clsx ? clsx : ' '
      }`}>
      {children}
    </StyledComponent>
  );
};

export const Body16BUp = ({ children, clsx }) => {
  return (
    <StyledComponent
      component={Text}
      className={`font-i-bold text-16 text-main-blue ${clsx ? clsx : ''}
      } leading-24 uppercase`}>
      {children}
    </StyledComponent>
  );
};


