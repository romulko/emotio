import { FC } from 'react';

import { CopingCard } from '../../../../data/useCopingCard';
import { TechnicRenderer } from './components/technicRenderer';
import { Container } from './Styles';

interface Props {
  technics: CopingCard['technics'];
}

export const TechnicList: FC<Props> = ({ technics }) => (
  <Container>
    {technics.map(value => (
      <TechnicRenderer key={value._id} technic={value} />
    ))}
  </Container>
);
