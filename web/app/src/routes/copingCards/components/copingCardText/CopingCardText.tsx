import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { useEmotions } from '../../../../components/emotionChooser/data/useEmotions';
import { CopingCard } from '../../data/useCopingCards';
import { BoldText, Text } from './Styles';

interface Props {
  copingCard: Pick<CopingCard, 'mind' | 'emotionId'>;
}

export const CopingCardText: FC<Props> = ({ copingCard }) => {
  const { t } = useTranslation();

  const { emotionIdToName } = useEmotions();
  let text = <></>;

  if (copingCard.mind && copingCard.emotionId) {
    text = (
      <>
        <Text>{t('routes.copingCards.cardRenderer.whenIFeel')}</Text>
        <BoldText>{emotionIdToName(copingCard.emotionId)}</BoldText>
        <Text>{t('routes.copingCards.cardRenderer.mind')}</Text>
        <BoldText>{copingCard.mind}</BoldText>
        <Text>{t('routes.copingCards.cardRenderer.iCan')}</Text>
      </>
    );
  } else if (copingCard.mind) {
    text = (
      <>
        <Text>{t('routes.copingCards.cardRenderer.whenIThink')}</Text>
        <BoldText>{copingCard.mind}</BoldText>
        <Text>{t('routes.copingCards.cardRenderer.iCan')}</Text>
      </>
    );
  } else if (copingCard.emotionId) {
    text = (
      <>
        <Text>{t('routes.copingCards.cardRenderer.whenIFeel')}</Text>
        <BoldText>{emotionIdToName(copingCard.emotionId)}</BoldText>
        <Text>{t('routes.copingCards.cardRenderer.iCan')}</Text>
      </>
    );
  }

  return text;
};
