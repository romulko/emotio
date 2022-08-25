import { LoadingOutlined } from '@ant-design/icons';

import { Container } from './Styles';

export const LoadingIcon = () => (
  <Container>
    <LoadingOutlined style={{ fontSize: 22 }} spin />
  </Container>
);
