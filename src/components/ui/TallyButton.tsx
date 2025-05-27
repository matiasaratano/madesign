import React from 'react';

interface TallyButtonProps {
  text: string;
  className?: string;
}

export function TallyButton({ text, className }: TallyButtonProps) {
  const baseClassName = "text-white hover:text-white flex items-center justify-center";
  return (
    <button
      data-tally-open="3lgkQp"
      data-tally-width="367"
      data-tally-emoji-text="👋"
      data-tally-emoji-animation="wave"
      className={`${baseClassName} ${className || ''}`}
    >
      {text}
    </button>
  );
}
