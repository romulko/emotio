import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const ContentContainer = styled.div<{ selected: boolean }>`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 10px;

  border: 1px solid #eaeaea;
  border-radius: 16px;

  ${({ selected }) => css`
    background-color: ${selected ? '#1890ff' : '#fff'};
    color: ${selected ? '#fff' : '#000'};
  `};

  transition: all 200ms;
  cursor: pointer;
`;
