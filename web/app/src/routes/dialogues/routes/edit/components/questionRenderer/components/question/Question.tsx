import { FC } from 'react';

import { Text } from '../../../../../../../../components/text';
import { useLoggedUser } from '../../../../../../../../data';
import { firstLatterToLowerCase } from '../../../../../../../../utils/string.utils';
import { Dialogue, Question as QuestionModel } from '../../../../../../data/useDialogue';
import { Person } from '../person';
import { Row } from './Styles';

interface Props {
  question: QuestionModel;
  dialogue: Dialogue;
}

export const Question: FC<Props> = ({ question, dialogue }) => {
  const { loggedUser } = useLoggedUser();

  if (!dialogue) {
    return <></>;
  }

  const { questions } = dialogue;
  const { text } = question;

  let questionText = text.includes('{userName}') ? text.replace('{userName}', loggedUser.name) : text;

  if (questions.length > 0 && questionText.includes('{belief}')) {
    let belief = firstLatterToLowerCase(questions[0].answer) || '';

    // remove dot at the end of the sentence
    belief = belief.charAt(belief.length - 1) === '.' ? belief.slice(0, belief.length - 1) : belief;

    questionText = questionText.replace('{belief}', belief);
  }

  return (
    <Row>
      <Person imgUrl="/dialogue/aaron-beck.png" name="Аарон" />

      <Text>{questionText}</Text>
    </Row>
  );
};
