import { FC } from 'react';

import { Container } from '../container';

export const Row: FC = ({ children, ...rest }) => (
  <Container direction="row" {...rest}>
    {children}
  </Container>
);
