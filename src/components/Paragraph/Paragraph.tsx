import React from 'react';
import './Paragraph.scss';
interface ParagraphProps {
  content: string;
}

export const Paragraph = ({ content, ...props }: ParagraphProps) => {
  return (
    <p data-testid="paragraph-component" className='paragraph' {...props}>
      {content}
    </p>
  );
};
