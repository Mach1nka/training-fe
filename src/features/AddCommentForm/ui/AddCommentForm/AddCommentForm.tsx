import {
  FC, memo, useCallback, FormEvent,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/Input/Input';
import { Button } from '@/shared/ui/Button/Button';
import { ReducersList, useDynamicReducerLoad } from '@/shared/hook/useDynamicReducerLoad';
import { useAppDispatch } from '@/shared/hook/useAppDispatch';

import {
  getAddCommentFormError,
  getAddCommentFormText,
} from '../../model/selector/addCommentFormSelector';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';

const initialReducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

interface Props {
  className?: string;
  onCommentSubmit: (text: string) => void;
}

const AddCommentForm: FC<Props> = memo(({ className, onCommentSubmit }) => {
  const { t } = useTranslation('articleDetails');
  const dispatch = useAppDispatch();
  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);

  const onChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value));
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCommentSubmit(text);
    onChange('');
  };

  useDynamicReducerLoad(initialReducers);

  return (
    <form onSubmit={onSubmit} className={classNames(cls.AddCommentForm, {}, [className])}>
      <Input value={text} placeholder={t('commentForm.placeholder')} onChange={onChange} />
      <Button type="submit">{t('commentForm.submitBtn')}</Button>
    </form>
  );
});

export default AddCommentForm;
