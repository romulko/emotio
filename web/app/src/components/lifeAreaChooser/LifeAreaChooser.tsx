import { FC, useEffect, useState } from 'react';

// import { useLifeAreas } from '../../routes/abcs/data/useLifeAreas';
import { LifeArea } from '../../services/apollo/generated/graphql';
import { ButtonBar, Item } from '../buttonBar';
import { LoadingIcon } from '../icons/loadingIcon';

export type SelectedValue = string | string[];

interface Props {
  multiselect?: boolean;
  selectedValue: SelectedValue;
  onChange: (value: SelectedValue) => void;
  disabled?: boolean;
}

export const LifeAreaChooser: FC<Props> = ({ multiselect, selectedValue, onChange, disabled }) => {
  return <></>;

  // const [items, setItems] = useState<Item[]>([]);
  // const { lifeAreas, loading } = useLifeAreas();
  //
  // useEffect(() => {
  //   if (lifeAreas.length > 0) {
  //     const result = createItems(lifeAreas, selectedValue);
  //
  //     if (JSON.stringify(result) !== JSON.stringify(items)) {
  //       setItems(result);
  //     }
  //   }
  // }, [lifeAreas, selectedValue, items]);
  //
  // if (loading) {
  //   return <LoadingIcon />;
  // }
  //
  // const changeHandler = ({ _id, selected }: Item) => {
  //   if (disabled) {
  //     return;
  //   }
  //
  //   if (typeof selectedValue === 'string') {
  //     onChange(selected ? '' : _id);
  //   } else {
  //     const result = selected
  //       ? selectedValue.filter(value => value !== _id)
  //       : multiselect
  //       ? [...selectedValue, _id]
  //       : [_id];
  //
  //     onChange(result);
  //   }
  // };
  //
  // return <ButtonBar items={items} onChange={changeHandler} />;
};

const createItems = (lifeAreas: LifeArea[], selectedValue: Props['selectedValue']) =>
  lifeAreas.map(value => ({
    _id: value._id,
    text: value.text,
    selected: typeof selectedValue === 'string' ? value._id === selectedValue : selectedValue.includes(value._id),
  }));
