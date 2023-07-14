import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Root } from './routes/root';
import NotFoundPage from './pages/NotFound';
import { MobileDetail } from './pages/MobileDetail';
import { InfrastructureProvider } from './context/infraestructure';
import { CartProvider } from './context/cart';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Header } from './components/Header';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      cacheTime: 3600,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <InfrastructureProvider>
          <CartProvider>
            <Router>
              <Header />
              <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/" element={<Root />} />
                <Route path="/mobile/:id" element={<MobileDetail />} />
              </Routes>
            </Router>
          </CartProvider>
        </InfrastructureProvider>
      </QueryClientProvider>
    </I18nextProvider>
  </React.StrictMode>
);
