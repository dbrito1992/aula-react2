import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <Link to="/" replace>
        <FaHome size="24" />
      </Link>
      <Link to="/login" replace>
        <FaUserAlt size="22" />
      </Link>
      <Link to="/sair" replace>
        <FaSignInAlt size="24" />
      </Link>
    </Nav>
  );
}
