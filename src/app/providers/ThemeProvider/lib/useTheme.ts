import { useContext } from 'react';

import { LOCAL_STORAGE_THEME_KEY } from '@/shared/constant/localstorage';

import { ThemeContext, Theme } from './ThemeContext';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme = theme;
    switch (theme) {
    case Theme.DARK:
      newTheme = Theme.LIGHT;
      break;
    case Theme.LIGHT:
      newTheme = Theme.DARK;
      break;
    default:
      break;
    }

    setTheme(newTheme);
    document.body.classList.replace(theme, newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
}
