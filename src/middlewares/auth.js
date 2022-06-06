import React from 'react';
import { Navigate } from 'react-router-dom';

function auth(isLoggin) {
  if (isLoggin) {
    return <Navigate to="/painel" />;
  }
  return <Navigate to="/" />;
}

export default auth;
