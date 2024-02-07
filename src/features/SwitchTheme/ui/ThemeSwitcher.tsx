import type { FC } from 'react';
import { memo } from 'react';

import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Theme } from '@/shared/constant/theme';
import { useTheme } from '@/shared/hook/useTheme';

interface Props {
  className?: string;
}

export const ThemeSwitcher: FC<Props> = memo(({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={className}
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
});
