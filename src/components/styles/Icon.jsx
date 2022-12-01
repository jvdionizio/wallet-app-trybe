import React from 'react';
import PropTypes from 'prop-types';
import { Slot } from '@radix-ui/react-slot';

function Icon({ children }) {
  return (
    <Slot className="w-6 h-6 text-white" weight="bold">
      {children}
    </Slot>
  );
}

Icon.displayName = 'Header.Icon';

Icon.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Icon;
