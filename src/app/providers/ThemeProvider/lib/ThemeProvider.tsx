import {
  FC, useEffect, useMemo, useState,
} from 'react';

import { LOCAL_STORAGE_THEME_KEY } from '@/shared/constant/localstorage';

import { Theme, ThemeContext } from './ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface Props {
  initialTheme?: Theme
}

export const ThemeProvider: FC<Props> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  useEffect(() => {
    document.body.classList.add(theme);

    return () => {
      document.body.classList.remove(theme);
    };
  }, []);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
