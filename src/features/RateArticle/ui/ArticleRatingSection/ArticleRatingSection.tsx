import { memo, useCallback } from 'react';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { RatingSection } from '@/entities/Rating';
import { getUserId } from '@/entities/User';

import { useFetchArticleRatingQuery, useRateArticleMutation } from '../../model/api/articleRatingApi';

interface Props {
  className?: string;
  articleId: string;
}

const ArticleRatingSection: FC<Props> = memo(({ className, articleId }) => {
  const { t } = useTranslation('articleDetails');
  const userId = useSelector(getUserId) || '';
  const { data } = useFetchArticleRatingQuery({ articleId, userId });
  const [rateArticle] = useRateArticleMutation();

  const rateArticleRequest = useCallback((ratingValue: number, feedback?: string) => {
    try {
      rateArticle({
        articleId, userId, rating: ratingValue, feedback,
      });
    } catch (e) {
      console.log(e);
    }
  }, [articleId, userId, rateArticle]);

  const onAccept = useCallback((rating: number, feedback: string) => {
    rateArticleRequest(rating, feedback);
  }, [rateArticleRequest]);

  const onCancel = useCallback((rating: number) => {
    rateArticleRequest(rating);
  }, [rateArticleRequest]);

  return (
    <RatingSection
      className={className}
      ratingValue={data?.[0]?.rating}
      callToActionText={t('ratingSection.appeal')}
      gratitudeText={t('ratingSection.gratitude')}
      feedbackPopupTitle={t('ratingSection.feedbackPopupTitle')}
      feedbackPlaceholderText={t('ratingSection.feedbackPlaceholder')}
      feedbackAcceptBtnText={t('ratingSection.acceptBtn')}
      feedbackCancelBtnText={t('ratingSection.cancelBtn')}
      onAccept={onAccept}
      onCancel={onCancel}
    />
  );
});

export default ArticleRatingSection;
