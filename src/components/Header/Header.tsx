import React from 'react';
import './Header.scss';
interface HeaderProps {
  content: string;
}

export const Header = ({ content, ...props }: HeaderProps) => {
  return (
    <header data-testid="header-component" className='header-small' {...props}>
      {content}
    </header>
  );
};
