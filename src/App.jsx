import React, { useState, useEffect } from 'react';
import UserLogin from './components/UserLogin';
import TabsManager from './components/TabsManager';
import './styles/App.css';

const App = () => {
  const [user, setUser] = useState(localStorage.getItem('username'));

  const logout = () => {
    localStorage.removeItem('username');
    setUser(null);
  };


  useEffect(() => {
    setUser(localStorage.getItem('username'));
  }, []);

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
          <TabsManager username={user} />
        </>
      )}
    </div>
  );
};

export default App;