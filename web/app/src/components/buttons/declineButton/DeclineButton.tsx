import { FC } from 'react';

import { Container } from '../Styles';
import { Props } from '../types';
import { DeclineIcon } from './components/declineIcon';

export const DeclineButton: FC<Props> = ({ onClick }) => (
  <Container onClick={onClick}>
    <DeclineIcon />
  </Container>
);
