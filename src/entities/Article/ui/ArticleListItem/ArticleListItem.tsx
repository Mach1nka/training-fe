import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import { Card } from '@/shared/ui/Card/Card';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Button } from '@/shared/ui/Button/Button';
import { AppLink, AppLinkUnderline } from '@/shared/ui/AppLink/AppLink';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import DefaultAvatar from '@/shared/assets/icons/avatar-default.png';

import {
  Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types';
import cls from './ArticleListItem.module.scss';

interface Props {
  className?: string;
  article: Article;
  view: ArticleView
}

export const ArticleListItem: FC<Props> = memo(({ className, article, view }) => {
  const { t } = useTranslation('articles');

  const articleTypes = <Text text={article.type.join(', ')} className={cls.type} />;
  const views = (
    <>
      <Text text={article.views.toString()} className={cls.views} />
      <Icon Svg={EyeIcon} />
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
          <AppLink to={`/article/${article.id}`} underline={AppLinkUnderline.NONE}>
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
    <AppLink to={`/article/${article.id}`} underline={AppLinkUnderline.NONE}>
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