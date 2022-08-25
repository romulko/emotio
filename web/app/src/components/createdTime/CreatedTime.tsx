import { FC } from 'react';

import { formatIdToDateTime } from '../../utils/date.utils';
import { Text } from '../text';

interface Props {
  id: string;
}

export const CreatedTime: FC<Props> = ({ id }) => (
  <Text size="h4" color="superGray">
    {formatIdToDateTime(id)}
  </Text>
);
