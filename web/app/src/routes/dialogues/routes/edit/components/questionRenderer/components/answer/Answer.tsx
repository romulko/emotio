import { FC, MutableRefObject } from 'react';

import { Row } from '../../../../../../../../components/row';
import { Text } from '../../../../../../../../components/text';
import { useLoggedUser } from '../../../../../../../../data';
import { QuestionType } from '../../../../../../data/enums';
import { Dialogue, Question as QuestionModel } from '../../../../../../data/useDialogue';
import { Person } from '../person';
import { Selections } from './components/selections';
import { TextInput } from './components/textInput';

interface Props {
  dialogue: Dialogue;
  question: QuestionModel;
  answerValueRef: MutableRefObject<string | null>;
}

export const Answer: FC<Props> = ({ dialogue, question, answerValueRef }) => {
  const { loggedUser } = useLoggedUser();

  if (!dialogue) {
    return <></>;
  }

  const getElement = () => {
    const { questionType } = question;

    if (questionType === QuestionType.FINISH) {
      return <Text>Спасибо, Аарон.</Text>;
    }

    if (questionType === QuestionType.INPUT) {
      return <TextInput question={question} answerValueRef={answerValueRef} />;
    }

    if (questionType === QuestionType.SELECTIONS) {
      return <Selections question={question} answerValueRef={answerValueRef} />;
    }

    return <>Not implemented yet</>;
  };

  return (
    <Row>
      <Person imgUrl={loggedUser.photo || ''} name={loggedUser.name || ''} />

      {getElement()}
    </Row>
  );
};
