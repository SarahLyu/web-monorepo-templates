import { createBrowserRouter } from 'react-router';

import App from './pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

export default router;
