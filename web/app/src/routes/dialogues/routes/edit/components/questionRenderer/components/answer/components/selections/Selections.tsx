import { FC, useState } from 'react';

import { ButtonBar, Item } from '../../../../../../../../../../components/buttonBar';
import { AnswerComponentProps } from '../types';

export const Selections: FC<AnswerComponentProps> = ({ question: { selection, answer }, answerValueRef }) => {
  const [items, setItems] = useState<Item[]>(() => {
    const answerParsed = answerValueRef.current?.split(',') || [];

    return (
      selection?.items?.map(value => ({
        _id: value._id,
        text: value.text,
        model: value,
        selected: answerParsed.includes(value._id),
      })) || []
    );
  });

  if (!selection) {
    return <></>;
  }

  const { multiselect } = selection;

  const buttonBarChangeHandler = (item: Item) => {
    if (answer) {
      return;
    }

    const newItems = items.map(value => ({
      ...value,
      selected: item._id === value._id ? !value.selected : multiselect ? value.selected : false,
    }));

    setItems(newItems);
    answerValueRef.current = newItems
      .filter(value => value.selected)
      .map(value => value._id)
      .join(',');
  };

  return <ButtonBar items={items} onChange={buttonBarChangeHandler} />;
};
