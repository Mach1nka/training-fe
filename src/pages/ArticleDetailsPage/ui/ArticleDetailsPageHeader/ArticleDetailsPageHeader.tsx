import type { FC } from 'react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { RoutePath } from '@/shared/constant/router';
import { AppLink, AppLinkUnderline } from '@/shared/ui/AppLink/AppLink';
import { Flex } from '@/shared/ui/Flex/Flex';
import { getArticleDetailsData, getCanBeArticleEdited } from '@/entities/Article';

interface Props {
  className?: string;
}

export const ArticleDetailsPageHeader: FC<Props> = memo(({ className }) => {
  const { t } = useTranslation('articleDetails');
  const canBeEdited = useSelector(getCanBeArticleEdited);
  const article = useSelector(getArticleDetailsData);

  return (
    <Flex align="center" justify="space-between" className={classNames('', {}, [className])}>
      <AppLink to={RoutePath.articles()} underline={AppLinkUnderline.NEVER}>
        <Button>{t('backToArticlesBtn')}</Button>
      </AppLink>
      {
        canBeEdited ? (
          <AppLink
            to={RoutePath.articleDetails(article?.id ?? '')}
            underline={AppLinkUnderline.NEVER}
          >
            <Button>
              {t('editArticleBtn')}
            </Button>
          </AppLink>
        ) : null
      }
    </Flex>
  );
});
