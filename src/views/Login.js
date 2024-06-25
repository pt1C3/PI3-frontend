
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { Helmet } from 'react-helmet';
import AuthService from "./auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Este campo é de preenchimento obrigatório!
      </div>
    );
  }
};
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  async function HandleLogin(event) {
    event.preventDefault();
    setMessage("");
    setLoading(true);
    AuthService.login(email, password)
      .then((res) => {
        if (res === "" || res === false) {
          setMessage("Autenticação falhou.");
          setLoading(false);
        }
        else {
          navigate("/");
        }
      })
      .catch((error) => {
        setMessage("Autenticação falhou.");
        setLoading(false);
      });
  }
  return (
    <div className="wrapper d-flex flex-column align-items-center justify-content-center" style={{ height: '100vh' }}>
      <Helmet>
        <title>Login - LogicLeap</title>
      </Helmet>
      <div className="col-md-3 bg-white p-4 rounded-3 form-container">
        <h3 className='text-bold mb-0'>Login</h3>
        <p className="text-secondary">New user? <Link className="linknormal" to="/signup">Sign up</Link></p>
        <form onSubmit={HandleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" name="email" required value={email}
              onChange={(value) => setEmail(value.target.value)} />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" name="password" required value={password}
              onChange={(value) => setPassword(value.target.value)} />
            <Link to="/reset" className="fs-6">Forgot your password?</Link>
          </div>
          <button type="submit" className="btn btn-primary mt-3 w-100">Log in</button>
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
};

