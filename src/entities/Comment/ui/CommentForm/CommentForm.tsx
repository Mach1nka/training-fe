import type { FC, FormEvent } from 'react';
import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/Input/Input';
import { Button } from '@/shared/ui/Button/Button';

import cls from './CommentForm.module.scss';

interface Props {
  className?: string;
  text: string;
  commentHintId: string;
  isLoading: boolean;
  placeholder?: string;
  label?: string;
  error?: string;
  onChange: (value: string) => void;
  onSubmit: (text: string) => void;
}

export const CommentForm: FC<Props> = memo(
  ({
    className,
    text,
    commentHintId,
    isLoading,
    error,
    placeholder,
    label,
    onChange,
    onSubmit,
  }) => {
    const onCommentSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit(text);
      onChange('');
    };

    return (
      <form
        onSubmit={onCommentSubmit}
        className={classNames(cls.CommentForm, {}, [className])}
        data-testid="CommentForm"
      >
        <Input
          id={commentHintId}
          value={text}
          placeholder={placeholder}
          onChange={onChange}
          data-testid="CommentForm.input"
        />
        <Button disabled={isLoading} type="submit" data-testid="CommentForm.submit">
          {label}
        </Button>
      </form>
    );
  },
);
