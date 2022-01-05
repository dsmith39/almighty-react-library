import React from "react";
import styled from "styled-components";

export interface ButtonProps {
  /** The Button Text */
  label: string;
  color?: string;
}

export interface StyledButtonProps {
  color?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  color: ${(props) => props.color || "black"};
`;

/**
 * @function Button
 * @param {string} label the text for the button
 * @example
 * <Button label="Button Text" />
 */

const Button = (props: ButtonProps) => {
  return <StyledButton color={props.color}>{props.label}</StyledButton>;
};

export default Button;
