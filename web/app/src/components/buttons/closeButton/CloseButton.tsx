import { FC } from 'react';

import { Container } from '../Styles';
import { CloseIcon } from './components/closeIcon';

interface Props {
  onClick: () => void;
}

export const CloseButton: FC<Props> = ({ onClick }) => (
  <Container onClick={onClick}>
    <CloseIcon />
  </Container>
);
