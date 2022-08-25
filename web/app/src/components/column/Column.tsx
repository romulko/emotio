import { FC } from 'react';

import { Container } from '../container';

export const Column: FC = ({ children, ...rest }) => (
  <Container direction="column" {...rest}>
    {children}
  </Container>
);
