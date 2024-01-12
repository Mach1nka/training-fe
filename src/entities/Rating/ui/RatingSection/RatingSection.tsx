import {
  memo, useCallback,
  useEffect, useState,
} from 'react';
import type { FC } from 'react';

import { Card } from '@/shared/ui/Card/Card';
import { Flex } from '@/shared/ui/Flex/Flex';
import { Rating } from '@/shared/ui/Rating/Rating';
import { Text } from '@/shared/ui/Text/Text';
import { detectDevice } from '@/shared/lib/detectDevise/detectDevise';

import { FeedbackDrawerMobile } from './Mobile/FeedbackDrawer.lazy';
import { FeedbackModalDesktop } from './Desktop/FeedbackModal.lazy';

interface Props {
  className?: string;
  ratingValue?: number;
  callToActionText: string;
  gratitudeText: string;
  feedbackPopupTitle: string;
  feedbackPlaceholderText: string;
  feedbackAcceptBtnText: string;
  feedbackCancelBtnText: string;
  onAccept: (rating: number, feedback: string) => void;
  onCancel: (rating: number) => void;
}

export const RatingSection: FC<Props> = memo(({
  className,
  ratingValue,
  gratitudeText,
  callToActionText,
  feedbackPopupTitle,
  feedbackPlaceholderText,
  feedbackAcceptBtnText,
  feedbackCancelBtnText,
  onAccept, onCancel,
}) => {
  const [rating, setRating] = useState(ratingValue || 0);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const isMobile = detectDevice();

  const onRatingChange = useCallback((ratingValue: number) => {
    setRating(ratingValue);
    setIsFormOpen(true);
  }, []);

  const onFeedbackAccept = useCallback((feedback: string) => {
    onAccept(rating, feedback);
    setIsFormOpen(false);
  }, [rating, onAccept]);

  const onFeedbackCancel = useCallback(() => {
    onCancel(rating);
    setIsFormOpen(false);
  }, [rating, onCancel]);

  useEffect(() => {
    if (ratingValue) {
      setRating(ratingValue);
    }
  }, [ratingValue]);

  return (
    <>
      <Card className={className}>
        <Flex direction="column" align="center" gap={8}>
          <Text title={rating ? gratitudeText : callToActionText} />
          <Rating value={rating} size={40} onChange={onRatingChange} />
        </Flex>
      </Card>
      { isMobile ? (
        <FeedbackDrawerMobile
          isOpen={isFormOpen}
          title={feedbackPopupTitle}
          placeholder={feedbackPlaceholderText}
          acceptBtnText={feedbackAcceptBtnText}
          cancelBtnText={feedbackCancelBtnText}
          onAccept={onFeedbackAccept}
          onCancel={onFeedbackCancel}
        />
      )
        : (
          <FeedbackModalDesktop
            isOpen={isFormOpen}
            title={feedbackPopupTitle}
            placeholder={feedbackPlaceholderText}
            acceptBtnText={feedbackAcceptBtnText}
            cancelBtnText={feedbackCancelBtnText}
            onAccept={onFeedbackAccept}
            onCancel={onFeedbackCancel}
          />
        ) }
    </>
  );
});
