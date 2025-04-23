import React from 'react';
import './EmojiKB.css';

const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '😊', '❤️', 'שלום'];

const VirtualKeyboard = ({ onInsert }) => {
  return (
    <div className="keyboard-container">
      <div className="virtual-keyboard">
        {symbols.map((s, i) => (
          <button key={i} onClick={() => onInsert(s)}>{s}</button>
        ))}
      </div>
    </div>
  );
};

export default VirtualKeyboard;
