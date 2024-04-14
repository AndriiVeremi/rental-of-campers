import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import NavLayout from '../../layouts/NavLayout';
import { ContainerApp } from './App.module';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() => import('../../pages/FavoritesPage/FavoritesPage'));
const PageNotFound = lazy(() => import('../../pages/PageNotFound/PageNotFound'));

export const App = () => {

  return (
    <ContainerApp>
      <Routes>
        <Route path="/" element={<NavLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<h1>loading...</h1>}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/catalog"
            element={
              <Suspense fallback={<h1>loading...</h1>}>
                <CatalogPage />
              </Suspense>
            }
          />
          <Route
            path="/favorites"
            element={
              <Suspense fallback={<h1>loading...</h1>}>
                <FavoritesPage />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<h1>loading...</h1>}>
                <PageNotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </ContainerApp>
  );
};
