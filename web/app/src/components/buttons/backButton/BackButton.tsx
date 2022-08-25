import { FC } from 'react';

import { Container, Link } from './Styles';

interface Props {
  to: string;
}

export const BackButton: FC<Props> = ({ to }) => (
  <Container type="dashed" shape="circle">
    <Link to={to}>{'<'}</Link>
  </Container>
);
