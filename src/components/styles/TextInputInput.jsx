import React from 'react';
import { clsx } from 'clsx';

function TextInputInput(props) {
  return (
    <input
      className={ clsx(
        'bg-transparent',
        'flex-1',
        'text-gray-800',
        'text-xs',
        'placeholder:text-gray-600',
        'outline-none',
        'w-full',
      ) }
      { ...props }
    />
  );
}

TextInputInput.displayName = 'TextInput.Input';

export default TextInputInput;
