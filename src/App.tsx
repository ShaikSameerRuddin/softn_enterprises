import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './home/Home';
import { LoginComponent } from './login/LoginComponent';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  React.useEffect(() => {
    // Check the cookie to see if the user is logged in
    const isLoggedIn = document.cookie
      .split(';')
      .some((cookie) => cookie.trim().startsWith('loggedIn='));
    setLoggedIn(isLoggedIn);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="/" element={<LoginComponent />} />
      </Routes>
    </div>
  );
}

export default App;
