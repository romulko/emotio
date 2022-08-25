import { FC, useEffect, useState } from 'react';

import { Emotion } from '../../services/apollo/generated/graphql';
import { ButtonBar, Item } from '../buttonBar';
import { LoadingIcon } from '../icons/loadingIcon';
import { useEmotions } from './data/useEmotions';

export type SelectedValue = string | string[];

interface Props {
  multiselect?: boolean;
  selectedValue: SelectedValue;
  onChange: (value: SelectedValue) => void;
  disabled?: boolean;
}

export const EmotionChooser: FC<Props> = ({ multiselect, selectedValue, onChange, disabled }) => {
  const [items, setItems] = useState<Item[]>([]);
  const { emotions, loading } = useEmotions();

  useEffect(() => {
    if (emotions.length > 0) {
      const result = createItems(emotions, selectedValue);

      if (JSON.stringify(result) !== JSON.stringify(items)) {
        setItems(result);
      }
    }
  }, [emotions, selectedValue, items]);

  if (loading) {
    return <LoadingIcon />;
  }

  const changeHandler = ({ _id, selected }: Item) => {
    if (disabled) {
      return;
    }

    if (typeof selectedValue === 'string') {
      onChange(selected ? '' : _id);
    } else {
      const result = selected
        ? selectedValue.filter(value => value !== _id)
        : multiselect
        ? [...selectedValue, _id]
        : [_id];

      onChange(result);
    }
  };

  return <ButtonBar items={items} onChange={changeHandler} />;
};

const BASE_EMOTIONS_ID: string[] = ['1', '2', '3', '4', '5', '6', '22', '42', '14', '512', '51', '27', '15'];

const createItems = (emotions: Emotion[], selectedValue: Props['selectedValue']) =>
  emotions
    .filter(value => BASE_EMOTIONS_ID.includes(value._id))
    .map(emotion => ({
      _id: emotion._id,
      text: emotion.text,
      selected: typeof selectedValue === 'string' ? emotion._id === selectedValue : selectedValue.includes(emotion._id),
    }));
