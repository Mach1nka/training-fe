import { createContext, Dispatch, SetStateAction } from "react";

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: Dispatch<SetStateAction<Theme>>;
}

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export const ThemeContext = createContext<ThemeContextProps>({});
