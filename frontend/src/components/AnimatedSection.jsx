import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AnimatedSection = ({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1
}) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    triggerOnce: true
  });

  const getAnimationClasses = () => {
    const baseClasses = `transition-all duration-700 ease-out`;
    const delayClass = delay > 0 ? `delay-[${delay}ms]` : '';

    switch (animation) {
      case 'fade-up':
        return `${baseClasses} ${delayClass} ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`;
      case 'fade-down':
        return `${baseClasses} ${delayClass} ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`;
      case 'fade-in':
        return `${baseClasses} ${delayClass} ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`;
      case 'slide-left':
        return `${baseClasses} ${delayClass} ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`;
      case 'slide-right':
        return `${baseClasses} ${delayClass} ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`;
      case 'scale-up':
        return `${baseClasses} ${delayClass} ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`;
      default:
        return baseClasses;
    }
  };

  return (
    <div ref={ref} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;
