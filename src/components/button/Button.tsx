import React, { ReactNode } from 'react'

import { StyledArrowButton, StyledButton, StyledFlatButton } from './Button.styled';

interface BtnProps {
  children: ReactNode;
}

export const Button:React.FC<BtnProps> = ({ children, ...props }) => {
  return <StyledButton type='button' {...props}> {children}</StyledButton>;
};

export const ArrowButton:React.FC<BtnProps>  = ({ children, ...props }) => {
  return <StyledArrowButton type='button' {...props}> {children}</StyledArrowButton>;
};

export const FlatButton:React.FC<BtnProps>  = ({ children, ...props }) => {
  return <StyledFlatButton type='button' {...props}> {children}</StyledFlatButton>;
};
