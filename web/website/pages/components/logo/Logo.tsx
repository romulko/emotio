import styled from "styled-components";

const Logo = () => (
  <Container>
    <Text>Emotio</Text>
  </Container>
);

export default Logo;

const Container = styled.div`
  display: flex;
  gap: 20px;
`;

const Text = styled.p`
  font-size: 30px;
`;
