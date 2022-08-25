import { Badge } from 'antd';
import { FC } from 'react';

import { FilterIcon } from './components/filterIcon';
import { Container } from './Styles';

interface Props {
  onClick: () => void;
  badgeCount?: number;
}

export const FilterButton: FC<Props> = ({ onClick, badgeCount }) => (
  <Container onClick={onClick}>
    <Badge count={badgeCount}>
      <FilterIcon />
    </Badge>
  </Container>
);
