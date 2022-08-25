import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { CreateButton } from '../../components/buttons/createButton';
import { useCreateAbc } from '../abcs/routes/home/hooks/useCreateAbc';
import { ABCS, COPING_CARDS, DIALOGUE_CREATE, DIALOGUES, HOME_WORKS } from '../routes.const';
import { Container, ControlsContainer } from './Styles';

export const Home = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const { createAbc } = useCreateAbc();

  const abcClickHandler = () => history.push(ABCS);

  const createAbcHandler = () => createAbc();

  const createDialogueClickHandler = () => history.push(DIALOGUE_CREATE);

  const copingCardsClickHandler = () => history.push(COPING_CARDS);

  const dialogueClickHandler = () => history.push(DIALOGUES);

  const homeWorkClickHandler = () => history.push(HOME_WORKS);

  return (
    <Container>
      <ControlsContainer>
        <Button shape="round" onClick={abcClickHandler}>
          {t('menu.abc')}
        </Button>

        <CreateButton onClick={createAbcHandler} />
      </ControlsContainer>

      <ControlsContainer>
        <Button shape="round" onClick={dialogueClickHandler}>
          {t('menu.dialogues')}
        </Button>

        <CreateButton onClick={createDialogueClickHandler} />
      </ControlsContainer>

      <Button shape="round" onClick={homeWorkClickHandler}>
        {t('menu.homeWorks')}
      </Button>

      <Button shape="round" onClick={copingCardsClickHandler}>
        {t('menu.copingCards')}
      </Button>
    </Container>
  );
};
