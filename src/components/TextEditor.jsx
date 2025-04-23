import React, { useState } from 'react';
import Toolbar from './Toolbar';
import { Keyboard } from './Keyboard';
import FileManager from './FileManager';
import AdvancedEditorControls from './AdvancedEditorControls';
import './TextEditor.css';
import './AdvancedEditorControls.css';

const TextEditor = ({ tab, onChange, onSave, updateTabName, updateTabLanguage }) => {
  const [text, setText] = useState(tab.content);
  const [style, setStyle] = useState({ fontSize: '16px', color: '#000', fontFamily: 'Arial' });
  const [language, setLanguage] = useState(tab.language || 'en');
  const [undoStack, setUndoStack] = useState([]);

  // Update text when tab content changes
  if (tab.content !== text) {
    setText(tab.content);
  }

  const handleInsert = (char) => {
    setUndoStack([...undoStack, text]);
    
    if (char === 'backspace') {
      const newText = text.slice(0, -1);
      setText(newText);
      if (onChange) onChange(newText);
    } else {
      const newText = text + char;
      setText(newText);
      if (onChange) onChange(newText);
    }
  };

  const handleEditorAction = (action) => {
    let newText = text;
    
    switch (action) {
      case 'lang:en': 
        setLanguage('en'); 
        if (updateTabLanguage) updateTabLanguage(tab.id, 'en');
        break;
        
      case 'lang:he': 
        setLanguage('he'); 
        if (updateTabLanguage) updateTabLanguage(tab.id, 'he');
        break;
        
      case 'lang:emoji': 
        setLanguage('emoji'); 
        if (updateTabLanguage) updateTabLanguage(tab.id, 'emoji');
        break;
        
      case 'delete-char': 
        newText = text.slice(0, -1);
        setText(newText);
        if (onChange) onChange(newText);
        break;
        
      case 'delete-word': 
        newText = text.replace(/\s*\S+\s*$/, '');
        setText(newText);
        if (onChange) onChange(newText);
        break;
        
      case 'clear-all': 
        newText = '';
        setText(newText);
        if (onChange) onChange(newText);
        break;
        
      case 'undo': {
        const prev = undoStack.pop();
        if (prev !== undefined) {
          setText(prev);
          setUndoStack([...undoStack]);
          if (onChange) onChange(prev);
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
        newText = text.replaceAll(find, replace);
        setText(newText);
        if (onChange) onChange(newText);
        break;
      }
      
      case 'bold': {
        setStyle(prevStyle => ({
          ...prevStyle,
          fontWeight: prevStyle.fontWeight === 'bold' ? 'normal' : 'bold',
        }));
        break;
      }
      
      case 'italic': {
        setStyle(prevStyle => ({
          ...prevStyle,
          fontStyle: prevStyle.fontStyle === 'italic' ? 'normal' : 'italic',
        }));
        break;
      }
      
      case 'underline': {
        setStyle(prevStyle => ({
          ...prevStyle,
          textDecoration: prevStyle.textDecoration === 'underline' ? 'none' : 'underline',
        }));
        break;
      }
      
      default: break;
    }
  };

  const toggleLanguage = () => {
    const nextLang = language === 'en' ? 'he' : language === 'he' ? 'emoji' : 'en';
    setLanguage(nextLang);
    if (updateTabLanguage) updateTabLanguage(tab.id, nextLang);
  };

  return (
    <div className="text-editor">
      <AdvancedEditorControls onAction={handleEditorAction} />
      <Toolbar style={style} setStyle={setStyle} />
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          if (onChange) onChange(e.target.value);
        }}
        style={style}
        className="editor-area"
      />
      <Keyboard onKeyPress={handleInsert} language={language} onLanguageToggle={toggleLanguage} />
      <FileManager 
        text={text} 
        setText={(newText) => {
          setText(newText);
          if (onChange) onChange(newText);
          if (onSave) onSave(newText);
        }} 
        tab={tab} 
        updateTabName={updateTabName} 
      />
    </div>
  );
};

export default TextEditor;