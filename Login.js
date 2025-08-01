import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '10%' }}>
      <h2>Intern Portal Login</h2>
      <input placeholder="Email" /><br /><br />
      <input placeholder="Password" type="password" /><br /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;