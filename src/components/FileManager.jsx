import React from 'react';
import './FileManager.css';

const FileManager = ({ text, setText }) => {
  const username = localStorage.getItem('username');

  const saveFile = () => {
    const name = prompt('Enter file name:');
    if (name) {
      const files = JSON.parse(localStorage.getItem('user_files') || '{}');
      if (!files[username]) files[username] = {};
      files[username][name] = text;
      localStorage.setItem('user_files', JSON.stringify(files));
      alert('File saved.');
    }
  };

  const openFile = () => {
    const files = JSON.parse(localStorage.getItem('user_files') || '{}');
    const userFiles = files[username] || {};
    const names = Object.keys(userFiles);
    if (names.length === 0) {
      alert('No files found for this user.');
      return;
    }
    const name = prompt('Enter file name to open:\n' + names.join(', '));
    if (name && userFiles[name]) {
      setText(userFiles[name]);
    } else {
      alert('File not found.');
    }
  };

  return (
    <div className="file-manager">
      <button onClick={saveFile}>Save</button>
      <button onClick={openFile}>Open</button>
    </div>
  );
};

export default FileManager;