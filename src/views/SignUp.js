import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

export default function SignUp() {
    return (
        <div className="wrapper background-color d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <div className="col-md-6 bg-white p-4 rounded-3 form-container">
                <h3 className='text-bold mb-0'>Sign Up</h3>
                <p className="text-secondary">Already have an account? <Link to="/register">Login</Link></p>
                <form action="login.php" method="post">
                    <div className="form-group">
                        <label htmlFor="firstName">First name</label>
                        <input type="text" className="form-control" id="firstName" name="firstName" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" name="email" required />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" name="password" required />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" className="form-control" id="password" name="password" required />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="firstName">Country</label>
                        <input type="text" className="form-control" id="country" name="country" required />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="firstName">Business' name</label>
                        <input type="text" className="form-control" id="businessName" name="businessName" required />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="firstName">Business' website</label>
                        <input type="text" className="form-control" id="businessWebsite" name="businessWebsite" required />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3 w-100">Log in</button>
                </form>


            </div >
        </div >
    );
};

