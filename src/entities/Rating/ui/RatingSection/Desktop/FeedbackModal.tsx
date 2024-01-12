import { memo, useCallback, useState } from 'react';
import type { FC } from 'react';

import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Flex } from '@/shared/ui/Flex/Flex';
import { Input } from '@/shared/ui/Input/Input';
import { Modal } from '@/shared/ui/Modal/Modal';
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

const FeedbackModal: FC<Props> = memo(({
  isOpen,
  title,
  placeholder,
  acceptBtnText,
  cancelBtnText,
  onAccept,
  onCancel,
}) => {
  const [feedback, setFeedback] = useState('');

  const onFeedbackChange = useCallback((text: string) => {
    setFeedback(text);
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={onCancel}>
      <Flex direction="column" gap={32}>
        <Text title={title} />
        <Input
          value={feedback}
          placeholder={placeholder}
          onChange={onFeedbackChange}
        />
        <Flex justify="space-between">
          <Button onClick={() => onAccept(feedback)}>{acceptBtnText}</Button>
          <Button
            theme={ButtonTheme.OUTLINE_RED}
            onClick={onCancel}
          >
            {cancelBtnText}
          </Button>
        </Flex>
      </Flex>
    </Modal>
  );
});

export default FeedbackModal;
