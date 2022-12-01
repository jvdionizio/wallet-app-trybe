import React from 'react';
import PropTypes from 'prop-types';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export default function Heading({ size, children, asChild }) {
  const Comp = asChild ? Slot : 'h2';

  return (
    <Comp
      className={ clsx(
        'text-gray-900',
        'font-bold',
        {
          'text-lg': size === 'sm',
          'text-xl': size === 'lg',
        },
      ) }
    >
      {children}
    </Comp>
  );
}

Heading.defaultProps = {
  size: 'lg',
  asChild: false,
};

Heading.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node.isRequired,
  asChild: PropTypes.bool,
};
