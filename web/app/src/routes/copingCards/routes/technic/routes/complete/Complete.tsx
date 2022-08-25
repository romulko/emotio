import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { EmotionIntensity } from '../../../../../../components/emotionIntensity';
import { ModalContainer } from '../../../../../../components/modalContainer';
import { useHideHeader } from '../../../../../../hooks/useHideHeader';
import { COPING_CARDS_DETAILS } from '../../../../../routes.const';
import { useCopingCard } from '../../../../data/useCopingCard';
import { useCopingCardUrlParams } from '../../../../data/useCopingCardUrlParams';
import { useDoing } from '../../../../data/useDoing';
import { useDoingMutations } from '../../../../data/useDoingMutations';

export const Complete = () => {
  const { t } = useTranslation();
  const { copingCard } = useCopingCard();
  const { doing } = useDoing();
  const { injectParams } = useCopingCardUrlParams();
  const history = useHistory();

  const { updateDoingEndIntensity, completeDoing, completeDoingLading } = useDoingMutations();

  useHideHeader();

  if (!copingCard || !doing) {
    return <></>;
  }

  const emotionIntensityChangeHandler = (intensity: number) => {
    updateDoingEndIntensity({ endEmotionIntensity: intensity });
  };

  const completeButtonClickHandler = () => completeDoing().then(() => history.push(injectParams(COPING_CARDS_DETAILS)));

  return (
    <>
      <br />
      <ModalContainer title={t('routes.copingCards.routes.technic.routes.complete.title')} useCloseButton={false}>
        <EmotionIntensity
          emotionId={copingCard.emotionId}
          intensity={doing.startEmotionIntensity}
          onChange={emotionIntensityChangeHandler}
        />

        <br />

        <Button type="primary" shape="round" disabled={completeDoingLading} onClick={completeButtonClickHandler}>
          {t('routes.copingCards.routes.technic.routes.complete.buttons.complete')}
        </Button>
      </ModalContainer>
    </>
  );
};
