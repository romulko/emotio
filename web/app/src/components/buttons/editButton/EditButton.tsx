import { FC } from 'react';

import { EditIcon } from './components/editIcon';
import { Container } from './Styles';

interface Props {
  onClick: () => void;
}

export const EditButton: FC<Props> = ({ onClick }) => (
  <Container type="dashed" shape="circle" onClick={onClick}>
    <EditIcon />
  </Container>
);
