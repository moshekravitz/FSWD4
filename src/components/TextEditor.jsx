// File: src/components/TextEditor.jsx
import React, { useState, useEffect } from 'react';
import PreviewPane from './PreviewPane';
import Toolbar from './Toolbar';
import VirtualKeyboard from './VirtualKeyboard';
import FileManager from './FileManager';
import { Keyboard } from './Keyboard';
import AdvancedEditorControls from './AdvancedEditorControls';
import './TextEditor.css';
import './AdvancedEditorControls.css';

const TextEditor = ({ tab }) => {
  const [text, setText] = useState(tab.content);
  const [style, setStyle] = useState({ fontSize: '16px', color: '#000', fontFamily: 'Arial' });
  const [language, setLanguage] = useState('en');
  const [undoStack, setUndoStack] = useState([]);

  useEffect(() => {
    tab.content = text;
  }, [text]);

  const handleInsert = (char) => {
    setUndoStack([...undoStack, text]);
    const newText = text + char;
    setText(newText);
  };

  const handleEditorAction = (action) => {
    switch (action) {
      case 'lang:en': setLanguage('en'); break;
      case 'lang:he': setLanguage('he'); break;
      case 'lang:emoji': setLanguage('emoji'); break;
      case 'delete-char': setText(prev => prev.slice(0, -1)); break;
      case 'delete-word': setText(prev => prev.replace(/\s*\S+\s*$/, '')); break;
      case 'clear-all': setText(''); break;
      case 'undo': {
        const prev = undoStack.pop();
        if (prev !== undefined) {
          setText(prev);
          setUndoStack([...undoStack]);
        }
        break;
      }
      case 'find': {
        const f = prompt('Enter character to find:');
        alert(text.includes(f) ? 'Found!' : 'Not found');
        break;
      }
      case 'replace': {
        const find = prompt('Find?');
        const replace = prompt('Replace with?');
        const replaced = text.replaceAll(find, replace);
        setText(replaced);
        break;
      }
      default: break;
    }
  };

  const toggleLanguage = () => {
    const nextLang = language === 'en' ? 'he' : language === 'he' ? 'emoji' : 'en';
    setLanguage(nextLang);
  };

  return (
    <div className="text-editor">
      <AdvancedEditorControls onAction={handleEditorAction} />
      <PreviewPane text={text} style={style} />
      <Toolbar style={style} setStyle={setStyle} />
      <textarea
        value={text}
        onChange={(e) => {
          setUndoStack([...undoStack, text]);
          setText(e.target.value);
        }}
        style={style}
        className="editor-area"
      />
      <VirtualKeyboard onInsert={handleInsert} />
      <Keyboard onKeyPress={handleInsert} language={language} onLanguageToggle={toggleLanguage} />
      <FileManager text={text} setText={setText} />
    </div>
  );
};

export default TextEditor;
