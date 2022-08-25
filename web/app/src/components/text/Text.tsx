import { FC } from 'react';

import { Text as TextStyled } from './Styles';

export type Size = 'h1' | 'h2' | 'h3' | 'h4';
export type Color = 'normal' | 'gray' | 'superGray';

export interface Props {
  size?: Size;
  color?: Color;
  onClick?: () => void;
  useTruncate?: boolean;
}

export const Text: FC<Props> = ({ size = 'h3', color, useTruncate, onClick, children }) => (
  <TextStyled size={size} color={color} onClick={onClick} useTruncate={useTruncate}>
    {children}
  </TextStyled>
);
