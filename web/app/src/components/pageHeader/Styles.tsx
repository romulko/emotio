import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const TitleWrapper = styled.div`
  flex-grow: 1;
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 14px;
`;

export const LeftContainer = styled(ActionsContainer)`
  margin-right: 10px;
`;
