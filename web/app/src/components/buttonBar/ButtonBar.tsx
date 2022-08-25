import { FC } from 'react';

import { Renderer } from './components/renderer';
import { Container } from './Styles';

export interface Item {
  _id: string;
  text: string;
  selected: boolean;
  model?: any;
}

interface Props {
  items: Item[];
  onChange: (item: Item) => void;
  rightComponent?: (item: Item) => any;
}

export const ButtonBar: FC<Props> = ({ items, onChange, rightComponent }) => (
  <Container>
    {items.map(value => (
      <Renderer
        key={value._id}
        selected={value.selected}
        onClick={() => onChange(value)}
        rightContent={rightComponent && rightComponent(value)}
      >
        {value.text}
      </Renderer>
    ))}
  </Container>
);
