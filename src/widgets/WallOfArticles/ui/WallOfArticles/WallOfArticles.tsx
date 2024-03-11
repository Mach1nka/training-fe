import type { FC } from 'react';
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

import type { ArticleSortedField, ArticleType, ArticleView } from '@/entities/Article';
import { ArticleList } from '@/entities/Article';
import type { ReducersList } from '@/shared/hook/useDynamicReducerLoad';
import { useDynamicReducerLoad } from '@/shared/hook/useDynamicReducerLoad';
import { useAppDispatch } from '@/shared/hook/useAppDispatch';
import { thunkMiddleware } from '@/shared/lib/redux/thunkMiddleware';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import type { SortingOrder } from '@/shared/types/common';
import { useDebounce } from '@/shared/hook/useDebounce';
import { ArticlesFiltrationSection } from '@/features/FilterArticles';
import { LOCAL_STORAGE_WALL_OF_ARTICLES_VIEW } from '@/shared/constant/localstorage';

import { fetchArticles } from '../../model/service/fetchArticles/fetchArticles';
import {
  getWallOfArticlesData,
  getWallOfArticlesError,
  getWallOfArticlesInitialized,
  getWallOfArticlesLoading,
  getWallOfArticlesOrder,
  getWallOfArticlesSearch,
  getWallOfArticlesSort,
  getWallOfArticlesTypeFilter,
  getWallOfArticlesView,
} from '../../model/selector/wallOfArticlesSelector';
import {
  wallOfArticlesReducer,
  wallOfArticlesActions,
} from '../../model/slice/wallOfArticlesSlice';

import cls from './WallOfArticles.module.scss';

const initialReducers: ReducersList = {
  wallOfArticles: wallOfArticlesReducer,
};

interface Props {
  className?: string;
}

export const WallOfArticles: FC<Props> = memo(({ className }) => {
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const articles = useSelector(getWallOfArticlesData);
  const view = useSelector(getWallOfArticlesView);
  const isLoading = useSelector(getWallOfArticlesLoading);
  const initialized = useSelector(getWallOfArticlesInitialized);
  const sort = useSelector(getWallOfArticlesSort);
  const order = useSelector(getWallOfArticlesOrder);
  const search = useSelector(getWallOfArticlesSearch);
  const articleTypeFilter = useSelector(getWallOfArticlesTypeFilter);
  const error = useSelector(getWallOfArticlesError);
  const debouncedSearch = useDebounce(fetchArticles({ replace: true }), 500);

  const onChangeView = useCallback(
    (newView: ArticleView) => {
      dispatch(wallOfArticlesActions.setView(newView));
      localStorage.setItem(LOCAL_STORAGE_WALL_OF_ARTICLES_VIEW, newView);
    },
    [dispatch],
  );

  const onChangeSortOrder = useCallback(
    (newOrder: SortingOrder) => {
      dispatch(wallOfArticlesActions.setSortOrder(newOrder));
      dispatch(wallOfArticlesActions.setPage(1));
      searchParams.set('order', newOrder);
      setSearchParams(searchParams);
      thunkMiddleware(() => dispatch(fetchArticles({ replace: true })));
    },
    [dispatch, searchParams, setSearchParams],
  );

  const onChangeSort = useCallback(
    (newField: ArticleSortedField) => {
      dispatch(wallOfArticlesActions.setSortField(newField));
      dispatch(wallOfArticlesActions.setPage(1));
      searchParams.set('sort', newField);
      setSearchParams(searchParams);
      thunkMiddleware(() => dispatch(fetchArticles({ replace: true })));
    },
    [dispatch, searchParams, setSearchParams],
  );

  const onChangeSearch = useCallback(
    (value: string) => {
      dispatch(wallOfArticlesActions.setPage(1));
      dispatch(wallOfArticlesActions.setSearch(value));
      searchParams.set('search', value);
      setSearchParams(searchParams);
      thunkMiddleware(() => dispatch(debouncedSearch));
    },
    [dispatch, searchParams, setSearchParams, debouncedSearch],
  );

  const onChangeTypeFilter = useCallback(
    (value: ArticleType) => {
      dispatch(wallOfArticlesActions.setTypeFilter(value));
      dispatch(wallOfArticlesActions.setPage(1));
      searchParams.set('type', value);
      setSearchParams(searchParams);
      thunkMiddleware(() => dispatch(fetchArticles({ replace: true })));
    },
    [dispatch, searchParams, setSearchParams],
  );

  useDynamicReducerLoad(initialReducers, false);

  useEffect(() => {
    if (!initialized) {
      const searchParamsObj: Record<string, string> = {};
      searchParams.forEach((value, key) => {
        searchParamsObj[key] = value;
      });
      const view = localStorage.getItem(LOCAL_STORAGE_WALL_OF_ARTICLES_VIEW) as ArticleView;

      dispatch(
        wallOfArticlesActions.initWallOfArticles({ searchURLParams: searchParamsObj, view }),
      );
      thunkMiddleware(() => dispatch(fetchArticles({})));
    }
  }, [dispatch]);

  if (error) {
    return (
      <div className={className}>
        <Text theme={TextTheme.ERROR} title={t('error.title')} />
      </div>
    );
  }

  return (
    <div className={className}>
      <ArticlesFiltrationSection
        className={cls.filters}
        sort={sort}
        order={order}
        search={search}
        view={view}
        articleTypeFilter={articleTypeFilter}
        onChangeTypeFilter={onChangeTypeFilter}
        onChangeSortOrder={onChangeSortOrder}
        onChangeSort={onChangeSort}
        onChangeSearch={onChangeSearch}
        onChangeView={onChangeView}
      />
      <ArticleList isLoading={isLoading} view={view} articles={articles} />
    </div>
  );
});
