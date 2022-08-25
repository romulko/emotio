import styled from "styled-components";

const Menu = () => (
  <Container>
    <Item href="#whatIGet">Что я получу?</Item>
    <Item href="#howItWork">Как это работает?</Item>
    <Item href="#forWhom">Для кого проект?</Item>
    <Item href="#contacts">Контакты</Item>
  </Container>
);

export default Menu;

// styled components

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
  margin: 20px -20px;
  background-color: #f1f1f1;
  border-radius: 12px;
`;

const Item = styled.a`
  font-size: 20px;
  font-weight: lighter;
`;
