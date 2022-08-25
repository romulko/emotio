import { Divider } from 'antd';
import { FC } from 'react';

import { CloseButton } from '../../../../../../components/buttons/closeButton';
import { LifeAreas } from './components/lifeAreas';
import { CloseIconWrapper, Container } from './Styles';

interface Props {
  closePopup: () => void;
}

export const FilterPopup: FC<Props> = ({ closePopup }) => {
  return (
    <Container onClick={event => event.stopPropagation()}>
      <CloseIconWrapper>
        <CloseButton onClick={closePopup} />
      </CloseIconWrapper>

      <LifeAreas />

      <Divider />
    </Container>
  );
};
