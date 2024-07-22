// src/Button.js
import React from 'react';

const Button = ({ changeColor }) => {
  return (
    <button onClick={changeColor}>
      Click here
    </button>
  );
};

export default Button;
