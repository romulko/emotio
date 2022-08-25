import { FC } from 'react';

import { Container, PersonImg, PersonName } from './Styles';

interface Props {
  imgUrl: string;
  name: string;
}

export const Person: FC<Props> = ({ imgUrl, name }) => (
  <Container>
    <PersonImg src={imgUrl} />
    <PersonName>{name}</PersonName>
  </Container>
);
