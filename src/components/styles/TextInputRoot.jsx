import React from 'react';
import PropTypes from 'prop-types';
import { clsx } from 'clsx';

function TextInputRoot({ children, error, form }) {
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
        {
          'bg-gray-200': form === false,
          'bg-white': form === true,
        },
        'w-full',
        'ring-2',
        'ring-gray-100',
        {
          'ring-red': error,
        },
        'focus-within:ring-2',
        'focus-within:ring-green-300',
      ) }
    >
      {children}
    </div>
  );
}

TextInputRoot.displayName = 'TextInput.Root';

TextInputRoot.defaultProps = {
  error: false,
  form: false,
};

TextInputRoot.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.bool,
  form: PropTypes.bool,
};

export default TextInputRoot;
