import { memo, useCallback, useState } from 'react';
import type { FC } from 'react';

import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Flex } from '@/shared/ui/Flex/Flex';
import { Input } from '@/shared/ui/Input/Input';
import { Text } from '@/shared/ui/Text/Text';

interface Props {
  isOpen: boolean;
  title: string;
  placeholder: string;
  acceptBtnText: string;
  cancelBtnText: string;
  onAccept: (feedback: string) => void;
  onCancel: () => void;
}

const FeedbackDrawer: FC<Props> = memo(
  ({ isOpen, title, placeholder, acceptBtnText, cancelBtnText, onAccept, onCancel }) => {
    const [feedback, setFeedback] = useState('');

    const onFeedbackChange = useCallback((text: string) => {
      setFeedback(text);
    }, []);

    return (
      <Drawer isOpen={isOpen} onClose={onCancel}>
        <Flex direction="column" gap={32}>
          <Text title={title} />
          <Input
            value={feedback}
            placeholder={placeholder}
            onChange={onFeedbackChange}
            data-testid="Feedback.input"
          />
          <Flex justify="space-between">
            <Button onClick={() => onAccept(feedback)} data-testid="Feedback.accept">
              {acceptBtnText}
            </Button>
            <Button
              theme={ButtonTheme.OUTLINE_RED}
              onClick={onCancel}
              data-testid="Feedback.cancel"
            >
              {cancelBtnText}
            </Button>
          </Flex>
        </Flex>
      </Drawer>
    );
  },
);

export default FeedbackDrawer;
