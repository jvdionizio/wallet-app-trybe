/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

function IconBtn({ children, remove, edit, check }, props) {
  return (
    <Slot
      className={ clsx(
        'w-6',
        'h-6',
        {

        },
        'rounded',
        'transition-colors',
        {
          'bg-green-300 hover:bg-green-500': check,
          'bg-blue-300 mr-5 hover:bg-blue-500': edit,
          'bg-red-500 hover:bg-red-600': remove,
        },
        'focus:shadow-inner',
      ) }
      { ...props }
    >
      {children}
    </Slot>
  );
}

IconBtn.defaultProps = {
  remove: false,
  edit: false,
  check: false,
};

IconBtn.propTypes = {
  children: PropTypes.node.isRequired,
  remove: PropTypes.bool,
  edit: PropTypes.bool,
  check: PropTypes.bool,
};

export default IconBtn;
