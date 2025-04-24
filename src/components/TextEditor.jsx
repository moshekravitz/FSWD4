import React, { useState } from 'react';
import Toolbar from './Toolbar';
import { Keyboard } from './Keyboard';
import FileManager from './FileManager';
import AdvancedEditorControls from './AdvancedEditorControls';
import EmojiInput from './EmojiKB';
import Inputs from './inputs';
import './TextEditor.css';
import './AdvancedEditorControls.css';

const TextEditor = ({ tab, onChange, onSave, updateTabName, updateTabLanguage,updateTabStyle }) => {
  const [text, setText] = useState(tab.content);
  const [style, setStyle] = useState(tab.style || { fontSize: '16px', color: '#000', fontFamily: 'Arial' });
  const [language, setLanguage] = useState(tab.language || 'en');
  const [undoStack, setUndoStack] = useState([]);



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
        const newStyle = {
          ...style,
          fontWeight: style.fontWeight === 'bold' ? 'normal' : 'bold',
        };
        setStyle(newStyle);
        if (updateTabStyle) updateTabStyle(newStyle);
        break;
      }
      
      case 'italic': {
        const newStyle = {
          ...style,
          fontStyle: style.fontStyle === 'italic' ? 'normal' : 'italic',
        };
        setStyle(newStyle);
        if (updateTabStyle) updateTabStyle(newStyle);
        break;
      }
      
      case 'underline': {
        const newStyle = {
          ...style,
          textDecoration: style.textDecoration === 'underline' ? 'none' : 'underline',
        };
        setStyle(newStyle);
        if (updateTabStyle) updateTabStyle(newStyle);
        break;
      }
      
      default: break;
    }
  };

  const handleStyleChange = (newStyle) => {
    setStyle(newStyle);
    if (updateTabStyle) updateTabStyle(newStyle);
  };
   
  const toggleLanguage = () => {
    const nextLang = language === 'en' ? 'he' : language === 'he' ? 'emoji' : 'en';
    setLanguage(nextLang);
    if (updateTabLanguage) updateTabLanguage(tab.id, nextLang);
  };

  return (
    <div className="text-editor">
      <AdvancedEditorControls onAction={handleEditorAction} />
      <Toolbar style={style} setStyle={handleStyleChange} />
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          if (onChange) onChange(e.target.value);
        }}
        style={style}
        className="editor-area"
      />
      <Inputs
        style={{ display: 'flex', flexDirection: 'row'}}
        inputs={
          <>
            <EmojiInput onInsert={handleInsert} />
            <Keyboard onKeyPress={handleInsert} language={language} onLanguageToggle={toggleLanguage} />
          </>
        }
      >
      </Inputs>
      <FileManager 
        text={text} 
        setText={(newText) => {
          setText(newText);
          if (onChange) onChange(newText);
          if (onSave) onSave(newText);
        }} 
        tab={{ ...tab, style, setStyle }}
        updateTabName={updateTabName} 
        updateTabStyle={updateTabStyle}
      />
    </div>
  );
};

export default TextEditor;