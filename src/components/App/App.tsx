import React from 'react';
import { Route, Routes } from 'react-router-dom';

// import { Home } from '../../pages/Home';
import { Layout } from '../Layout';
import { lazy } from 'react';

const Home = lazy(() => import('../../pages/Home'));
// const Coin = lazy(() => import('../../pages/Coin'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
