import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';

const Home = lazy(() => import('@/pages/home'));
const NotFound = lazy(() => import('@/components/not-found'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
