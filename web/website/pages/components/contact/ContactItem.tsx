import { FC } from "react";
import styled from "styled-components";
import Image from "next/image";

interface ContactItemProps {
  imgSrc: string;
  text: string;
  href: string;
}

const ContactItem: FC<ContactItemProps> = ({ imgSrc, text, href }) => {
  const imageClickHandler = () => {
    window.open(href, "_blank");
  };

  return (
    <Img
      src={imgSrc}
      alt={text}
      width={30}
      height={30}
      onClick={imageClickHandler}
    />
  );
};

export default ContactItem;

// styled components

const Img = styled(Image)`
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.2));
`;
