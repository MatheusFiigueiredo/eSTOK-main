import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import RoutesPortal from '../modules/_shared/constants/Routes.enum';
import Home from '../modules/home';
import Produto from '../modules/produto';

const AppRoutes: React.FC = () => {
  return (
    <HashRouter>
      <MainLayout>
        <Routes>
          <Route index path={RoutesPortal.HOME} Component={Home} />
          <Route path={RoutesPortal.PRODUTO} Component={Produto} />
        </Routes>
      </MainLayout>
    </HashRouter>
  );
};

export default AppRoutes;
