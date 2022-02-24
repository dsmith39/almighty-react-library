import React from "react";
import styled from "styled-components";



export interface StyledButtonProps {
  color?: string;
  height?: string;
  width?: string;
  margin?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  height: ${(props) => props.height || "auto"};
  width: ${(props) => props.width || "auto"};
  margin: ${(props) => props.margin || "auto"};
  color: ${(props) => props.color || "black"};
  background: linear-gradient(180deg, #7e7e7e 0%, #585858 100%);
  box-shadow: 0px 4px 3px 0px rgba(27, 64, 106, 1);
  border: ${(props) => props.name || "defaultOption"};
  border-radius: 50px;

  &:active {
    transform: translateY(-0.1rem);
    box-shadow: 0px 2px 2px 0px rgba(27, 64, 106, 1);
    letter-spacing: -0.5px;
    transition: all 0.2s;
  }
`;

/**
 * @function Button
 * @param {string} label the text for the button
 * @example
 * <Button label="Button Text" />
 */

export interface ButtonProps {
  /** The Button Text */
  label: string;
  color?: string;
}
const Button = (props: ButtonProps) => {
  return <StyledButton color={props.color}>{props.label}</StyledButton>;
};

export default Button;
