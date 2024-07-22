import React, { useState } from 'react';

const ClickLogger = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(prevCount => prevCount + 1);
    console.log('Button Clicked:', clickCount + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>
        Click me
      </button>
      <p> {clickCount} </p>
    </div>
  );
};

export default ClickLogger;
