import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Navbar,
  SignupTech,
  SignupStu,
  LoginStu,
  LoginTech,
  Home,
} from './components/index';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signupTech" exact component={SignupTech} />
        <Route path="/signupStu" exact component={SignupStu} />
        <Route path="/loginTech" exact component={LoginTech} />
        <Route path="/loginStu" exact component={LoginStu} />
      </Switch>
    </div>
  );
}

export default App;
