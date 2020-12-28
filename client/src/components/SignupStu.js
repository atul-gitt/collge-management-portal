import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignupStu(props) {
  const [errors, setError] = useState({ error: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setError({
        ...errors,
        error: 'Passwords does not match  (click me to disable)',
      });
      console.log('Passwords doent match');
    }
  };

  const removeError = () => {
    setError({ ...errors, error: '' });
  };

  const onError = (
    <div className="alert alert-danger" onClick={removeError}>
      {errors.error}
    </div>
  );

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const { name, email, password, password2 } = formData;
  return (
    <div className="container">
      {errors.error && onError}
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Create Your Account as a Student
      </p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            value={name}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            value={password2}
            onChange={(e) => onChange(e)}
          />
        </div>
        <button className="btn btn-primary">Register</button>
      </form>
      <p className="my-1">
        Already have an account? <Link to="/loginStu">Sign In</Link>
      </p>
    </div>
  );
}

export default SignupStu;
