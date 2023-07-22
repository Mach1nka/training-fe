import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { AppLink, AppLinkUnderline } from '@/shared/ui/AppLink/AppLink';
import { getArticleDetailsData, getCanBeArticleEdited } from '@/entities/Article';

import cls from './ArticleDetailsPageHeader.module.scss';

interface Props {
  className?: string;
}

export const ArticleDetailsPageHeader: FC<Props> = memo(({ className }) => {
  const { t } = useTranslation('articleDetails');
  const canBeEdited = useSelector(getCanBeArticleEdited);
  const article = useSelector(getArticleDetailsData);

  return (
    <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
      <AppLink to={RoutePath.articles} underline={AppLinkUnderline.NONE}>
        <Button>{t('backToArticlesBtn')}</Button>
      </AppLink>
      {
        canBeEdited ? (
          <AppLink
            to={`${RoutePath.articleDetails}/${article?.id}/edit`}
            underline={AppLinkUnderline.NONE}
          >
            <Button>
              {t('editArticleBtn')}
            </Button>
          </AppLink>
        ) : null
      }
    </div>
  );
});
