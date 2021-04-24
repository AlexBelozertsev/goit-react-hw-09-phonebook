import React from 'react';
import style from './Form.module.css';
import PropTypes from 'prop-types';

const Form = ({ autoComplete, children, onSubmit }) => (
  <form autoComplete={autoComplete} className={style.Form} onSubmit={onSubmit}>
    {children}
  </form>
);

Form.defaultProps = {
  autoComplete: null,
};

Form.propTypes = {
  autoComplete: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Form;
