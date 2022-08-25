import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PersonImg = styled.img`
  width: 50px;
  border-radius: 25px;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.1));
`;

export const PersonName = styled.p`
  font-size: 12px;
  color: #999;
  position: absolute;
  bottom: -20px;
`;
