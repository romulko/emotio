import { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { COPING_CARDS_DETAILS } from '../../../../../../../routes.const';
import { CopingCardText } from '../../../../../../components/copingCardText';
import { CopingCard } from '../../../../../../data/useCopingCards';
import { Container } from './Styles';

interface Props {
  copingCard: CopingCard;
}

export const CopingCardRenderer: FC<Props> = ({ copingCard }) => {
  const history = useHistory();

  const containerClickHandler = () => history.push(COPING_CARDS_DETAILS.replace(':copingCardId', copingCard._id));

  return (
    <Container onClick={containerClickHandler}>
      <CopingCardText copingCard={copingCard} />
    </Container>
  );
};
