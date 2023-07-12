import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Root } from './routes/root';
import NotFoundPage from './pages/NotFound';
import { MobileDetail } from './pages/MobileDetail';
import { InfrastructureProvider } from './context/infraestructure';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Header } from './components/Header';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      cacheTime: 300,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <InfrastructureProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/" element={<Root />} />
            <Route path="/mobile/:id" element={<MobileDetail />} />
          </Routes>
        </Router>
      </InfrastructureProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
