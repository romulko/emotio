import { FC } from 'react';

import { Text } from './Styles';

export interface Props {
  useMarginBottom?: boolean;
}

export const Title: FC<Props> = ({ useMarginBottom = true, children }) => (
  <Text useMarginBottom={useMarginBottom}>{children}</Text>
);
