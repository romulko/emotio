import { FC } from 'react';

import { Select } from './Styles';

interface Props {
  defaultValue: string;
  onChange: (value: any) => void;
}

export const LanguageSelect: FC<Props> = ({ defaultValue, onChange }) => (
  <Select defaultValue={defaultValue} onChange={onChange}>
    <Select.Option value="uk">Українська</Select.Option>
    <Select.Option value="ru">Русский</Select.Option>
  </Select>
);
