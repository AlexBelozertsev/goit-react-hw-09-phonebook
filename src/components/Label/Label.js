import React from 'react';
import style from './Label.module.css';
import PropTypes from 'prop-types';

const Label = ({ htmlFor, name, children }) => (
  <label htmlFor={htmlFor}>
    {name} {children}
  </label>
);

Label.defaultProps = {
  htmlFor: null,
  name: null,
};

Label.propTypes = {
  htmlFor: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Label;
