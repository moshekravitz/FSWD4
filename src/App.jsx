import React, { useState } from 'react';
import UserLogin from './components/UserLogin';
import DocumentGrid from './components/DocumentGrid';
import './styles/App.css';

const App = () => {
  const [user, setUser] = useState(localStorage.getItem('username'));

  const logout = () => {
    localStorage.removeItem('username');
    setUser(null);
  };

  return (
    <div className="app-container">
      {!user ? (
        <UserLogin setUser={setUser} />
      ) : (
        <>
          <div className="logout-bar">
            <span>Hello, {user}</span>
            <button onClick={logout}>Logout</button>
          </div>
          <DocumentGrid username={user} />
        </>
      )}
    </div>
  );
};

export default App;