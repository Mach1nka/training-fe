import {
  FC, memo, useCallback, useEffect,
} from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleList, ArticleView } from '@/entities/Article';
import { ReducersList, useDynamicReducerLoad } from '@/shared/hook/useDynamicReducerLoad';
import { useAppDispatch } from '@/shared/hook/useAppDispatch';
import { thunkMiddleware } from '@/shared/lib/redux/thunkMiddleware';
import { ViewSwitcher } from '@/features/SwitchWallOfArticlesView';

import { fetchArticles } from '../../model/service/fetchArticles/fetchArticles';
import {
  getWallOfArticlesData,
  getWallOfArticlesError,
  getWallOfArticlesInitialized,
  getWallOfArticlesLoading,
  getWallOfArticlesView,
} from '../../model/selector/wallOfArticlesSelector';
import { wallOfArticlesReducer, wallOfArticlesActions } from '../../model/slice/wallOfArticlesSlice';
import { Text, TextTheme } from '@/shared/ui/Text/Text';

const initialReducers: ReducersList = {
  wallOfArticles: wallOfArticlesReducer,
};

interface Props {
  className?: string;
}

export const WallOfArticles: FC<Props> = memo(({ className }) => {
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();
  const articles = useSelector(getWallOfArticlesData);
  const view = useSelector(getWallOfArticlesView);
  const isLoading = useSelector(getWallOfArticlesLoading);
  const initialized = useSelector(getWallOfArticlesInitialized);
  const error = useSelector(getWallOfArticlesError);

  const onChangeView = useCallback((newView: ArticleView) => {
    dispatch(wallOfArticlesActions.setView(newView));
  }, []);

  useDynamicReducerLoad(initialReducers, false);

  useEffect(() => {
    if (!initialized) {
      dispatch(wallOfArticlesActions.initWallOfArticles());
      thunkMiddleware(() => dispatch(fetchArticles()));
    }
  }, []);

  if (error) {
    return (
      <div className={classNames('', {}, [className])}>
        <Text theme={TextTheme.ERROR} title={t('error.title')} />
      </div>
    );
  }

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
