import styled, { css } from 'styled-components';

import { Color, Props, Size } from './Text';

const sizeToFontSize: { [key in Size]: number } = {
  h1: 24,
  h2: 18,
  h3: 16,
  h4: 12,
};

const colorToColor: { [key in Color]: string } = {
  normal: '#333',
  gray: '#333',
  superGray: '#C7C7C7',
};

export const Text = styled.p<Props>`
  ${({ size, color }) => css`
    font-size: ${sizeToFontSize[size || 'h2']}px;
    color: ${colorToColor[color || 'normal']};
  `}

  ${({ useTruncate }) =>
    useTruncate
      ? css`
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        `
      : css`
          white-space: pre-wrap;
        `}
`;
