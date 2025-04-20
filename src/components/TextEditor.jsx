import React, { useState, useEffect } from 'react';
import PreviewPane from './PreviewPane';
import Toolbar from './Toolbar';
import VirtualKeyboard from './VirtualKeyboard';
import FileManager from './FileManager';
import './TextEditor.css';

const TextEditor = ({ tab }) => {
  const [text, setText] = useState(tab.content);
  const [style, setStyle] = useState({ fontSize: '16px', color: '#000', fontFamily: 'Arial' });

  useEffect(() => {
    tab.content = text;
  }, [text]);

  return (
    <div className="text-editor">
      <PreviewPane text={text} style={style} />
      <Toolbar style={style} setStyle={setStyle} />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={style}
        className="editor-area"
      />
      <VirtualKeyboard onInsert={(char) => setText(text + char)} />
      <FileManager text={text} setText={setText} />
    </div>
  );
};

export default TextEditor;
