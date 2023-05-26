import React from 'react';
import './Button.scss';

export interface ButtonProps {
  label: string;
}

export const Button = ({
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className="button-primary"
      {...props}
    >
      {label}
    </button>
  );
};
