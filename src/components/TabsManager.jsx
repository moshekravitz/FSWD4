import React, { useState } from 'react';
import TextEditor from './TextEditor';
import './TabsManager.css';

const TabsManager = ({ username }) => {
  const [tabs, setTabs] = useState([{ id: 1, name: 'Untitled', content: '', savedContent: '' }]);
  const [activeTab, setActiveTab] = useState(1);

  const addNewTab = () => {
    const newId = Date.now();
    setTabs([
      ...tabs,
      { id: newId, name: 'Untitled', content: '', savedContent: '', language: 'en' } 
    ]);
    setActiveTab(newId);
  };
  
  

  const closeTab = (id) => {
    const tab = tabs.find(t => t.id === id);
    if (!tab) return;

    if (tab.content !== tab.savedContent) {
      const confirmSave = window.confirm('You have unsaved changes. Save before closing?');
      if (confirmSave) {
        const name = prompt('Enter file name:', tab.name);
        if (name) {
          const files = JSON.parse(localStorage.getItem('user_files') || '{}');
          if (!files[username]) files[username] = {};
          files[username][name] = tab.content;
          localStorage.setItem('user_files', JSON.stringify(files));
        }
      }
    }

    const updatedTabs = tabs.filter(t => t.id !== id);
    setTabs(updatedTabs);
    if (activeTab === id && updatedTabs.length > 0) {
      setActiveTab(updatedTabs[0].id);
    }
  };

  const updateTabContent = (id, content) => {
    setTabs(prev => prev.map(tab => tab.id === id ? { ...tab, content } : tab));
  };

  const updateSavedContent = (id, content) => {
    setTabs(prev => prev.map(tab => tab.id === id ? { ...tab, savedContent: content } : tab));
  };

  const updateTabName = (id, newName) => {
    setTabs(prev => prev.map(tab => tab.id === id ? { ...tab, name: newName } : tab));
  };

  return (
    <div className="tabs-manager">
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab ${tab.id === activeTab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.name}
            <span onClick={() => closeTab(tab.id)}>&times;</span>
          </button>
        ))}
        <button className="add-tab" onClick={addNewTab}>+</button>
      </div>
      {tabs.find(tab => tab.id === activeTab) && (
        <TextEditor
          tab={tabs.find(tab => tab.id === activeTab)}
          onChange={(content) => updateTabContent(activeTab, content)}
          onSave={(content) => updateSavedContent(activeTab, content)}
          updateTabName={updateTabName}
        />
      )}
    </div>
  );
};

export default TabsManager;