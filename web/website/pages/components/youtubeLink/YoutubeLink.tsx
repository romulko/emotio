import { FC } from "react";
import styled from "styled-components";
import Image from "next/image";

interface Props {
  text: string;
  href: string;
}

const YoutubeLink: FC<Props> = ({ href, text }) => (
  <Container href={href} target="_blank" rel="noreferrer">
    <ImageWrapper>
      <Image src="/youtube.png" alt={text} width={98} height={54} />
    </ImageWrapper>

    {text}
  </Container>
);

export default YoutubeLink;

const Container = styled.a`
  display: flex;
  align-items: center;
  gap: 20px;
  text-decoration: underline;
`;

const ImageWrapper = styled.div`
  flex-shrink: 0;
`;
