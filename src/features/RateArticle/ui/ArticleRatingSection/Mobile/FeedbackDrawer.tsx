import { memo } from 'react';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Flex } from '@/shared/ui/Flex/Flex';
import { Input } from '@/shared/ui/Input/Input';
import { Text } from '@/shared/ui/Text/Text';

interface Props {
  isOpen: boolean;
  feedback: string;
  onAccept: () => void;
  onCancel: () => void;
  onFeedbackChange: (text: string) => void;
}

const FeedbackDrawer: FC<Props> = memo(({
  isOpen,
  feedback,
  onAccept,
  onCancel,
  onFeedbackChange,
}) => {
  const { t } = useTranslation('articleDetails');

  return (
    <Drawer isOpen={isOpen} onClose={onCancel}>
      <Flex direction="column" gap={32}>
        <Text title={t('ratingSection.feedbackModalTitle')} />
        <Input
          value={feedback}
          placeholder={t('ratingSection.feedbackPlaceholder')}
          onChange={onFeedbackChange}
        />
        <Flex justify="space-between">
          <Button onClick={onAccept}>{t('ratingSection.sendBtn')}</Button>
          <Button
            theme={ButtonTheme.OUTLINE_RED}
            onClick={onCancel}
          >
            {t('ratingSection.cancelBtn')}
          </Button>
        </Flex>
      </Flex>
    </Drawer>
  );
});

export default FeedbackDrawer;
