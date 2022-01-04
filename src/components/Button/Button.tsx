import React from "react";

export interface ButtonProps {
  /** The Button Text */
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

export default Button;
