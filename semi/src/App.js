import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // Update the document title based on the text
  useEffect(() => {
    document.title = `Typed: ${text}`;
  }, [text]);

  // Log the count value whenever it changes
  useEffect(() => {
    console.log(`Count is now ${count}`);
  }, [count]);

  return (
    <div>
      <h1>React Example with Count and Title Updater</h1>
      <div>
        <p>Count is {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <br></br>
      <div>
        <input
          type="text"
          placeholder="Type something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <p>Text: {text}</p>
      </div>
    </div>
  );
}

export default App;
