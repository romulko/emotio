import { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { HOME } from '../../../../routes/routes.const';
import { Container, LogoImg, Text } from './Styled';

interface Props {
  allowGoToHome?: boolean;
  useImage?: boolean;
}

export const Logo: FC<Props> = ({ allowGoToHome = true, useImage }) => {
  const history = useHistory();

  const containerClickHandler = () => {
    if (allowGoToHome) {
      history.push(HOME);
    }
  };

  return (
    <Container onClick={containerClickHandler}>
      {useImage && <LogoImg src="/logo.png" />}

      <Text>Emotio</Text>
    </Container>
  );
};
