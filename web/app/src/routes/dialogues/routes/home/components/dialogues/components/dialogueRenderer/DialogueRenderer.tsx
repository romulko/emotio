import { Col } from 'antd';
import { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { CreatedTime } from '../../../../../../../../components/createdTime';
import { ClockIcon } from '../../../../../../../../components/icons/clockIcon';
import { Text } from '../../../../../../../../components/text';
import { last } from '../../../../../../../../utils/array.utils';
import { DIALOGUE } from '../../../../../../../routes.const';
import { QuestionType } from '../../../../../../data/enums';
import { Dialogue } from '../../../../../../data/useDialogues';
import { useDialogueUrlParams } from '../../../../../../data/useDialogueUrlParams';
import { HeaderContainer } from './Styles';

interface Props {
  dialogue: Dialogue;
}

export const DialogueRenderer: FC<Props> = ({ dialogue }) => {
  const history = useHistory();
  const { injectParams } = useDialogueUrlParams();

  const textClickHandler = () => history.push(injectParams(DIALOGUE, [{ name: ':dialogueId', value: dialogue._id }]));

  const getText = () => dialogue.questions[0].answer || '';

  const isInProgress = last(dialogue.questions)?.questionType !== QuestionType.FINISH;

  return (
    <Col onClick={textClickHandler}>
      <HeaderContainer>
        <CreatedTime id={dialogue._id} />

        {isInProgress && <ClockIcon />}
      </HeaderContainer>

      {/*<p>{dialogueTypeToLabel[dialogue.dialogueType]}</p>*/}

      <Text useTruncate onClick={textClickHandler}>
        {getText()}
      </Text>
    </Col>
  );
};

// const dialogueTypeToLabel: {
//   [key: string]: string;
// } = {
//   [DialogueType.COGNITIVE_RESTRUCTURING.toString()]: 'КР',
//   [DialogueType.ABC.toString()]: 'АBC',
//   [DialogueType.DEEP_CONVICTION.toString()]: 'Глуб. убеж.',
//   [DialogueType.PROS_CONS.toString()]: 'За/Против',
//   [DialogueType.WANT.toString()]: 'Хочушка',
// };
