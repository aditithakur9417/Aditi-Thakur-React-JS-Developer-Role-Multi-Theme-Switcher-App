import React from 'react';
import Header from './components/Header';
import AppRoutes from './routes';

const App: React.FC = () => (
  <div>
    <Header />
    <AppRoutes />
  </div>
);

export default App;