import React from 'react';
import './Shape.scss';

export const Shape = ({ ...props }) => {
  return (
    <div data-testid="shape-component" className='shape'>
        {props.children}
    </div>
  );
};