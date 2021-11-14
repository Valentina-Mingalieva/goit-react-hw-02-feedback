import React from 'react';

const Button = ({ onGood, onNeutral, onBad }) => (
  <div>
    <button type="button" name="good" onClick={onGood}>
      Good
    </button>
    <button type="button" name="neutral" onClick={onNeutral}>
      Neutral
    </button>
    <button type="button" name="bad" onClick={onBad}>
      Bad
    </button>
  </div>
);
export default Button;
