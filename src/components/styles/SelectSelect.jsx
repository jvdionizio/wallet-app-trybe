/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { clsx } from 'clsx';

function SelectSelect(props) {
  return (
    <select
      className={ clsx(
        {
          'bg-transparent': props.type !== 'number',
          'bg-white-smoked': props.type === 'number',
        },
        'w-full',
        'flex-1',
        'text-gray-900',
        'text-xs',
        'placeholder:text-gray-400',
        'outline-none',
        {
          'text-center': props.type === 'number',
        },
      ) }
      { ...props }
    >
      { props.children }
    </select>
  );
}

SelectSelect.displayName = 'Select.Select';

export default SelectSelect;
