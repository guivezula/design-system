import React from 'react';
import './Paragraph.scss';
interface HeaderProps {
  content: string;
}

export const Paragraph = ({ content, ...props }: HeaderProps) => {
  return (
    <p data-testid="paragraph-component" className='paragraph' {...props}>
      {content}
    </p>
  );
};
