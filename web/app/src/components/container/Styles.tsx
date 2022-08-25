import styled, { css } from 'styled-components';

import { Props } from './Container';

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ direction, gap }) => css`
    flex-direction: ${direction};
    gap: ${gap}px;
  `};
`;
