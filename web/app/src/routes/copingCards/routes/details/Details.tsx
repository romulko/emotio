import { useHistory } from 'react-router-dom';

import { BackButton } from '../../../../components/buttons/backButton';
import { CreateButton } from '../../../../components/buttons/createButton';
import { EditButton } from '../../../../components/buttons/editButton';
import { LoadingIndicator } from '../../../../components/loadingIndicator';
import { NotFound } from '../../../../components/notFound';
import { PageContainer } from '../../../../components/pageContainer';
import { PageHeader } from '../../../../components/pageHeader/PageHeader';
import { COPING_CARDS, COPING_CARDS_EDIT, COPING_CARDS_TECHNIC_CREATE } from '../../../routes.const';
import { CopingCardText } from '../../components/copingCardText';
import { useCopingCard } from '../../data/useCopingCard';
import { useCopingCardUrlParams } from '../../data/useCopingCardUrlParams';
import { TechnicList } from './components/technicList';

export const Details = () => {
  const history = useHistory();
  const { copingCard, loaded } = useCopingCard();
  const { injectParams } = useCopingCardUrlParams();

  if (!loaded) {
    return (
      <PageContainer>
        <LoadingIndicator />
      </PageContainer>
    );
  }

  if (!copingCard) {
    return (
      <PageContainer>
        <NotFound />
      </PageContainer>
    );
  }

  const createTechnicButtonClickHandler = () => history.push(injectParams(COPING_CARDS_TECHNIC_CREATE));

  const editButtonClickHandler = () => history.push(injectParams(COPING_CARDS_EDIT));

  return (
    <PageContainer>
      <PageHeader
        leftComponents={<BackButton to={COPING_CARDS} />}
        rightComponents={
          <>
            <EditButton onClick={editButtonClickHandler} />

            <CreateButton onClick={createTechnicButtonClickHandler} />
          </>
        }
      />

      <CopingCardText copingCard={copingCard} />

      <br />
      <br />

      <TechnicList technics={copingCard.technics} />
    </PageContainer>
  );
};
