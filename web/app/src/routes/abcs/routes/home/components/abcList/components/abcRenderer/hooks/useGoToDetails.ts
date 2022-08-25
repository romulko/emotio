import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { DIALOGUE } from '../../../../../../../../routes.const';

export const useGoToDetails = () => {
  const history = useHistory();

  const goToDetails = useCallback(
    (dialogueId: string) => history.push(DIALOGUE.replace(':dialogueId', dialogueId)),
    [history],
  );

  return {
    goToDetails,
  };
};
