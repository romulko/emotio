import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { ModalContainer } from '../../../../../../components/modalContainer';
import { Text } from '../../../../../../components/text';
import { useHideHeader } from '../../../../../../hooks/useHideHeader';
import { COPING_CARDS_TECHNIC_COMPLETE } from '../../../../../routes.const';
import { useCopingCardUrlParams } from '../../../../data/useCopingCardUrlParams';
import { useTechnic } from '../../../../data/useTechnic';

export const Doing = () => {
  const { t } = useTranslation();

  const { copingCardTechnic } = useTechnic();

  const { injectParams } = useCopingCardUrlParams();
  const history = useHistory();

  useHideHeader();

  if (!copingCardTechnic) {
    return <></>;
  }

  const nextButtonClickHandler = () => history.push(injectParams(COPING_CARDS_TECHNIC_COMPLETE));

  return (
    <>
      <br />
      <ModalContainer title={t('routes.copingCards.routes.technic.routes.doing.title')} useCloseButton={false}>
        <Text>{copingCardTechnic.howToDescription}</Text>

        <br />

        <Button type="primary" shape="round" onClick={nextButtonClickHandler}>
          {t('routes.copingCards.routes.technic.routes.doing.buttons.done')}
        </Button>
      </ModalContainer>
    </>
  );
};
