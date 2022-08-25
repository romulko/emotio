import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { EditButton } from '../../../../../../../../components/buttons/editButton';
import { Text } from '../../../../../../../../components/text';
import { COPING_CARDS_TECHNIC_BEGIN, COPING_CARDS_TECHNIC_EDIT } from '../../../../../../../routes.const';
import { CopingCardTechnic } from '../../../../../../data/useCopingCard';
import { useCopingCardUrlParams } from '../../../../../../data/useCopingCardUrlParams';
import { useDoingMutations } from '../../../../../../data/useDoingMutations';
import { ActionContainer, BeginButton, Container, TechnicName } from './Styles';

interface Props {
  technic: CopingCardTechnic;
  useControls?: boolean;
}

export const TechnicRenderer: FC<Props> = ({ technic, useControls = true }) => {
  const { t } = useTranslation();
  const history = useHistory();
  const { injectParams } = useCopingCardUrlParams();
  const { createDoing } = useDoingMutations();

  const startClickHandler = () =>
    createDoing({ technicId: technic._id })
      .then(value => value.data?.copingCardTechnicDoingCreate)
      .then(
        doing =>
          doing &&
          history.push(
            injectParams(COPING_CARDS_TECHNIC_BEGIN, [
              { name: ':technicId', value: technic._id },
              { name: ':doingId', value: doing._id },
            ]),
          ),
      );

  const editClickHandler = () =>
    history.push(injectParams(COPING_CARDS_TECHNIC_EDIT, [{ name: ':technicId', value: technic._id }]));

  return (
    <Container>
      <TechnicName>{technic.technicName}</TechnicName>

      <Text color="superGray">{t('routes.copingCards.routes.technic.routes.edit.description')}</Text>
      <Text>{technic.description}</Text>

      <br />

      <Text color="superGray">{t('routes.copingCards.routes.technic.routes.edit.howToDescription')}</Text>
      <Text>{technic.howToDescription}</Text>

      {useControls && (
        <ActionContainer>
          <BeginButton onClick={startClickHandler} shape="round" type="primary">
            {t('routes.copingCards.technicRenderer.startButton')}
          </BeginButton>

          <EditButton onClick={editClickHandler} />
        </ActionContainer>
      )}
    </Container>
  );
};
