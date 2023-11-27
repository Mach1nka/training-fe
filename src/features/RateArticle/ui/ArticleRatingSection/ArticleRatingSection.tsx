import { memo, useCallback, useState } from 'react';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Card } from '@/shared/ui/Card/Card';
import { Flex } from '@/shared/ui/Flex/Flex';
import { Rating } from '@/shared/ui/Rating/Rating';
import { Text } from '@/shared/ui/Text/Text';
import { detectDevice } from '@/shared/lib/detectDevise/detectDevise';

import { FeedbackDrawerMobile } from './Mobile/FeedbackDrawer.lazy';
import { FeedbackModalDesktop } from './Desktop/FeedbackModal.lazy';

interface Props {
  className?: string;
}

export const ArticleRatingSection: FC<Props> = memo(({ className }) => {
  const { t } = useTranslation('articleDetails');
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const isMobile = detectDevice();

  const onRatingChange = useCallback((rating: number) => {
    setRating(rating);
    setIsFormOpen(true);
  }, []);

  const onFeedbackChange = useCallback((text: string) => {
    setFeedback(text);
  }, []);

  const onAccept = useCallback(() => {
    // NOTE: Make server request.
    setIsFormOpen(false);
  }, []);

  const onCancel = useCallback(() => {
    setIsFormOpen(false);
  }, []);

  return (
    <>
      <Card className={className}>
        <Flex direction="column" align="center" gap={8}>
          <Text title={t('ratingSection.title')} />
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
