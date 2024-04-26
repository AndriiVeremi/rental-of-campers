import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavLayout from '../../layouts/HeaderLayout';
import FooterLayout from 'layouts/FooterLayout';
import Loaders from 'components/Loaders/Loaders';
import { ContainerApp } from './App.module';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() => import('../../pages/FavoritesPage/FavoritesPage'));
const PageNotFound = lazy(() => import('../../pages/PageNotFound/PageNotFound'));

export const App = () => {
  return (
    <ContainerApp>
      <Suspense fallback={<Loaders />}>
        <Routes>
          <Route path="/" element={<NavLayout />}>
            <Route element={<FooterLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
            </Route>
            <Route path="/catalog" element={<CatalogPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </ContainerApp>
  );
};
