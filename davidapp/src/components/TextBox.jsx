import React, { useState } from 'react';

const TextBox = () => {
  const [inputText, setInputText] = useState('');

  const handleChange = (e) => {
    setInputText(e.target.value);
    console.log('User Input:', e.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        value={inputText} 
        onChange={handleChange} 
        placeholder="Type something..." 
      />
    </div>
  );
};

export default TextBox;
