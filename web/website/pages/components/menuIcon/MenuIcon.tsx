import { FC } from "react";

import styled from "styled-components";

interface Props {
  onClick: () => void;
}

const MenuIcon: FC<Props> = ({ onClick }) => (
  <Container onClick={onClick}>
    <Line />
    <Line />
    <Line />
  </Container>
);

export default MenuIcon;

// styled components

const Container = styled.div`
  width: 25px;
  height: 25px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  left: 0;
`;

const Line = styled.div`
  height: 2px;
  background-color: #333;
`;
