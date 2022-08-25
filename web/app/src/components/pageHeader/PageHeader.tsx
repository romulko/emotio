import { FC } from 'react';

import { Title } from '../title';
import { ActionsContainer, Container, LeftContainer, TitleWrapper } from './Styles';

interface Props {
  title?: string;
  leftComponents?: any;
  rightComponents?: any;
}

export const PageHeader: FC<Props> = ({ title, leftComponents, rightComponents }) => (
  <Container>
    {leftComponents && <LeftContainer>{leftComponents}</LeftContainer>}

    <TitleWrapper>{title && <Title useMarginBottom={false}>{title}</Title>}</TitleWrapper>

    {rightComponents && <ActionsContainer>{rightComponents}</ActionsContainer>}
  </Container>
);
