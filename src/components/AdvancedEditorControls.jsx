import React from 'react';
import './AdvancedEditorControls.css';

const AdvancedEditorControls = ({ onAction }) => {
  return (
    <div className="advanced-controls">
      <div className="lang-switch">
        <button onClick={() => onAction('lang:en')}>EN</button>
        <button onClick={() => onAction('lang:he')}>HE</button>
        <button onClick={() => onAction('lang:emoji')}>😊</button>
      </div>
      <div className="edit-actions">
        <button onClick={() => onAction('bold')}>B</button>
        <button onClick={() => onAction('italic')}>I</button>
        <button onClick={() => onAction('underline')}>U</button>
      </div>
      <div className="delete-actions">
        <button onClick={() => onAction('delete-char')}>⌫</button>
        <button onClick={() => onAction('delete-word')}>🗑️</button>
        <button onClick={() => onAction('clear-all')}>🧹</button>
      </div>
      <div className="advanced-actions">
        <button onClick={() => onAction('find')}>🔍 Find</button>
        <button onClick={() => onAction('replace')}>♻ Replace</button>
        <button onClick={() => onAction('undo')}>↩ Undo</button>
      </div>
    </div>
  );
};

export default AdvancedEditorControls;
