import { Slider } from 'antd';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { firstLatterToCapital } from '../../utils/string.utils';
import { useEmotions } from '../emotionChooser/data/useEmotions';
import { Text } from './Styles';

interface Props {
  emotionId: string;
  intensity: number;
  onChange: (intensity: number) => void;
}

export const EmotionIntensity: FC<Props> = ({ intensity, emotionId, onChange }) => {
  const { t } = useTranslation();
  const { emotionIdToName } = useEmotions();
  const [intensityValue, setIntensityValue] = useState(intensity);

  const sliderChangeHandler = (value: number) => {
    setIntensityValue(value);
    onChange(value);
  };

  return (
    <>
      <Text>
        {firstLatterToCapital(emotionIdToName(emotionId))}. {t('components.emotionIntensity.text')} {intensityValue}
      </Text>

      <Slider min={1} max={10} value={intensityValue} onChange={sliderChangeHandler} />
    </>
  );
};
