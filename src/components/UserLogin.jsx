import React, { useState } from 'react';
import '../styles/UserLogin.css';

const UserLogin = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState('login');

  const handleSubmit = () => {
    if (!username.trim() || !password.trim()) return;
    const users = JSON.parse(localStorage.getItem('users') || '{}');

    if (mode === 'register') {
      if (users[username]) {
        alert('User already exists. Please login.');
      } else {
        users[username] = { password };
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('username', username);
        setUser(username);
      }
    } else {
      if (users[username]) {
        if (users[username].password === password) {
          localStorage.setItem('username', username);
          setUser(username);
        } else {
          alert('Incorrect password.');
        }
      } else {
        alert('User not found. Please register.');
      }
    }
  };

  return (
    <div className="user-login">
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>{mode === 'register' ? 'Register' : 'Login'}</button>
      <button onClick={() => setMode(mode === 'register' ? 'login' : 'register')}>
        {mode === 'register' ? 'Switch to Login' : 'Switch to Register'}
      </button>
    </div>
  );
};

export default UserLogin;