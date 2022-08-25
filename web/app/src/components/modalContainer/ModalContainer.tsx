import { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { CloseButton } from '../buttons/closeButton';
import { PageContainer } from '../pageContainer';
import { PageHeader } from '../pageHeader/PageHeader';
import { Title } from '../title';
import { Spacer } from './Styles';

interface Props {
  title?: string;
  useCloseButton?: boolean;
  onCloseClick?: () => void;
  rightComponents?: any;
}

export const ModalContainer: FC<Props> = ({
  title,
  useCloseButton = true,
  onCloseClick,
  rightComponents,
  children,
}) => {
  const history = useHistory();

  const closeIconClickHandler = () => {
    history.goBack();

    if (onCloseClick) {
      onCloseClick();
    }
  };

  const getLeftComponents = () => {
    if (!useCloseButton) {
      return <></>;
    }

    return <CloseButton onClick={closeIconClickHandler} />;
  };

  const getTitle = () => {
    if (!title) {
      return <></>;
    }

    return <Title>{title}</Title>;
  };

  return (
    <PageContainer>
      <Spacer />

      <PageHeader leftComponents={getLeftComponents()} rightComponents={rightComponents} />

      {getTitle()}

      {children}
    </PageContainer>
  );
};
