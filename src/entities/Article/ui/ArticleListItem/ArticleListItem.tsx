import type { HTMLAttributeAnchorTarget, FC } from 'react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import { Card } from '@/shared/ui/Card/Card';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Button } from '@/shared/ui/Button/Button';
import { AppLink, AppLinkUnderline } from '@/shared/ui/AppLink/AppLink';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import DefaultAvatar from '@/shared/assets/icons/avatar-default.png';
import { RoutePath } from '@/shared/constant/router';

import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import type { Article, ArticleTextBlock } from '../../model/types';
import { ArticleBlockType, ArticleView } from '../../model/const';

import cls from './ArticleListItem.module.scss';

interface Props {
  className?: string;
  target?: HTMLAttributeAnchorTarget;
  article: Article;
  view: ArticleView;
}

export const ArticleListItem: FC<Props> = memo(({
  className, article, view, target,
}) => {
  const { t } = useTranslation('articles');

  const articleTypes = <Text text={article.type.join(', ')} className={cls.type} />;
  const views = (
    <>
      <Text text={article.views.toString()} className={cls.views} />
      <Icon theme="secondary" Svg={EyeIcon} />
    </>
  );

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;

    return (
      <Card className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <div className={cls.header}>
          <Avatar src={article.user.avatar || DefaultAvatar} size={30} />
          <Text text={article.user.username} className={cls.username} />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <Text title={article.title} className={cls.title} />
        {articleTypes}
        <img src={article.img} alt={article.title} className={cls.img} />
        {textBlock ? <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} /> : null}
        <div className={cls.footer}>
          <AppLink
            target={target}
            to={RoutePath.articleDetails(article.id)}
            underline={AppLinkUnderline.NEVER}
          >
            <Button>
              {t('readMoreBtn')}
            </Button>
          </AppLink>
          {views}
        </div>
      </Card>
    );
  }

  return (
    <AppLink
      target={target}
      to={RoutePath.articleDetails(article.id)}
      underline={AppLinkUnderline.NEVER}
    >
      <Card className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <div className={cls.imageWrapper}>
          <img src={article.img} alt={article.title} className={cls.img} />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {articleTypes}
          {views}
        </div>
        <Text text={article.title} className={cls.title} />
      </Card>
    </AppLink>
  );
});
