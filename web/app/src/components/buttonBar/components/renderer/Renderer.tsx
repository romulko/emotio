import { FC } from 'react';

import { Container, ContentContainer } from './Styles';

interface Props {
  selected: boolean;
  onClick: () => void;
  rightContent?: any;
}

export const Renderer: FC<Props> = ({ selected, children, rightContent, onClick }) => {
  return (
    <Container>
      <ContentContainer onClick={onClick} selected={selected}>
        {children}
      </ContentContainer>

      {rightContent}
    </Container>
  );
};
