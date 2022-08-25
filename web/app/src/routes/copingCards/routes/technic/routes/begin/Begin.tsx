import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { EmotionIntensity } from '../../../../../../components/emotionIntensity';
import { ModalContainer } from '../../../../../../components/modalContainer';
import { useHideHeader } from '../../../../../../hooks/useHideHeader';
import { COPING_CARDS_TECHNIC_DOING } from '../../../../../routes.const';
import { useCopingCard } from '../../../../data/useCopingCard';
import { useCopingCardUrlParams } from '../../../../data/useCopingCardUrlParams';
import { useDoing } from '../../../../data/useDoing';
import { useDoingMutations } from '../../../../data/useDoingMutations';

export const Begin = () => {
  const { t } = useTranslation();
  const { copingCard } = useCopingCard();
  const { doing } = useDoing();
  const { injectParams } = useCopingCardUrlParams();
  const history = useHistory();

  const { updateDoingStartIntensity, deleteDoing } = useDoingMutations();

  useHideHeader();

  if (!copingCard || !doing) {
    return <></>;
  }

  const modalContainerCloseClickHandler = () => {
    deleteDoing();
  };

  const emotionIntensityChangeHandler = (intensity: number) => {
    updateDoingStartIntensity({ startEmotionIntensity: intensity });
  };

  const nextButtonClickHandler = () => history.push(injectParams(COPING_CARDS_TECHNIC_DOING));

  return (
    <ModalContainer
      title={t('routes.copingCards.routes.technic.routes.begin.title')}
      onCloseClick={modalContainerCloseClickHandler}
    >
      <EmotionIntensity
        emotionId={copingCard.emotionId}
        intensity={doing.startEmotionIntensity}
        onChange={emotionIntensityChangeHandler}
      />
      <br />

      <Button type="primary" shape="round" onClick={nextButtonClickHandler}>
        {t('buttons.next')}
      </Button>
    </ModalContainer>
  );
};
