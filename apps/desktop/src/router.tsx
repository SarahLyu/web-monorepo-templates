import { lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { createBrowserRouter } from 'react-router';

import ErrorFallback from '@/components/error-fallback';
import Layout from '@/components/layout';
const Home = lazy(() => import('@/pages/home'));
const NotFound = lazy(() => import('@/components/not-found'));

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
