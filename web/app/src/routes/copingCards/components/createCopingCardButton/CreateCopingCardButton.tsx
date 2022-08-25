import { useHistory } from 'react-router-dom';

import { CreateButton } from '../../../../components/buttons/createButton';
import { COPING_CARDS_CREAT } from '../../../routes.const';

export const CreateCopingCardButton = () => {
  const history = useHistory();

  const createClickHandler = () => {
    history.push(COPING_CARDS_CREAT);
  };

  return <CreateButton onClick={createClickHandler} />;
};
