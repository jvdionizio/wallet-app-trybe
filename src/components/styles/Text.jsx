import React from 'react';
import PropTypes from 'prop-types';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export default function Text({
  size,
  uppercase,
  textColor,
  children,
  asChild,
  decoration,
  weight,
}) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      className={ clsx(
        'font-sans',
        {
          'text-gray-400': textColor === '400',
          'text-gray-800': textColor === '800',
          'text-gray-900': textColor === '900',
          'text-white': textColor === 'white',
        },
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg',
          'text-2md': size === 'xl',
        },
        {
          'text-decoration-line: underline': decoration === 'underline',
        },
        {
          'font-bold': weight === 'bold',
          'font-medium': weight === 'medium',
          'font-normal': weight === 'normal',
          'font-light': weight === 'light',
        },
        {
          uppercase,
        },
      ) }
    >
      {children}
    </Comp>
  );
}

Text.defaultProps = {
  size: 'md',
  asChild: false,
  textColor: '900',
  decoration: 'none',
  uppercase: false,
  weight: 'normal',
};

Text.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node.isRequired,
  asChild: PropTypes.bool,
  textColor: PropTypes.string,
  decoration: PropTypes.string,
  uppercase: PropTypes.bool,
  weight: PropTypes.string,
};
