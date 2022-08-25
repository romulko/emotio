import { FC } from 'react';

import { Text } from '../../../../components/text';
import { ContactImage, Contacts, Container, Content, Img } from './Styles';

interface Props {
  name: string;
  description: string;
  imgUrl: string;
  telegramUrl?: string;
  email?: string;
  facebookUrl?: string;
}

export const ContactItem: FC<Props> = ({ name, description, imgUrl, telegramUrl, email, facebookUrl }) => {
  const contactImageClickHandler = (url: string) => window.open(url, '_blank');

  return (
    <Container>
      <Img src={imgUrl} alt={name} />

      <Content>
        <Text size="h2">{name}</Text>

        <Text>{description}</Text>

        <Contacts>
          {telegramUrl && (
            <ContactImage
              src="/images/social/telegram.png"
              alt={telegramUrl}
              onClick={() => contactImageClickHandler(telegramUrl)}
            />
          )}

          {email && (
            <ContactImage
              src="/images/social/gmail.png"
              alt={email}
              onClick={() => contactImageClickHandler(`mailto:${email}`)}
            />
          )}

          {facebookUrl && (
            <ContactImage
              src="/images/social/facebook.png"
              alt={facebookUrl}
              onClick={() => contactImageClickHandler(facebookUrl)}
            />
          )}
        </Contacts>
      </Content>
    </Container>
  );
};
