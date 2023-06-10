import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme, Theme } from '@/app/providers/ThemeProvider';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

interface Props {
  className?: string;
}

export const ThemeSwitcher: FC<Props> = memo(({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames('', {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
});
