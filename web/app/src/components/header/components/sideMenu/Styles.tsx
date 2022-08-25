import { Link as RouterLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Nav = styled.nav``;

export const Menus = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  justify-content: center;
  gap: 20px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const linkStyle = css`
  font-size: 18px;
  color: #333;
  display: block;
`;

export const Link = styled(RouterLink)`
  ${linkStyle}
`;

export const LinkCustom = styled.p`
  ${linkStyle};
  cursor: pointer;
`;

export const Spacer = styled.div``;

export const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
