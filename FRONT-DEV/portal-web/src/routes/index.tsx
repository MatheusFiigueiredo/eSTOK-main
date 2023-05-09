import { HashRouter, Route, Routes } from 'react-router-dom';
import RoutesStore from '../modules/_shared/constants/RoutesStore.enum';
import { MainLayout } from '../components/MainLayout';

const AppRoutes: React.FC = () => {
  return (
    <HashRouter>
      <MainLayout>
        <Routes>
          <Route index path={RoutesStore.HOME} />
          <Route path={RoutesStore.PRODUTO} />
        </Routes>
      </MainLayout>
    </HashRouter>
  );
};

export default AppRoutes;
