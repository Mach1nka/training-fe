import {
  memo, useCallback,
  useEffect, useState,
} from 'react';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Card } from '@/shared/ui/Card/Card';
import { Flex } from '@/shared/ui/Flex/Flex';
import { Rating } from '@/shared/ui/Rating/Rating';
import { Text } from '@/shared/ui/Text/Text';
import { detectDevice } from '@/shared/lib/detectDevise/detectDevise';
import { getUserId } from '@/entities/User';

import { FeedbackDrawerMobile } from './Mobile/FeedbackDrawer.lazy';
import { FeedbackModalDesktop } from './Desktop/FeedbackModal.lazy';
import { useFetchArticleRatingQuery, useRateArticleMutation } from '../../model/api/articleRatingApi';

interface Props {
  className?: string;
  articleId: string;
}
// TODO: Refactor this component to reduce rating card rerendering.
const ArticleRatingSection: FC<Props> = memo(({ className, articleId }) => {
  const { t } = useTranslation('articleDetails');
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const userId = useSelector(getUserId) || '';
  const isMobile = detectDevice();
  const { data } = useFetchArticleRatingQuery({ articleId, userId });
  const [rateArticle] = useRateArticleMutation();

  const onRatingChange = useCallback((ratingValue: number) => {
    setRating(ratingValue);
    setIsFormOpen(true);
  }, []);

  const onFeedbackChange = useCallback((text: string) => {
    setFeedback(text);
  }, []);

  const rateArticleRequest = useCallback((ratingValue: number, feedback?: string) => {
    try {
      rateArticle({
        articleId, userId, rating: ratingValue, feedback,
      });
    } catch (e) {
      console.log(e);
    }
  }, [articleId, userId, rateArticle]);

  const onAccept = useCallback(() => {
    rateArticleRequest(rating, feedback);
    setIsFormOpen(false);
  }, [rating, feedback, rateArticleRequest]);

  const onCancel = useCallback(() => {
    rateArticleRequest(rating);
    setIsFormOpen(false);
  }, [rating, rateArticleRequest]);

  useEffect(() => {
    if (data?.[0]?.rating) {
      setRating(data[0].rating);
    }
  }, [data]);

  return (
    <>
      <Card className={className}>
        <Flex direction="column" align="center" gap={8}>
          <Text title={rating ? t('ratingSection.gratitude') : t('ratingSection.appeal')} />
          <Rating value={rating} size={40} onChange={onRatingChange} />
        </Flex>
      </Card>
      { isMobile ? (
        <FeedbackDrawerMobile
          isOpen={isFormOpen}
          feedback={feedback}
          onAccept={onAccept}
          onCancel={onCancel}
          onFeedbackChange={onFeedbackChange}
        />
      )
        : (
          <FeedbackModalDesktop
            isOpen={isFormOpen}
            feedback={feedback}
            onAccept={onAccept}
            onCancel={onCancel}
            onFeedbackChange={onFeedbackChange}
          />
        ) }
    </>
  );
});

export default ArticleRatingSection;
