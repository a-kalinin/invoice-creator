import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './Landing';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
  </Routes>
);

AppRoutes.propTypes = {
};

AppRoutes.defaultProps = {};

export default AppRoutes;
