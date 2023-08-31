import type { FC } from 'react';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import type { SelectOption } from '@/shared/ui/Select/Select';
import { Select } from '@/shared/ui/Select/Select';

import { Country } from '../../model/const';

interface Props {
  className?: string;
  readonly?: boolean;
  value?: Country;
  onChange: (value: Country) => void;
}

const options: SelectOption<Country>[] = Object.entries(Country)
  .map((country) => ({ label: country[0], value: country[1] }));

export const CountrySelect: FC<Props> = memo(({
  className, value, readonly, onChange,
}) => {
  const { t } = useTranslation('profile');

  const onChangeSelect = useCallback((value:string) => {
    onChange(value as Country);
  }, []);

  return (
    <Select
      value={value}
      defaultValue={Country.ARMENIA}
      placeholder={t('country')}
      options={options}
      readonly={readonly}
      className={className}
      onChange={onChangeSelect}
    />
  );
});
