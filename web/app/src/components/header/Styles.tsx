import { Drawer as DrawerAntd } from 'antd';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
`;

const profilePicSize = css`
  width: 25px;
  height: 25px;
`;

export const ProfilePicWrapper = styled.div`
  ${profilePicSize};
`;

export const ProfilePic = styled.img`
  ${profilePicSize};
  border-radius: 15px;
  cursor: pointer;
`;

export const Drawer = styled(DrawerAntd)`
  .ant-drawer-body {
    padding: 20px;
  }

  .ant-drawer-mask {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
