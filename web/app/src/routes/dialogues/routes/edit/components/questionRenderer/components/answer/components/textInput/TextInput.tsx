import { FC, useEffect, useState } from 'react';

import { DeclineButton } from '../../../../../../../../../../components/buttons/declineButton';
import { SaveButton } from '../../../../../../../../../../components/buttons/saveButton';
import { Row } from '../../../../../../../../../../components/row';
import { useDialogueMutations } from '../../../../../../../../data/useDialogueMutations';
import { AnswerComponentProps } from '../types';
import { Container, Input, Text } from './Styles';

export const TextInput: FC<AnswerComponentProps> = ({
  question: { _id, predefinedAnswer, answer },
  answerValueRef,
}) => {
  const { dialogueUpdateAnswer, dialogueUpdateAnswerLoading } = useDialogueMutations();
  const [value, setValue] = useState(answer || predefinedAnswer || '');
  const [isEditMode, setIsEditMode] = useState(true);

  useEffect(() => {
    if (predefinedAnswer) {
      answerValueRef.current = predefinedAnswer;
    }
  }, [predefinedAnswer, answerValueRef]);

  const onChange = (event: any) => {
    const value = event.target.value;
    setValue(value);
    answerValueRef.current = value;
  };

  const saveClickHandler = () => {
    if (dialogueUpdateAnswerLoading) {
      return;
    }

    dialogueUpdateAnswer({ questionId: _id, answer: value });
    setIsEditMode(false);
  };

  const declineClickHandler = () => {
    if (dialogueUpdateAnswerLoading) {
      return;
    }

    setIsEditMode(false);
  };

  const titleClickHandler = () => {
    setIsEditMode(true);
  };

  if (answer && !isEditMode) {
    return <Text onClick={titleClickHandler}>{value}</Text>;
  }

  return (
    <Container>
      <Input autoFocus autoSize={{ minRows: 1, maxRows: 100 }} onChange={onChange} value={value} />

      <Row>
        <p>^ Collapse</p>

        {isEditMode && (
          <Row>
            <DeclineButton onClick={declineClickHandler} />
            <SaveButton onClick={saveClickHandler} />
          </Row>
        )}
      </Row>
    </Container>
  );
};
