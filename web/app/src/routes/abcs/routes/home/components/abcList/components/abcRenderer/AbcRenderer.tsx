import { FC } from 'react';

import { CreatedTime } from '../../../../../../../../components/createdTime';
import { ClockIcon } from '../../../../../../../../components/icons/clockIcon';
import { Text } from '../../../../../../../../components/text';
import { last } from '../../../../../../../../utils/array.utils';
import { QuestionType } from '../../../../../../../dialogues/data/enums';
import { Dialogue } from '../../../../../../../dialogues/data/useDialogues';
import { useGoToDetails } from './hooks/useGoToDetails';
import { Container, HeaderContainer } from './Styles';

interface Props {
  dialogue: Dialogue;
}

export const AbcRenderer: FC<Props> = ({ dialogue }) => {
  const { goToDetails } = useGoToDetails();

  const containerClickHandler = () => goToDetails(dialogue._id);

  const getEmotions = () => {
    const question = dialogue.questions[0];

    if (!question.answer || !question.selection) {
      return '';
    }

    const answer = question.answer?.split(',');

    const emotions = question.selection.items.filter(({ _id }) => answer.includes(_id)).map(value => value.text) || [];
    return emotions.join(', ');
  };

  const getText = () => {
    const questions = dialogue.questions;
    return questions.length > 1 ? questions[1].answer : '';
  };

  const isInProgress = last(dialogue.questions)?.questionType !== QuestionType.FINISH;

  return (
    <Container onClick={containerClickHandler}>
      <HeaderContainer>
        <CreatedTime id={dialogue._id} />

        {isInProgress && <ClockIcon />}
      </HeaderContainer>

      <Text>{getEmotions()}</Text>
      <Text useTruncate>{getText()}</Text>
    </Container>
  );
};
