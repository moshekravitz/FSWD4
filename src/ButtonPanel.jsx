// TODO: fix
import React from 'react';
import Button from './Button';

const ButtonPanel = ({ onSave, onCancel, onDelete }) => {
  return (
    <div className="flex gap-4 p-4 bg-gray-100 rounded-2xl shadow-lg">
      <Button label="Save" onClick={onSave} variant="primary" />
      <Button label="Cancel" onClick={onCancel} variant="default" />
      <Button label="Delete" onClick={onDelete} variant="danger" />
    </div>
  );
};

export default ButtonPanel;
