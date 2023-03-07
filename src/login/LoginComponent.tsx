import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
export const LoginComponent = () => {
  const navigate: NavigateFunction = useNavigate();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleLoginSubmit = (event: any) => {
    event.preventDefault();
    // Hardcoded credentials
    if (username === 'sameer' && password === 'sameer') {
      // Set the cookie
      document.cookie = 'loggedIn=true';
      // Redirect to the home page
      navigate('/home');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <br />
      <button type="submit">Log In</button>
    </form>
  );
};
