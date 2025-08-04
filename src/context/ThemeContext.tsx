import React, { createContext, useContext, useEffect, useState } from 'react';

// Allowed themes defined
export type ThemeType = 'theme1' | 'theme2' | 'theme3';

interface ThemeContextProps {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

// Theme context created
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// ThemeProvider wraps the app and handles theme state
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeType>('theme2');

  // Theme loaded from local storage (on first render)
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeType;
    if (savedTheme) setThemeState(savedTheme);
  }, []);

  // Selected theme saved to local storage
  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {/* Theme class applied to root wrapper */}
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};

// Theme context accessed from components
export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
