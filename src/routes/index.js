import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { PageHome, PageLogin, PageAbout } from './MyRoute';
import Page404 from '../pages/Page404';

export default function Run() {
  return (
    <Routes>
      <Route exact path="/" element={<PageHome />} />
      <Route exact path="/login" element={<PageLogin />} />
      <Route exact path="/about" element={<PageAbout />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
