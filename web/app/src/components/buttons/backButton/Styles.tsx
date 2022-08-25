import { Button } from 'antd';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Link = styled(RouterLink)`
  font-size: 16px;
  color: #666;
`;
