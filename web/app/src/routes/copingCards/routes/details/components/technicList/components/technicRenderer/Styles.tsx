import { Button } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  border-radius: 12px;
  filter: drop-shadow(0 0 2px #92cd92);
  background-color: #fff;
  cursor: pointer;
  flex: none;
`;

export const TechnicName = styled.p`
  color: #008800;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const ActionContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const BeginButton = styled(Button)`
  width: 100%;
  margin-right: 20px;
`;
