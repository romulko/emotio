import { Popconfirm } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  onConfirm: () => void;
}

export const DeleteConfirmPopup: FC<Props> = ({ onConfirm, children }) => {
  const { t } = useTranslation();

  return (
    <Popconfirm
      title={t('components.deleteConfirmPopup.title')}
      onConfirm={onConfirm}
      okText={t('components.deleteConfirmPopup.yes')}
      cancelText={t('components.deleteConfirmPopup.cancel')}
    >
      {children}
    </Popconfirm>
  );
};
