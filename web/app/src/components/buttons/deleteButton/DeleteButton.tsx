import { Popconfirm } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { DeleteIcon } from './components/deleteIcon';
import { Container } from './Styles';

interface Props {
  onClick: () => void;
  disabled?: boolean;
}

export const DeleteButton: FC<Props> = ({ onClick, disabled }) => {
  const { t } = useTranslation();

  return (
    <Popconfirm
      disabled={disabled}
      title={t('components.deleteConfirmPopup.title')}
      onConfirm={onClick}
      okText={t('components.deleteConfirmPopup.yes')}
      cancelText={t('components.deleteConfirmPopup.cancel')}
    >
      <Container disabled={disabled} type="dashed" shape="circle">
        <DeleteIcon />
      </Container>
    </Popconfirm>
  );
};
