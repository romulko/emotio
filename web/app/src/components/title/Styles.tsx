import styled from 'styled-components';

import { Props } from './Title';

export const Text = styled.p<Props>`
  font-size: 24px;
  color: #333333;
  margin-bottom: ${({ useMarginBottom }) => (useMarginBottom ? 20 : 0)}px;
`;
