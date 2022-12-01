/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

function Button({ children, remove }, props) {
  return (
    <Slot
      className={ clsx(
        'py-2',
        'px-4',
        'bg-green-300',
        'rounded',
        'font-medium',
        'tracking-widest',
        'text-white',
        'text-sm',
        'w-full',
        'transition-colors',
        'disabled:opacity-80',
        'hover:bg-green-500',
        'hover:ring-2',
        'ring-black',
        'hover:outline-none',
        {
          'font-bold px-2 py-3 tracking-wide': remove,
        },
      ) }
      { ...props }
    >
      {children}
    </Slot>
  );
}

Button.defaultProps = {
  remove: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  remove: PropTypes.bool,
};

export default Button;
