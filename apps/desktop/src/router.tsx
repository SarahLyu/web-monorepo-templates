import { lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { createBrowserRouter } from 'react-router';

import ErrorFallback from '@/components/fallbacks/ErrorFallback';
import Layout from '@/layouts';
const Home = lazy(() => import('@/pages/home'));
const NotFound = lazy(() => import('@/components/fallbacks/NotFound'));

const withErrorBoundary = (Component: React.ComponentType) => (
  <ErrorBoundary FallbackComponent={ErrorFallback} resetKeys={[Math.random()]}>
    <Component />
  </ErrorBoundary>
);

const router = createBrowserRouter([
  {
    element: withErrorBoundary(Layout),
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
