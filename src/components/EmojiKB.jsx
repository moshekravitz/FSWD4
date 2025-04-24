import React from 'react';
import './EmojiKB.css';
import symbols from '../data/emojis.json'
import Key from './key';

//const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '😊', '❤️', 'שלום'];
console.log(symbols);

const EmojiInput = ({ onInsert }) => {
  console.log("here");
  return (
      <div className="virtual-keyboard">
        {symbols.map((s, i) => (
          <Key 
            key={i} 
            label={s}
            onClick={() => onInsert(s)}
          />
        ))}
      </div>
  );
};

export default EmojiInput;
