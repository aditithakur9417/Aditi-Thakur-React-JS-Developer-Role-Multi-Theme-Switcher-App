import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { BrowserRouter } from 'react-router-dom';

// Helper component to sync theme to <body> class
const BodyThemer: React.FC = () => {
  const { theme } = useTheme();

  React.useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return <App />;
};

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <BodyThemer />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
