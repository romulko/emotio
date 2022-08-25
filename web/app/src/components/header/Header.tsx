import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useIsHeaderHidden, useLoggedUser } from '../../data';
import { MenuIcon } from './components/menuIcon';
import { SideMenu } from './components/sideMenu';
import { Container, Drawer, ProfilePic, ProfilePicWrapper } from './Styles';

export const Header = () => {
  const { loggedUser } = useLoggedUser();
  const { isHeaderHidden } = useIsHeaderHidden();
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const history = useHistory();

  if (isHeaderHidden) {
    return <></>;
  }

  const menuIconClickHandler = () => setIsMenuOpened(!isMenuOpened);

  const sideMenuCloseHandler = () => setIsMenuOpened(false);

  const profilePicClickHandler = () => {
    history.push('/profile');
  };

  return (
    <>
      <Container>
        <MenuIcon onClick={menuIconClickHandler} />

        <ProfilePicWrapper>
          {loggedUser?.photo && <ProfilePic onClick={profilePicClickHandler} src={loggedUser.photo} />}
        </ProfilePicWrapper>
      </Container>

      <Drawer visible={isMenuOpened} closable={false} onClose={sideMenuCloseHandler} placement="left">
        <SideMenu closeMenu={sideMenuCloseHandler} />
      </Drawer>
    </>
  );
};
