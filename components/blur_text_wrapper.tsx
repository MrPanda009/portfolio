'use client'

import React from 'react';
import BlurText from './blur_text';

interface BlurTextWrapperProps {
  text: string;
  delay?: number;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  className?: string;
}

const BlurTextWrapper: React.FC<BlurTextWrapperProps> = ({
  text,
  delay,
  animateBy,
  direction,
  className,
}) => {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <BlurText
      text={text}
      delay={delay}
      animateBy={animateBy}
      direction={direction}
      onAnimationComplete={handleAnimationComplete}
      className={className}
    />
  );
};

export default BlurTextWrapper;
