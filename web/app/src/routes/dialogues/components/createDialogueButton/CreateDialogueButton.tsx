import { useHistory } from 'react-router-dom';

import { CreateButton } from '../../../../components/buttons/createButton';
import { DIALOGUE_CREATE } from '../../../routes.const';

export const CreateDialogueButton = () => {
  const history = useHistory();

  const createClickHandler = () => {
    history.push(DIALOGUE_CREATE);
  };

  return <CreateButton onClick={createClickHandler} />;
};
