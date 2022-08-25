import styled from 'styled-components';

export const Label = styled.p`
  display: inline-block;
  width: 110px;
  margin-right: 10px;
  font-size: 16px;
`;

export const ProfileImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.2));
`;
