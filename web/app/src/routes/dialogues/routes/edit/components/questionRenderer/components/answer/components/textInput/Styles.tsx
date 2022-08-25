import { Input as InputAntd } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Input = styled(InputAntd.TextArea)`
  border-radius: 12px;
  font-size: 16px;
`;

export const Text = styled.p`
  width: 100%;
  font-size: 16px;
  white-space: pre-line;
`;
