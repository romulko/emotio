import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { ModalContainer } from '../../../../components/modalContainer';
import { useHideHeader } from '../../../../hooks/useHideHeader';
import { DIALOGUE } from '../../../routes.const';
import { DialogueType } from '../../data/enums';
import { useDialogueMutations } from '../../data/useDialogueMutations';
import { useDialogueUrlParams } from '../../data/useDialogueUrlParams';
import { Container } from './Styles';

export const Create = () => {
  const { t } = useTranslation();

  useHideHeader();

  const history = useHistory();
  const { injectParams } = useDialogueUrlParams();
  const { dialogueCreate } = useDialogueMutations();

  const cognitiveRestructuringClickHandler = () => create(DialogueType.COGNITIVE_RESTRUCTURING);
  const deepConvictionClickHandler = () => create(DialogueType.DEEP_CONVICTION);
  const prosConsClickHandler = () => create(DialogueType.PROS_CONS);
  const wantClickHandler = () => create(DialogueType.WANT);

  const create = (dialogueType: DialogueType) => {
    dialogueCreate({ dialogueType })
      .then(value => value.data?.dialogueCreate)
      .then(value => value && history.replace(injectParams(DIALOGUE, [{ name: ':dialogueId', value: value._id }])));
  };

  return (
    <ModalContainer>
      <Container>
        <Button shape="round" onClick={cognitiveRestructuringClickHandler}>
          {t('routes.dialogues.routes.create.cognitiveRestructuring')}
        </Button>

        <Button shape="round" onClick={deepConvictionClickHandler}>
          {t('routes.dialogues.routes.create.deepConviction')}
        </Button>

        <Button shape="round" onClick={prosConsClickHandler}>
          {t('routes.dialogues.routes.create.prosCons')}
        </Button>

        <Button shape="round" onClick={wantClickHandler}>
          {t('routes.dialogues.routes.create.wish')}
        </Button>
      </Container>
    </ModalContainer>
  );
};
