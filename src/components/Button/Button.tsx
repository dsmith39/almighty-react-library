import React from "react";

export interface ButtonProps {
  /** The Button Text */
  label: string;
}

/**
 * @function Button
 * @param {string} label the text for the button
 * @example
 * <Button label="Button Text" />
 */

const Button = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

export default Button;
