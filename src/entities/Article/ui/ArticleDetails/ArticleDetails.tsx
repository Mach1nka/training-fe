import type { FC } from 'react';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import type { ReducersList } from '@/shared/hook/useDynamicReducerLoad';
import { useDynamicReducerLoad } from '@/shared/hook/useDynamicReducerLoad';
import { useAppDispatch } from '@/shared/hook/useAppDispatch';
import {
  Text, TextAlign, TextSize, TextTheme,
} from '@/shared/ui/Text/Text';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Icon } from '@/shared/ui/Icon/Icon';
import { thunkMiddleware } from '@/shared/lib/redux/thunkMiddleware';
import { Flex } from '@/shared/ui/Flex/Flex';

import {
  getArticleDetailsIsLoading,
  getArticleDetailsData,
  getArticleDetailsError,
} from '../../model/selector/articleDetailsSelector';
import { fetchArticleById } from '../../model/service/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import type {
  ArticleBlock, ArticleCodeBlock, ArticleImageBlock, ArticleTextBlock,
} from '../../model/types';
import { ArticleBlockType } from '../../model/const';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import cls from './ArticleDetails.module.scss';

const renderBlock = (block: ArticleBlock) => ({
  [ArticleBlockType.TEXT]: <ArticleTextBlockComponent
    key={block.id}
    block={block as ArticleTextBlock}
  />,
  [ArticleBlockType.IMAGE]: <ArticleImageBlockComponent
    key={block.id}
    block={block as ArticleImageBlock}
  />,
  [ArticleBlockType.CODE]: <ArticleCodeBlockComponent
    key={block.id}
    block={block as ArticleCodeBlock}
  />,
}[block.type]);

const initialReducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

interface Props {
  articleId: string;
}

export const ArticleDetails: FC<Props> = memo(({ articleId }) => {
  const { t } = useTranslation('articleDetails');
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  useDynamicReducerLoad(initialReducers);

  useEffect(() => {
    thunkMiddleware(() => dispatch(fetchArticleById(articleId)));
  }, [articleId]);

  if (isLoading) {
    return (
      <Flex gap={16} direction="column">
        <Skeleton width={200} height={200} borderRadius="50%" className={cls.avatar} />
        <Skeleton width={300} height={30} />
        <Skeleton width={600} height={24} />
        <Skeleton width="100%" height={500} />
        <Skeleton width="100%" height={200} />
      </Flex>
    );
  }

  if (error) {
    return (
      <Text
        theme={TextTheme.ERROR}
        align={TextAlign.CENTER}
        title={t('error.title')}
      />
    );
  }

  return (
    <Flex gap={16} direction="column">
      <Avatar src={article?.img || ''} size={200} className={cls.avatar} />
      <Flex direction="column">
        <Text
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.LARGE}
        />
        <Flex gap={8} align="center">
          <Icon Svg={EyeIcon} className={cls.infoIcon} />
          <Text text={String(article?.views)} />
        </Flex>
        <Flex gap={8} align="center">
          <Icon Svg={CalendarIcon} className={cls.infoIcon} />
          <Text text={article?.createdAt} />
        </Flex>
      </Flex>
      {article?.blocks.map(renderBlock)}
    </Flex>
  );
});
