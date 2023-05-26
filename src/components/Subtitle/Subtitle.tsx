import React from 'react';
import './Subtitle.scss';

interface SubtitleProps {
  content: string;
}

export const Subtitle = ({ content, ...props }: SubtitleProps) => {
  return (
    <div data-testid="subtitle-component" className='subtitle' {...props}>
      {content}
    </div>
  );
};