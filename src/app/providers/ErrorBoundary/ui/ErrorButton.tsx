/* eslint-disable i18next/no-literal-string */
import type { FC } from 'react';
import { useEffect, useState } from 'react';

import { Button } from '@/shared/ui/Button/Button';

interface Props {
  className?: string;
}

// NOTE: Testing component
export const ErrorButton: FC<Props> = () => {
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      throw new Error('Test Error Boundary');
    }
  }, [error]);

  return (
    <Button
      onClick={() => { setError(true); }}
    >
      Throw Error
    </Button>
  );
};
