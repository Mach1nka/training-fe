import { FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ReducersList, useDynamicReducerLoad } from '@/shared/hook/useDynamicReducerLoad';
import { useAppDispatch } from '@/shared/hook/useAppDispatch';
import {
  Text, TextAlign, TextSize, TextTheme,
} from '@/shared/ui/Text/Text';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Icon } from '@/shared/ui/Icon/Icon';

import {
  getArticleDetailsIsLoading,
  getArticleDetailsData,
  getArticleDetailsError,
} from '../../model/selector/articleDetailsSelector';
import { fetchArticleById } from '../../model/service/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import {
  ArticleBlock, ArticleBlockType, ArticleCodeBlock, ArticleImageBlock, ArticleTextBlock,
} from '../../model/types';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleDetails.module.scss';

const renderBlock = (block: ArticleBlock) => ({
  [ArticleBlockType.TEXT]: <ArticleTextBlockComponent
    key={block.id}
    block={block as ArticleTextBlock}
    className={cls.block}
  />,
  [ArticleBlockType.IMAGE]: <ArticleImageBlockComponent
    key={block.id}
    block={block as ArticleImageBlock}
    className={cls.block}
  />,
  [ArticleBlockType.CODE]: <ArticleCodeBlockComponent
    key={block.id}
    block={block as ArticleCodeBlock}
    className={cls.block}
  />,
}[block.type]);

const initialReducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

interface Props {
  className?: string;
  articleId: string;
}

export const ArticleDetails: FC<Props> = memo(({ className, articleId }) => {
  const { t } = useTranslation('articleDetails');
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  useDynamicReducerLoad(initialReducers);

  useEffect(() => {
    if (PROJECT !== 'storybook') {
      dispatch(fetchArticleById(articleId));
    }
  }, [articleId]);

  if (isLoading) {
    return (
      <div className={classNames('', {}, [className, cls.loading])}>
        <Skeleton width={200} height={200} borderRadius="50%" className={cls.avatar} />
        <Skeleton width={300} height={30} className={cls.title} />
        <Skeleton width={600} height={24} className={cls.skeleton} />
        <Skeleton width="100%" height={500} className={cls.skeleton} />
        <Skeleton width="100%" height={200} className={cls.skeleton} />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames('', {}, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
          title={t('error.title')}
        />
      </div>
    );
  }

  return (
    <div className={className}>
      <div className={cls.avatarWrapper}>
        <Avatar src={article?.img || ''} size={200} className={cls.avatar} />
      </div>
      <Text
        title={article?.title}
        text={article?.subtitle}
        size={TextSize.LARGE}
        className={cls.title}
      />
      <div className={cls.articleInfo}>
        <Icon Svg={EyeIcon} className={cls.infoIcon} />
        <Text text={String(article?.views)} />
      </div>
      <div className={cls.articleInfo}>
        <Icon Svg={CalendarIcon} className={cls.infoIcon} />
        <Text text={article?.createdAt} />
      </div>
      {article?.blocks.map(renderBlock)}
    </div>
  );
});
