import type { FC } from 'react';
import { memo, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import CopyIcon from '@/shared/assets/icons/copy.svg';

import cls from './Code.module.scss';

interface Props {
  className?: string;
  text: string;
}

export const Code: FC<Props> = memo(({ className, text }) => {
  const onCopyClick = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button onClick={onCopyClick} theme={ButtonTheme.CLEAR} className={cls.copyBtn}>
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});
