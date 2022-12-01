import React from 'react';
import PropTypes from 'prop-types';
import { Slot } from '@radix-ui/react-slot';

function TextInputIcon({ children }) {
  return (
    <Slot className="w-6 h-6 text-gray-600">
      {children}
    </Slot>
  );
}

TextInputIcon.displayName = 'TextInput.Icon';

TextInputIcon.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TextInputIcon;
