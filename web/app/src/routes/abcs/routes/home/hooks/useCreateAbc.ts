import { useHistory } from 'react-router-dom';

import { DialogueType } from '../../../../dialogues/data/enums';
import { useDialogueMutations } from '../../../../dialogues/data/useDialogueMutations';
import { useDialogueUrlParams } from '../../../../dialogues/data/useDialogueUrlParams';
import { DIALOGUE } from '../../../../routes.const';

export const useCreateAbc = () => {
  const history = useHistory();
  const { injectParams } = useDialogueUrlParams();
  const { dialogueCreate } = useDialogueMutations();

  const createAbc = () => {
    dialogueCreate({ dialogueType: DialogueType.ABC })
      .then(value => value.data?.dialogueCreate)
      .then(value => value && history.push(injectParams(DIALOGUE, [{ name: ':dialogueId', value: value._id }])));
  };

  return { createAbc };
};
