import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { useCreateAbc } from '../../../../routes/abcs/routes/home/hooks/useCreateAbc';
import {
  ABCS,
  ABCS_STATISTIC,
  CONTACTS,
  COPING_CARDS,
  DIALOGUE_CREATE,
  DIALOGUES,
  HOME_WORKS,
  POSTULATES,
} from '../../../../routes/routes.const';
import { CreateButton } from '../../../buttons/createButton';
import { Logo } from '../logo';
import { useLogOut } from './hooks/useLogout';
import { ControlsContainer, Link, LinkCustom, LogoWrapper, Menus, Nav, Spacer } from './Styles';

interface Props {
  closeMenu: () => void;
}

export const SideMenu: FC<Props> = ({ closeMenu }) => {
  const history = useHistory();
  const { logOut } = useLogOut();
  const { t } = useTranslation();
  const { createAbc } = useCreateAbc();

  const logoutClickHandler = () => logOut();

  const createAbcClickHandler = () => {
    createAbc();

    closeMenu();
  };

  const createDialogueClickHandler = () => {
    history.push(DIALOGUE_CREATE);

    closeMenu();
  };

  return (
    <Nav onClick={(event: any) => event.stopPropagation()}>
      <Menus>
        <LogoWrapper onClick={closeMenu}>
          <Logo useImage />
        </LogoWrapper>

        <li>
          <ControlsContainer>
            <Link onClick={closeMenu} to={ABCS}>
              {t('menu.abc')}
            </Link>

            <CreateButton onClick={createAbcClickHandler} />
          </ControlsContainer>
        </li>

        <li>
          <Link onClick={closeMenu} to={ABCS_STATISTIC}>
            {t('menu.statistic')}
          </Link>
        </li>

        <Spacer />

        <li>
          <ControlsContainer>
            <Link onClick={closeMenu} to={DIALOGUES}>
              {t('menu.dialogues')}
            </Link>

            <CreateButton onClick={createDialogueClickHandler} />
          </ControlsContainer>
        </li>

        <Spacer />

        <li>
          <Link onClick={closeMenu} to={HOME_WORKS}>
            {t('menu.homeWorks')}
          </Link>
        </li>

        <Spacer />

        <li>
          <Link onClick={closeMenu} to={COPING_CARDS}>
            {t('menu.copingCards')}
          </Link>
        </li>

        <Spacer />

        <li>
          <Link onClick={closeMenu} to={POSTULATES}>
            {t('menu.postulates')}
          </Link>
        </li>

        <li>
          <Link onClick={closeMenu} to={CONTACTS}>
            {t('menu.contacts')}
          </Link>
        </li>

        <li>
          <LinkCustom onClick={logoutClickHandler}>{t('menu.logOut')}</LinkCustom>
        </li>
      </Menus>
    </Nav>
  );
};
