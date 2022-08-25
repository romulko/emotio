import { FC } from 'react';

import { Container } from '../Styles';
import { SaveIcon } from './components/saveIcon';

interface Props {
  onClick: () => void;
}

export const SaveButton: FC<Props> = ({ onClick }) => (
  <Container onClick={onClick}>
    <SaveIcon />
  </Container>
);
