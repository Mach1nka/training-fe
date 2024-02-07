import type { Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';

import type { Theme } from '@/shared/constant/theme';

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: Dispatch<SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextProps>({});
