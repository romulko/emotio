import { FC, useRef } from 'react';

import { Dialogue, Question as QuestionModel } from '../../../../data/useDialogue';
import { Answer } from './components/answer';
import { Buttons } from './components/buttons';
import { Question } from './components/question';
import { Col, Container } from './Styles';

interface Props {
  dialogue: Dialogue;
  question: QuestionModel;
}

export const QuestionRenderer: FC<Props> = ({ dialogue, question }) => {
  const answerValueRef = useRef<string | null>(question?.answer || null);

  if (!dialogue) {
    return <></>;
  }

  const { answer } = question;

  return (
    <Container>
      <Col>
        <Question dialogue={dialogue} question={question} />

        <Answer dialogue={dialogue} question={question} answerValueRef={answerValueRef} />
      </Col>

      {!answer && <Buttons dialogue={dialogue} question={question} answerValueRef={answerValueRef} />}
    </Container>
  );
};
