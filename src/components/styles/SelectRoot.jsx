import React from 'react';
import PropTypes from 'prop-types';
import { clsx } from 'clsx';

function SelectRoot({ children, error }) {
  return (
    <div
      className={ clsx(
        'flex',
        'items-center',
        'gap-3',
        'h-12',
        'py-4',
        'px-3',
        'rounded',
        'bg-white',
        'w-full',
        {
          'ring-red': error,
        },
        'focus-within:ring-2',
        'focus-within:ring-yellow-500',
      ) }
    >
      {children}
    </div>
  );
}

SelectRoot.displayName = 'Select.Root';

SelectRoot.defaultProps = {
  error: false,
};

SelectRoot.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.bool,
};

export default SelectRoot;
