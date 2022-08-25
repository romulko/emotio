import { FC } from 'react';

import { Container } from '../Styles';
import { Props } from '../types';
import { OptionIcon } from './components/optionIcon';

export const OptionButton: FC<Props> = ({ onClick }) => (
  <Container onClick={onClick}>
    <OptionIcon />
  </Container>
);
