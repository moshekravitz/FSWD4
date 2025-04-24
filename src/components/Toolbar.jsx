import React from 'react';
import '../styles/Toolbar.css';

const Toolbar = ({ style, setStyle }) => {
  return (
    <div className="toolbar">
      <select value={style.fontFamily} onChange={(e) => setStyle({ ...style, fontFamily: e.target.value })}>
        <option value="Arial">Arial</option>
        <option value="Courier New">Courier New</option>
        <option value="Times New Roman">Times New Roman</option>
      </select>
      <input
        type="number"
        min="10"
        max="48"
        value={parseInt(style.fontSize) || 12}
        onChange={(e) => setStyle({ ...style, fontSize: `${e.target.value}px` })}
      />
      <input
        type="color"
        value={style.color}
        onChange={(e) => setStyle({ ...style, color: e.target.value })}
      />
    </div>
  );
};

export default Toolbar;