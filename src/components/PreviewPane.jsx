import React from 'react';
import './PreviewPane.css';

const PreviewPane = ({ text, style }) => {
  return (
    <div className="preview-pane" style={style}>
      {text}
    </div>
  );
};

export default PreviewPane;