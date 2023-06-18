import { createContext, Dispatch, SetStateAction } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
  PURPLE = 'purple',
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: Dispatch<SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextProps>({});
