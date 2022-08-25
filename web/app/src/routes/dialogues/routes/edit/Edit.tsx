import { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { DeleteButton } from '../../../../components/buttons/deleteButton';
import { OptionButton } from '../../../../components/buttons/optionButton';
import { LoadingIndicator } from '../../../../components/loadingIndicator';
import { ModalContainer } from '../../../../components/modalContainer';
import { NotFound } from '../../../../components/notFound';
import { useHideHeader } from '../../../../hooks/useHideHeader';
import { useDialogue } from '../../data/useDialogue';
import { useDialogueMutations } from '../../data/useDialogueMutations';
import { QuestionRenderer } from './components/questionRenderer';
import { useMoveToLastQuestion } from './hooks/useMoveToLastQuestion';
import { Container, OptionContainer } from './Styles';

export const Edit = () => {
  const history = useHistory();
  const [optionVisible, setOptionVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useHideHeader();
  useMoveToLastQuestion(ref);

  const { dialogue, loaded } = useDialogue();
  const { dialogueDelete } = useDialogueMutations();

  if (!loaded) {
    return (
      <ModalContainer>
        <LoadingIndicator />
      </ModalContainer>
    );
  }

  if (!dialogue) {
    return (
      <ModalContainer>
        <NotFound />
      </ModalContainer>
    );
  }

  const { questions } = dialogue;

  const modalCloseHandler = () => {
    if (dialogue.questions[0].answer) {
      return;
    }

    dialogueDelete(dialogue._id);
  };

  const deleteDialogueClickHandler = () => {
    dialogueDelete(dialogue._id, true);

    history.goBack();
  };

  return (
    <ModalContainer
      onCloseClick={modalCloseHandler}
      rightComponents={<OptionButton onClick={() => setOptionVisible(!optionVisible)} />}
    >
      {optionVisible && (
        <OptionContainer>
          <DeleteButton onClick={deleteDialogueClickHandler} />
        </OptionContainer>
      )}

      <Container ref={instance => (ref.current = instance)}>
        {questions.map(value => (
          <QuestionRenderer key={value._id} dialogue={dialogue} question={value} />
        ))}
      </Container>
    </ModalContainer>
  );
};
