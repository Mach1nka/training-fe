import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Select } from '@/shared/ui/Select/Select';

import { Currency } from '../../model/types';

interface Props {
  className?: string;
  readonly?: boolean;
  value?: Currency;
  onChange: (value: Currency) => void;
}

const options = Object.entries(Currency)
  .map((currency) => ({ label: currency[0], value: currency[1] }));

export const CurrencySelect: FC<Props> = memo(({
  className, value, readonly, onChange,
}) => {
  const { t } = useTranslation('profile');

  const onChangeSelect = useCallback((value:string) => {
    onChange(value as Currency);
  }, []);

  return (
    <Select
      value={value}
      label={t('currency')}
      options={options}
      readonly={readonly}
      className={className}
      onChange={onChangeSelect}
    />
  );
});
