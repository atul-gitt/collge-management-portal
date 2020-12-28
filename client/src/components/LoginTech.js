import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginTech(props) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const { email, password } = formData;
  return (
    <div className="container">
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Sign in as Teacher
      </p>
      <form className="form" action="#">
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            required
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <button className="btn btn-primary">Register</button>
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/signupTech">Sign Up</Link>
      </p>
    </div>
  );
}

export default LoginTech;
