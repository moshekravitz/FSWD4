// TODO: fix
import React from 'react';

const Button = ({ label, onClick, variant = 'default' }) => {
  const baseStyles = 'px-4 py-2 rounded-xl font-semibold shadow-md transition';
  const variants = {
    default: 'bg-gray-300 text-black hover:bg-gray-400',
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    danger: 'bg-red-600 text-white hover:bg-red-700',
    success: 'bg-green-600 text-white hover:bg-green-700',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
