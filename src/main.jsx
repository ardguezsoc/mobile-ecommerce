import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './routes/root';
import NotFoundPage from './pages/NotFound';
import { MobileDetail } from './pages/MobileDetail';
import { InfrastructureProvider } from './context/infraestructure';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/mobile/:id',
    element: <MobileDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InfrastructureProvider>
      <RouterProvider router={router} />
    </InfrastructureProvider>
  </React.StrictMode>
);
