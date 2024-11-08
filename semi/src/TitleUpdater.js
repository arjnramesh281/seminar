import React, { useState, useEffect } from 'react';

function TitleUpdater() {
  const [text, setText] = useState('');

  useEffect(() => {
    document.title = `Typed: ${text}`;
  }, [text]); // Run only when "text" changes

  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Text: {text}</p>
    </div>
  );
}

export default TitleUpdater;
