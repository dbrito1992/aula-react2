import React from 'react';
import Login from '../pages/Login';
import auth from '../middlewares/auth';

const go = false;

export function PageHome() {
  if (go === false) {
    return <Login />;
  }
  return auth(true);
}

export function PageAbout() {
  return <h1>About</h1>;
}

export function PageLogin() {
  return <h1>Login</h1>;
}
