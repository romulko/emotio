import { FC } from 'react';

import { Container as ContainerStyled } from './Styles';

export interface Props {
  direction?: 'column' | 'row';
  gap?: number;
}

export const Container: FC<Props> = ({ direction, gap = 10, children }) => (
  <ContainerStyled direction={direction} gap={gap}>
    {children}
  </ContainerStyled>
);
