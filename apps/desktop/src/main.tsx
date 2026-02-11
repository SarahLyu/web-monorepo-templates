import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';

import router from './router';
import './style.css';

createRoot(document.getElementById('app')!).render(<RouterProvider router={router} />);
