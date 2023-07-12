import {
  FC, memo, useCallback, useEffect,
} from 'react';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleList, ArticleView } from '@/entities/Article';
import { ReducersList, useDynamicReducerLoad } from '@/shared/hook/useDynamicReducerLoad';
import { useAppDispatch } from '@/shared/hook/useAppDispatch';
import { thunkMiddleware } from '@/shared/lib/redux/thunkMiddleware';
import { ViewSwitcher } from '@/features/SwitchWallOfArticlesView';

import { fetchArticles } from '../../model/service/fetchArticles/fetchArticles';
import {
  getWallOfArticlesData,
  getWallOfArticlesLoading,
  getWallOfArticlesView,
} from '../../model/selector/wallOfArticlesSelector';
import { wallOfArticlesReducer, wallOfArticlesActions } from '../../model/slice/wallOfArticlesSlice';

const initialReducers: ReducersList = {
  wallOfArticles: wallOfArticlesReducer,
};

interface Props {
  className?: string;
}

export const WallOfArticles: FC<Props> = memo(({ className }) => {
  const dispatch = useAppDispatch();
  const articles = useSelector(getWallOfArticlesData);
  const view = useSelector(getWallOfArticlesView);
  const isLoading = useSelector(getWallOfArticlesLoading);

  const onChangeView = useCallback((newView: ArticleView) => {
    dispatch(wallOfArticlesActions.setView(newView));
  }, []);

  useDynamicReducerLoad(initialReducers);

  useEffect(() => {
    dispatch(wallOfArticlesActions.initWallOfArticles());
    thunkMiddleware(() => dispatch(fetchArticles()));
  }, []);

  return (
    <div className={classNames('', {}, [className])}>
      <ViewSwitcher view={view} onChangeView={onChangeView} />
      <ArticleList
        isLoading={Boolean(isLoading)}
        view={view}
        articles={articles}
      />
    </div>
  );
});
