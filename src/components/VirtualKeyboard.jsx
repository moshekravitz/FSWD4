import React from 'react';
import './VirtualKeyboard.css';

const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '😊', '❤️', 'שלום'];

const VirtualKeyboard = ({ onInsert }) => {
  return (
    <div className="virtual-keyboard">
      {symbols.map((s, i) => (
        <button key={i} onClick={() => onInsert(s)}>{s}</button>
      ))}
    </div>
  );
};

export default VirtualKeyboard;
