import styled from "styled-components";
import { FC } from "react";
import ContactItem from "./ContactItem";
import Image from "next/image";

interface Props {
  imgSrc: string;
  name: string;
  description: string;
}

const Contact: FC<Props> = ({ imgSrc, name, description }) => (
  <Container>
    <Img src={imgSrc} alt={name} width={120} height={120} />

    <Content>
      <Name>{name}</Name>

      <Description>{description}</Description>

      <ContactItemContainer>
        <ContactItem
          imgSrc="/social/telegram.png"
          text="@romanmalko"
          href="https://t.me/romanmalko"
        />

        <ContactItem
          imgSrc="/social/gmail.png"
          text="roman.malko@gmail.com"
          href="mailto:roman.malko@gmail.com"
        />

        <ContactItem
          imgSrc="/social/facebook.png"
          text="facebook.com/roma.malko"
          href="https://www.facebook.com/roma.malko"
        />
      </ContactItemContainer>
    </Content>
  </Container>
);

export default Contact;

// styled components

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Img = styled(Image)`
  border-radius: 100px;
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.2));
`;

const Name = styled.p`
  font-size: 18px;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

const ContactItemContainer = styled.div`
  display: flex;
  gap: 20px;
`;
