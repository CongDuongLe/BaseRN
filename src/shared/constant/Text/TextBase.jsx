import { StyledComponent } from 'nativewind';
import React from 'react';
import { Text } from '@components';

export const PageTitle = ({ children }) => {
  return (
    <StyledComponent
      component={Text}
      className="font-i-bold text-20 text-bubble-gum leading-28 ">
      {children}
    </StyledComponent>
  );
};

export const Body16R = ({ children, inLogout }) => {
  return (
    <StyledComponent
      component={Text}
      className={`font-i-regular text-16 ${
        inLogout ? 'text-gray1' : 'text-main-blue'
      }  leading-24`}>
      {children}
    </StyledComponent>
  );
};
export const Body14R = ({ children }) => {
  return (
    <StyledComponent
      component={Text}
      className="font-i-regular text-14 text-black leading-22">
      {children}
    </StyledComponent>
  );
};

export const IContent = ({ children, isItalic }) => {
  return (
    <StyledComponent
      component={Text}
      className={`font-i-regular text-12 text-black leading-22 ${
        isItalic ? 'italic' : null
      }  `}>
      {children}
    </StyledComponent>
  );
};

export const BodyB = ({ children }) => {
  return (
    <StyledComponent
      component={Text}
      className="font-i-bold text-14 text-gray2 leading-22">
      {children}
    </StyledComponent>
  );
};

export const Body16RUp = ({ children, isBack }) => {
  return (
    <StyledComponent
      component={Text}
      className={`font-i-bold text-16 ${
        isBack ? 'text-main-blue' : 'text-white'
      } leading-24 uppercase`}>
      {children}
    </StyledComponent>
  );
};
