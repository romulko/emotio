import { Button } from 'antd';
import { FC, MutableRefObject } from 'react';
import { useHistory } from 'react-router-dom';

import { QuestionType } from '../../../../../../data/enums';
import { Dialogue, Question as QuestionModel } from '../../../../../../data/useDialogue';
import { useDialogueMutations } from '../../../../../../data/useDialogueMutations';
import { Container } from './Styles';

interface Props {
  dialogue: Dialogue;
  question: QuestionModel;
  answerValueRef: MutableRefObject<string | null>;
}

export const Buttons: FC<Props> = ({ dialogue, question: { _id, questionType }, answerValueRef }) => {
  const history = useHistory();
  const { dialogueAnswer, dialogueAnswerLoading } = useDialogueMutations();

  if (!dialogue) {
    return <></>;
  }

  const getButton = () => {
    if (questionType === QuestionType.FINISH) {
      const finishClickHandler = () => history.goBack();

      return (
        <Button type="primary" shape="round" onClick={finishClickHandler}>
          Готово
        </Button>
      );
    }

    const answerClickHandler = () => {
      if (!answerValueRef.current) {
        return;
      }

      dialogueAnswer({ questionId: _id, answer: answerValueRef.current });
    };

    return (
      <Button type="primary" shape="round" onClick={answerClickHandler} disabled={dialogueAnswerLoading}>
        Аарон, я ответил
      </Button>
    );
  };

  return <Container>{getButton()}</Container>;
};
