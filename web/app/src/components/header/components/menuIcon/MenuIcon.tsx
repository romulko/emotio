import { FC } from 'react';

import { Container, Line } from './Styles';

interface Props {
  onClick: () => void;
}

export const MenuIcon: FC<Props> = ({ onClick }) => (
  <Container onClick={onClick}>
    <Line />
    <Line />
    <Line />
  </Container>
);
