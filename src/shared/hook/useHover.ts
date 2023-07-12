import { useCallback, useMemo, useState } from 'react';

type UseHover = () => [boolean, { onMouseEnter: () => void, onMouseLeave: () => void}];

export const useHover: UseHover = () => {
  const [isHover, setHover] = useState(false);

  const onMouseEnter = useCallback(() => {
    setHover(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setHover(false);
  }, []);

  return useMemo(() => [isHover, { onMouseEnter, onMouseLeave }], [isHover]);
};
