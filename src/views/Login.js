import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../views/auth.service';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    setMessage('');
    setLoading(true);

    AuthService.login(email, password)
      .then((res) => {
        if (res && res.token) {
          onLogin(res.data); // Pass user data to App component
        } else {
          setMessage('Authentication failed.');
        }
        setLoading(false);
      })
      .catch((error) => {
        setMessage('Authentication failed.');
        setLoading(false);
      });
  };

  return (
    <div className="wrapper d-flex flex-column align-items-center justify-content-center" style={{ height: '100vh' }}>
      <div className="col-md-3 bg-white p-4 rounded-3 form-container">
        <h3 className="text-bold mb-0">Login</h3>
        <p className="text-secondary">
          New user? <Link className="linknormal" to="/signup">Sign up</Link>
        </p>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link to="/reset" className="fs-6">
              Forgot your password?
            </Link>
          </div>
          <button type="submit" className="btn btn-primary mt-3 w-100">
            {loading ? 'Logging in...' : 'Log in'}
          </button>
          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
