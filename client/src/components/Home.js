import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
  return (
    <div className="home-container">
      <div className="user-home">
        <h1>Student</h1>
        <div className="btn-container">
          <div>
            <Link to="/signupStu">
              <button className="btn btn-primary">Sign Up</button>
            </Link>
          </div>
          <div>
            <Link to="/loginStu">
              <button className="btn btn-primary">Log In</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="user-home">
        <h1>Teacher</h1>
        <div className="btn-container">
          <div>
            <Link to="/signupTech">
              <button className="btn btn-primary">Sign Up</button>
            </Link>
          </div>
          <div>
            <Link to="loginTech">
              <button className="btn btn-primary">Log In</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
