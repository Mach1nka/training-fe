import { useContext } from 'react';

import { LOCAL_STORAGE_THEME_KEY } from '@/shared/constant/localstorage';

import { ThemeContext, Theme } from './ThemeContext';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme = Theme.LIGHT, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme = theme;
    switch (theme) {
    case Theme.LIGHT:
      newTheme = Theme.DARK;
      break;
    case Theme.DARK:
      newTheme = Theme.PURPLE;
      break;
    case Theme.PURPLE:
      newTheme = Theme.LIGHT;
      break;
    default:
      newTheme = Theme.LIGHT;
      break;
    }

    setTheme?.(newTheme);
    document.body.classList.replace(theme, newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
}
