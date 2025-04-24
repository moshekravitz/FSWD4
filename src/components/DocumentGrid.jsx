import React, { useState } from 'react';
import TextEditor from './TextEditor';
import './DocumentGrid.css';

const DocumentGrid = ({ username }) => {
  const [documents, setDocuments] = useState([
    { id: 1, name: 'Untitled', content: '', savedContent: '', language: 'en', style: {} }
  ]);
  const [activeDocId, setActiveDocId] = useState(1);

  const addNewDocument = () => {
    const newId = Date.now();
    setDocuments([
      ...documents,
      { 
        id: newId, 
        name: 'Untitled', 
        content: '', 
        savedContent: '', 
        language: 'en', 
        style: {} 
      }
      
    ]);
    setActiveDocId(newId);
  };

  const closeDocument = (id) => {
    const doc = documents.find(d => d.id === id);
    if (!doc) return;

    if (doc.content !== doc.savedContent) {
      const confirmSave = window.confirm('You have unsaved changes. Save before closing?');
      if (confirmSave) {
        const name = prompt('Enter file name:', doc.name);
        if (name) {
          const files = JSON.parse(localStorage.getItem('user_files') || '{}');
          if (!files[username]) files[username] = {};
          files[username][name] = {
            text: doc.content,
            style: doc.style || {}
          }; 
          localStorage.setItem('user_files', JSON.stringify(files));
        }
      }
    }

    const updatedDocs = documents.filter(d => d.id !== id);
    setDocuments(updatedDocs);
    
    // If the active document was closed, set another one as active
    if (activeDocId === id && updatedDocs.length > 0) {
      setActiveDocId(updatedDocs[0].id);
    }
  };

  const updateDocContent = (id, content) => {
    setDocuments(prev => prev.map(doc => 
      doc.id === id ? { ...doc, content } : doc
    ));
  };

  const updateSavedContent = (id, content) => {
    setDocuments(prev => prev.map(doc => 
      doc.id === id ? { ...doc, savedContent: content } : doc
    ));
  };

  const updateDocName = (id, newName) => {
    setDocuments(prev => prev.map(doc => 
      doc.id === id ? { ...doc, name: newName } : doc
    ));
  };

  const updateDocLanguage = (id, newLanguage) => {
    setDocuments(prev => prev.map(doc => 
      doc.id === id ? { ...doc, language: newLanguage } : doc
    ));
  };

  const updateDocStyle = (id, newStyle) => {
    setDocuments(prev => prev.map(doc => 
      doc.id === id ? { ...doc, style: newStyle } : doc
    ));
  };
  
  return (
    <div className="document-grid-container">
      <div className="document-grid-header">
        <button className="add-document-btn" onClick={addNewDocument}>
          + New Document
        </button>
      </div>
      
      <div className="document-grid">
        {documents.map((doc) => (
          <div 
            key={doc.id} 
            className={`document-card ${doc.id === activeDocId ? 'active' : ''}`}
            onClick={() => setActiveDocId(doc.id)}
          >
            <div className="document-header">
              <h3>{doc.name}</h3>
              <button 
                className="close-btn" 
                onClick={(e) => {
                  e.stopPropagation();
                  closeDocument(doc.id);
                }}
              >
                ×
              </button>
            </div>
            <div className="document-content-preview" style={doc.style}>
              {doc.content.slice(0, 100)}
              {doc.content.length > 100 ? '...' : ''}
            </div>
          </div>
        ))}
      </div>
      
      {documents.length > 0 && activeDocId && (
        <div className="active-editor-container">
          <TextEditor
            key={activeDocId}
            tab={documents.find(doc => doc.id === activeDocId)}
            onChange={(content) => updateDocContent(activeDocId, content)}
            onSave={(content) => updateSavedContent(activeDocId, content)}
            updateTabName={updateDocName}
            updateTabLanguage={updateDocLanguage}
            updateTabStyle={(style) => updateDocStyle(activeDocId, style)}
          />
        </div>
      )}
    </div>
  );
};

export default DocumentGrid;