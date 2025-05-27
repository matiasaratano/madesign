import React from 'react';

interface TallyButtonProps {
  text: string;
  className?: string;
}

export function TallyButton({ text, className }: TallyButtonProps) {
  const baseClassName = "text-white hover:text-white flex items-center justify-center h-9 text-sm";
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
