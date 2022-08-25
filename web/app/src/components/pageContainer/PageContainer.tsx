import { FC } from 'react';

import { Container as ContainerStyled } from './Styles';

export const PageContainer: FC = ({ children }) => <ContainerStyled>{children}</ContainerStyled>;
