import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import { Helmet } from 'react-helmet';

export default function Login(){
  return (
    <div className="wrapper background-color d-flex flex-column align-items-center justify-content-center" style={{ height: '100vh' }}>
            <Helmet>
        <title>Login - LogicLeap</title>
      </Helmet>
      <div className="col-md-3 bg-white p-4 rounded-3 form-container">
        <h3 className='text-bold mb-0'>Login</h3>
        <p className="text-secondary">New user? <Link to="/register">Sign up</Link></p>
        <form action="login.php" method="post">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" name="email" required />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" name="password" required />
            <Link to="/reset" className="fs-6">Forgot your password?</Link>
          </div>
          <button type="submit" className="btn btn-primary mt-3 w-100">Log in</button>
        </form>
        
        
      </div>
    </div>
  );
};

