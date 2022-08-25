import { Route, Switch } from 'react-router-dom';

import { PrivateRoute } from '../components/privateRoute';
import { useTracking } from '../hooks/useTracking';
import { Home as AbcsHome } from './abcs/routes/home';
import { Statistic } from './abcs/routes/statistic';
import { Contacts } from './contacts';
import { Details as CopingCardsDetails } from './copingCards/routes/details';
import { Edit as CopingCardsEdit } from './copingCards/routes/edit';
import { Home as CopingCardsHome } from './copingCards/routes/home';
import { Begin as CopingCardTechnicBegin } from './copingCards/routes/technic/routes/begin';
import { Complete as CopingCardTechnicComplete } from './copingCards/routes/technic/routes/complete';
import { Doing as CopingCardTechnicDoing } from './copingCards/routes/technic/routes/doing';
import { Edit as CopingCardTechnicEdit } from './copingCards/routes/technic/routes/edit';
import { Create as DialoguesCreate } from './dialogues/routes/create';
import { Edit as DialoguesEdit } from './dialogues/routes/edit';
import { Home as DialoguesHome } from './dialogues/routes/home';
import { Home } from './home';
import { Details as HomeWorkDetails } from './homeWork/routes/details';
import { Edit as HomeWorkEdit } from './homeWork/routes/edit';
import { Home as HomeWorksHome } from './homeWork/routes/home';
import { Login } from './login';
import { Postulates } from './postulates';
import { Profile } from './profile';
import { Registration } from './registration';
import {
  ABCS,
  ABCS_STATISTIC,
  CONTACTS,
  COPING_CARDS,
  COPING_CARDS_CREAT,
  COPING_CARDS_DETAILS,
  COPING_CARDS_EDIT,
  COPING_CARDS_TECHNIC_BEGIN,
  COPING_CARDS_TECHNIC_COMPLETE,
  COPING_CARDS_TECHNIC_CREATE,
  COPING_CARDS_TECHNIC_DOING,
  COPING_CARDS_TECHNIC_EDIT,
  DIALOGUE,
  DIALOGUE_CREATE,
  DIALOGUES,
  HOME,
  HOME_WORKS,
  HOME_WORKS_CREAT,
  HOME_WORKS_DETAILS,
  HOME_WORKS_EDIT,
  LOGIN,
  POSTULATES,
  PROFILE,
  REGISTRATION,
} from './routes.const';
import { Container } from './Styles';

export const Routes = () => {
  useTracking();

  return (
    <Container>
      <Switch>
        <PrivateRoute path={HOME} exact>
          <Home />
        </PrivateRoute>

        <Route path={LOGIN} exact>
          <Login />
        </Route>

        <PrivateRoute path={REGISTRATION} exact>
          <Registration />
        </PrivateRoute>

        <PrivateRoute path={PROFILE} exact>
          <Profile />
        </PrivateRoute>

        <PrivateRoute path={POSTULATES} exact>
          <Postulates />
        </PrivateRoute>

        <PrivateRoute path={ABCS} exact>
          <AbcsHome />
        </PrivateRoute>

        <PrivateRoute path={ABCS_STATISTIC} exact>
          <Statistic />
        </PrivateRoute>

        <PrivateRoute path={COPING_CARDS} exact>
          <CopingCardsHome />
        </PrivateRoute>

        <PrivateRoute path={COPING_CARDS_DETAILS} exact>
          <CopingCardsDetails />
        </PrivateRoute>

        <PrivateRoute path={COPING_CARDS_CREAT} exact>
          <CopingCardsEdit />
        </PrivateRoute>

        <PrivateRoute path={COPING_CARDS_EDIT} exact>
          <CopingCardsEdit />
        </PrivateRoute>

        <PrivateRoute path={COPING_CARDS_TECHNIC_CREATE} exact>
          <CopingCardTechnicEdit />
        </PrivateRoute>

        <PrivateRoute path={COPING_CARDS_TECHNIC_EDIT} exact>
          <CopingCardTechnicEdit />
        </PrivateRoute>

        <PrivateRoute path={COPING_CARDS_TECHNIC_BEGIN} exact>
          <CopingCardTechnicBegin />
        </PrivateRoute>

        <PrivateRoute path={COPING_CARDS_TECHNIC_DOING} exact>
          <CopingCardTechnicDoing />
        </PrivateRoute>

        <PrivateRoute path={COPING_CARDS_TECHNIC_COMPLETE} exact>
          <CopingCardTechnicComplete />
        </PrivateRoute>

        <PrivateRoute path={DIALOGUES} exact>
          <DialoguesHome />
        </PrivateRoute>

        <PrivateRoute path={DIALOGUE_CREATE} exact>
          <DialoguesCreate />
        </PrivateRoute>

        <PrivateRoute path={DIALOGUE} exact>
          <DialoguesEdit />
        </PrivateRoute>

        <PrivateRoute path={HOME_WORKS} exact>
          <HomeWorksHome />
        </PrivateRoute>

        <PrivateRoute path={HOME_WORKS_DETAILS} exact>
          <HomeWorkDetails />
        </PrivateRoute>

        <PrivateRoute path={HOME_WORKS_CREAT} exact>
          <HomeWorkEdit />
        </PrivateRoute>

        <PrivateRoute path={HOME_WORKS_EDIT} exact>
          <HomeWorkEdit />
        </PrivateRoute>

        <PrivateRoute path={CONTACTS} exact>
          <Contacts />
        </PrivateRoute>
      </Switch>
    </Container>
  );
};
