import { FC, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ReducersList, useDynamicReducerLoad } from '@/shared/hook/useDynamicReducerLoad';
import { ArticleList } from '@/entities/Article';
import { useAppDispatch } from '@/shared/hook/useAppDispatch';
import { thunkMiddleware } from '@/shared/lib/redux/thunkMiddleware';

import {
  getArticleRecommendationsData,
  getArticleRecommendationsLoading,
} from '../../model/selector/articleRecommendationsSelector';
import {
  fetchArticleRecommendations,
} from '../../model/service/fetchArticleRecommendations/fetchArticleRecommendations';
import { articleRecommendationsReducer } from '../../model/slice/articleRecommendationsSlice';
import cls from './ArticleRecommendationsSection.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

const initialReducers: ReducersList = {
  articleRecommendations: articleRecommendationsReducer,
};

interface Props {
  className?: string;
}

const ArticleRecommendationsSection: FC<Props> = memo(({ className }) => {
  const dispatch = useAppDispatch();
  const data = useSelector(getArticleRecommendationsData);
  const isLoading = useSelector(getArticleRecommendationsLoading);

  useDynamicReducerLoad(initialReducers);

  useEffect(() => {
    thunkMiddleware(() => dispatch(fetchArticleRecommendations()));
  }, []);

  return (
    <ArticleList
      className={classNames(cls.recommendations, {}, [className])}
      articles={data}
      isLoading={isLoading}
      target="_blank"
    />
  );
});

export default ArticleRecommendationsSection;
