import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { DeleteButton } from '../../../../components/buttons/deleteButton';
import { OptionButton } from '../../../../components/buttons/optionButton';
import { LoadingIndicator } from '../../../../components/loadingIndicator';
import { ModalContainer } from '../../../../components/modalContainer';
import { NotFound } from '../../../../components/notFound';
import { useHideHeader } from '../../../../hooks/useHideHeader';
import { HOME_WORKS } from '../../../routes.const';
import { useHomeWork } from '../../data/useHomeWork';
import { useHomeWorkMutations } from '../../data/useHomeWorkMutations';
import { Container, OptionContainer } from './Styles';

export const Details = () => {
  const history = useHistory();
  const [optionVisible, setOptionVisible] = useState(false);

  useHideHeader();

  const { homeWork, loaded } = useHomeWork();
  const { homeWorkDelete } = useHomeWorkMutations();

  if (!loaded) {
    return (
      <ModalContainer>
        <LoadingIndicator />
      </ModalContainer>
    );
  }

  if (!homeWork) {
    return (
      <ModalContainer>
        <NotFound />
      </ModalContainer>
    );
  }

  const { _id, whatToDo, whatWeGet } = homeWork;

  const deleteDialogueClickHandler = () => {
    homeWorkDelete(_id, true);

    history.replace(HOME_WORKS);
  };

  return (
    <ModalContainer rightComponents={<OptionButton onClick={() => setOptionVisible(!optionVisible)} />}>
      {optionVisible && (
        <OptionContainer>
          <DeleteButton onClick={deleteDialogueClickHandler} />
        </OptionContainer>
      )}

      <Container>
        {whatToDo} {whatWeGet}
      </Container>
    </ModalContainer>
  );
};
